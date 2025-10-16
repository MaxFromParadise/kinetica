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
			1850: {
				spaceBetween: 280,
			},
			992: {
				spaceBetween: 140,
			},
		},
	});
}

if (document.querySelector('.marquee-influence__slider .swiper')) {
	const marqueeInfluence = new Swiper('.marquee-influence__slider .swiper', {
		// Optional parameters
		loop: true,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed: 4000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			// when window width is >= 992px
			768: {
				spaceBetween: 80,
			},
		},
	});
}
if (document.querySelector('.cdek-top-marq__slider .swiper')) {
	const cdekTopMarq = new Swiper('.cdek-top-marq__slider .swiper', {
		// Optional parameters
		loop: true,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed: 4000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			// when window width is >= 992px
			768: {
				spaceBetween: 80,
			},
		},
	});
}
if (document.querySelector('.cdek-bottom-marq__slider .swiper')) {
	const cdekBottomMarq = new Swiper('.cdek-bottom-marq__slider .swiper', {
		// Optional parameters
		loop: true,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed: 4000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			// when window width is >= 992px
			768: {
				spaceBetween: 80,
			},
		},
	});
}

if (document.querySelector('.increase')) {
	(function () {
		const items = document.querySelectorAll('.increase__item');
		let current = 0;

		function showNext() {
			let next = (current + 1) % items.length;

			// сброс классов
			items.forEach((el) => (el.className = 'increase__item'));

			// сценарий переходов
			if (current === 2 && next === 3) {
				// 3 -> 4 (slide up)
				items[current].classList.add('slide-up-out');
				items[next].classList.add('slide-up-in');
			} else if (current === 3 && next === 0) {
				// 4 -> 1 (slide down)
				items[current].classList.add('slide-down-out');
				items[next].classList.add('slide-down-in');
			} else {
				// обычная смена opacity
				items[current].classList.remove('active');
				items[next].classList.add('active');
			}

			current = next;
		}

		items[0].classList.add('active'); // старт
		setInterval(showNext, 2000);
	})();
}

if (document.querySelector('.federal-brands__slider .swiper')) {
	const federalBrandsSwiper = new Swiper('.federal-brands__slider .swiper', {
		// Optional parameters
		loop: true,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed: 2000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},

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
if (document.querySelector('.steps__slider .swiper')) {
	const stepsSwiper = new Swiper('.steps__slider .swiper', {
		// Optional parameters
		loop: false,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed: 1000,
		// autoplay: {
		// 	delay: 0,
		// 	disableOnInteraction: false,
		// 	pauseOnMouseEnter: true,
		// },

		breakpoints: {
			// when window width is >= 992px
			768: {
				spaceBetween: 30,
			},
		},
	});
}

if (document.querySelector('.faq')) {
	const questions = document.querySelectorAll('[data-faq-question]');
	const answers = document.querySelectorAll('[data-faq-answer]');

	questions.forEach((question) => {
		question.addEventListener('click', () => {
			const target = question.getAttribute('data-faq-question');

			questions.forEach((q) => q.classList.remove('active'));
			answers.forEach((a) => a.classList.remove('active'));

			question.classList.add('active');
			const answer = document.querySelector(`[data-faq-answer="${target}"]`);
			if (answer) answer.classList.add('active');
		});
	});
	if (questions.length > 0 && answers.length > 0) {
		questions[0].classList.add('active');
		const firstAnswer = document.querySelector(`[data-faq-answer="${questions[0].getAttribute('data-faq-question')}"]`);
		if (firstAnswer) firstAnswer.classList.add('active');
	}
}

if (document.querySelector('.cases__slider .swiper')) {
	const casesSlider = new Swiper('.cases__slider .swiper', {
		// Optional parameters
		loop: false,
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,

		navigation: {
			nextEl: '.cases__next',
			prevEl: '.cases__prev',
		},
		// breakpoints: {
		// 	// when window width is >= 992px
		// 	1850: {
		// 		spaceBetween: 280,
		// 	},
		// 	992: {
		// 		spaceBetween: 140,
		// 	},
		// },
	});
}
