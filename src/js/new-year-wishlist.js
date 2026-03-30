// ====== CONFIG ======
const GET_WISH_URL = 'https://kinetica.su/api/get-wish';
const POST_WISH_URL = 'https://kinetica.su/api/post-wish';
// ====== CONFIG ======

// ====== ELEMENTS ======
const overlay = document.querySelector('.overlay');
const getWishButtons = document.querySelectorAll('[data-getWish]');
const postWishButtons = document.querySelectorAll('[data-postWish]');

// GET wish
const wish = document.querySelector('.wish');
const wishText = document.querySelector('.wish__text');
const wishName = document.querySelector('.wish__name');
const wishCity = document.querySelector('.wish__city');
const wishClose = document.querySelector('.wish__close');

// POST wish
const postWish = document.querySelector('.post-wish');
const postWishClose = document.querySelector('.post-wish__close');
const postWishForm = document.querySelector('.post-wish__paper');
const messageInput = postWishForm.querySelector('input[name="message"]');
const symbolsCounter = postWishForm.querySelector('.post-wish__symbols');

// SUCCESS
const successWish = document.querySelector('.success-wish');
const successWishClose = document.querySelector('.success-wish__close');
const successWishPaper = document.querySelector('.success-wish__paper');

// ====== HELPERS ======
function openModal(modal) {
	closeAllModals();
	overlay.classList.add('show');
	modal.classList.add('show');
}

function closeModal(modal) {
	modal.classList.remove('show');
	if (!document.querySelector('.wish.show, .post-wish.show, .success-wish.show')) {
		overlay.classList.remove('show');
	}
}

function closeAllModals() {
	[wish, postWish, successWish].forEach((m) => m.classList.remove('show'));
	overlay.classList.remove('show');
}

// ====== CLOSE EVENTS ======
wishClose.addEventListener('click', () => closeModal(wish));
postWishClose.addEventListener('click', () => closeModal(postWish));
successWishClose.addEventListener('click', () => closeModal(successWish));

overlay.addEventListener('click', closeAllModals);

[wish, postWish, successWish].forEach((modal) => {
	modal.addEventListener('click', (e) => e.stopPropagation());
});

getWishButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();

		openModal(wish);

		wishText.textContent = 'Loading...';
		wishName.textContent = '';
		wishCity.textContent = '';

		fetch(GET_WISH_URL)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					console.error(data.error);
					return;
				}

				wishText.textContent = data.text || '';
				wishName.textContent = data.name || '';
				wishCity.textContent = data.city || '';
			})
			.catch(console.error);
	});
});

postWishButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		openModal(postWish);
	});
});

// ====== LIMIT MESSAGE (250) ======
messageInput.addEventListener('input', () => {
	if (messageInput.value.length > 250) {
		messageInput.value = messageInput.value.slice(0, 250);
	}
	symbolsCounter.textContent = messageInput.value.length;
});

// ====== POST WISH ======
postWishForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(postWishForm);

	const payload = {
		text: formData.get('message'),
		name: formData.get('name'),
		city: formData.get('city'),
	};

	fetch(POST_WISH_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.error) {
				successWishPaper.textContent = data.error;
				console.error(data.error);
				return;
			} else {
				successWishPaper.textContent = 'Ваше пожелание успешно отправлено!';
			}

			closeModal(postWish);
			postWishForm.reset();
			symbolsCounter.textContent = '0';
			openModal(successWish);
		})
		.catch(console.error);
});
