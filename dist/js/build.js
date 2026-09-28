// how progress
const howFill = document.querySelector('.how__progress-fill');
const howRocket = document.querySelector('.how__rocket');
const howItems = document.querySelectorAll('.how__item');
if (howFill && howRocket && howItems.length > 1) {
	const stepsCount = howItems.length;
	// trigger the moment a card's center gets this close to the viewport center
	// (fraction of viewport height) instead of waiting for an exact match
	const triggerOffsetRatio = 0.15;

	// the 1st card is active from the start (progress never below 1/stepsCount);
	// each next card lights up once its center crosses the (early) trigger line
	const updateHowProgress = () => {
		const winHeight = window.innerHeight;
		const triggerLine = winHeight / 2 + winHeight * triggerOffsetRatio;
		const offsets = Array.from(howItems).map((item) => {
			const rect = item.getBoundingClientRect();
			return rect.top + rect.height / 2 - triggerLine;
		});

		let reachedIndex = -1;
		offsets.forEach((offset, i) => {
			if (offset <= 0) reachedIndex = i;
		});

		let progress;
		if (reachedIndex >= stepsCount - 1) {
			progress = 1;
		} else {
			const i = Math.max(reachedIndex, 0);
			const gap = offsets[i + 1] - offsets[i];
			let f = gap > 0 ? -offsets[i] / gap : offsets[i] <= 0 ? 1 : 0;
			f = Math.min(1, Math.max(0, f));
			progress = (i + 1 + f) / stepsCount;
		}

		howFill.style.width = progress * 100 + '%';
		howRocket.style.left = progress * 100 + 10 + '%';

		howItems.forEach((item, i) => {
			item.classList.toggle('is-active', i === 0 || offsets[i] <= 0);
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
