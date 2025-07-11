// top-awards
if (document.querySelector('.top-awards__slider .swiper')) {
	const topAwardsSwiper = new Swiper('.top-awards__slider .swiper', {
		// Optional parameters
		loop: false,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 60,

		navigation: {
			nextEl: '.top-awards__next',
			prevEl: '.top-awards__prev',
		},
		breakpoints: {
			// when window width is >= 992px
			992: {
				spaceBetween: 150,
			},
		},
	});
}

if (document.querySelector('.federal-brands__slider .swiper')) {
	const federalBrandsSwiper = new Swiper('.federal-brands__slider .swiper', {
		// Optional parameters
		loop: false,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,

		navigation: {
			nextEl: '.federal-brands__next',
			prevEl: '.federal-brands__prev',
		},
		breakpoints: {
			// when window width is >= 992px
			768: {
				spaceBetween: 80,
			},
		},
	});
}
if (document.querySelector('.media-about-us__slider .swiper')) {
	const mediaAboutSwiper = new Swiper('.media-about-us__slider .swiper', {
		// Optional parameters
		loop: false,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,

		navigation: {
			nextEl: '.media-about-us__next',
			prevEl: '.media-about-us__prev',
		},
		breakpoints: {
			// when window width is >= 992px
			768: {
				spaceBetween: 80,
			},
		},
	});
}

// report
const reportSwiper = new Swiper('.report__slider', {
	slidesPerView: 'auto',
	centeredSlides: true,
	// loop: true,
	spaceBetween: 0,

	effect: 'coverflow',
	coverflowEffect: {
		rotate: -30,
		stretch: 900,
		depth: 1500,
		modifier: 0.1,
		slideShadows: false,
	},

	pagination: {
		el: '.report__bullets',
		clickable: true,
	},
	breakpoints: {
		// when window width is >= 992px
		992: {
			slidesPerView: 'auto',
			spaceBetween: 120,
		},
	},
});

// thanks
if (document.querySelector('.thanks__slider')) {
	const thanksSwiper = new Swiper('.thanks__slider', {
		// Optional parameters
		loop: false,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 40,
	});

	const popup = document.getElementById('thanks-popup');
	const popupImg = popup.querySelector('.thanks-popup__img');
	const popupClose = popup.querySelector('.thanks-popup__close');

	document.querySelectorAll('.thanks__slide img').forEach((img) => {
		img.addEventListener('click', () => {
			popupImg.src = img.src;
			popup.style.display = 'flex';
		});
	});

	popupClose.addEventListener('click', () => {
		popup.style.display = 'none';
	});

	popup.addEventListener('click', (e) => {
		if (e.target === popup) {
			popup.style.display = 'none';
		}
	});
}

// digital-expertise
if (document.querySelector('.digital-expertise__slider .swiper')) {
	const digitalExpertiseSwiper = new Swiper('.digital-expertise__slider .swiper', {
		// Optional parameters
		loop: false,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 50,
	});
}
// steps
document.querySelectorAll('.item-main-steps__text').forEach((toggle) => {
	let timeoutId;

	toggle.addEventListener('mouseleave', () => {
		timeoutId = setTimeout(() => {
			const checkbox = toggle.querySelector('.item-main-steps__checkbox');
			if (checkbox) checkbox.checked = false;
		}, 500);
	});

	toggle.addEventListener('mouseenter', () => {
		clearTimeout(timeoutId);
	});
});
