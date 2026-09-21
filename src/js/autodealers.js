// how progress
const howFill = document.querySelector('.how__progress-fill');
const howRocket = document.querySelector('.how__rocket');
const howItems = document.querySelectorAll('.how__item');
const howFirstItem = howItems[0];
const howLastItem = howItems[howItems.length - 1];
if (howFill && howRocket && howFirstItem && howLastItem && howFirstItem !== howLastItem) {
	// progress = 0 when the first card's center reaches the viewport center,
	// progress = 1 when the last card's center reaches the viewport center
	const updateHowProgress = () => {
		const winHeight = window.innerHeight;
		const firstRect = howFirstItem.getBoundingClientRect();
		const lastRect = howLastItem.getBoundingClientRect();
		const firstOffset = firstRect.top + firstRect.height / 2 - winHeight / 2;
		const lastOffset = lastRect.top + lastRect.height / 2 - winHeight / 2;
		const total = lastOffset - firstOffset;

		let progress;
		if (total > 0) {
			progress = -firstOffset / total;
		} else {
			progress = firstOffset <= 0 ? 1 : 0;
		}
		progress = Math.min(1, Math.max(0, progress));

		howFill.style.width = progress * 100 + '%';
		howRocket.style.left = progress * 100 + 10 + '%';

		howItems.forEach((item) => {
			const itemRect = item.getBoundingClientRect();
			const itemCenter = itemRect.top + itemRect.height / 2;
			item.classList.toggle('is-active', itemCenter <= winHeight / 2);
		});
	};

	const loop = () => {
		updateHowProgress();
		requestAnimationFrame(loop);
	};
	loop();
}

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
