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
	const slides = document.querySelectorAll('.top-awards__slider .swiper-slide');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio >= 0.95) {
					entry.target.style.opacity = '1';
				} else {
					entry.target.style.opacity = '0.5';
				}
			});
		},
		{
			root: document.querySelector('.top-awards__slider .swiper'), // область просмотра — сам слайдер
			threshold: [0, 0.5, 0.95], // наблюдаем разные уровни видимости
		}
	);

	slides.forEach((slide) => {
		slide.style.transition = 'opacity 0.3s ease';
		observer.observe(slide);
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
		setInterval(showNext, 1000);
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
		mousewheel: {
			forceToAxis: false, // скролл только по горизонтали
			sensitivity: 0.8, // чувствительность
			releaseOnEdges: true, // позволяет проскроллить страницу, когда достигнут край
		},
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
	const slides = document.querySelectorAll('.steps__slider .swiper-slide');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio >= 0.95) {
					entry.target.style.opacity = '1';
				} else {
					entry.target.style.opacity = '0.5';
				}
			});
		},
		{
			root: document.querySelector('.steps__slider .swiper'), // область просмотра — сам слайдер
			threshold: [0, 0.5, 0.95], // наблюдаем разные уровни видимости
		}
	);

	slides.forEach((slide) => {
		slide.style.transition = 'opacity 0.3s ease';
		observer.observe(slide);
	});
}

if (document.querySelector('.faq')) {
	const questions = document.querySelectorAll('[data-faq-question]');
	const answers = document.querySelectorAll('[data-faq-answer]');
	const answersContainer = document.querySelector('.answers-faq');

	// Вспомог: вернуть все ответы в контейнер (для десктопа)
	function restoreAnswersToContainer() {
		answers.forEach((a) => {
			// если уже в контейнере — ничего
			if (a.parentElement !== answersContainer) {
				answersContainer.appendChild(a);
				a.classList.remove('in-mobile'); // флаг мобильного режима
				a.classList.remove('active'); // скрыть по умолчанию, далее активируем нужный
			}
		});
	}

	function activateDesktop(target) {
		questions.forEach((q) => q.classList.remove('active'));
		answers.forEach((a) => a.classList.remove('active'));

		const question = document.querySelector(`[data-faq-question="${target}"]`);
		const answer = document.querySelector(`[data-faq-answer="${target}"]`);
		if (question) question.classList.add('active');
		if (answer) answer.classList.add('active');
	}

	function activateMobile(target) {
		// Сначала скрываем все вопросы/ответы
		questions.forEach((q) => q.classList.remove('active'));
		answers.forEach((a) => {
			a.classList.remove('active');
			a.classList.remove('in-mobile');
			// если какой-то ответ не в контейнере, возвращать не будем — управление через insertAfter ниже
		});

		const question = document.querySelector(`[data-faq-question="${target}"]`);
		const answer = document.querySelector(`[data-faq-answer="${target}"]`);
		if (!question || !answer) return;

		// Переместим ответ сразу после вопроса (если он ещё не там)
		if (answer.parentElement !== question.parentElement) {
			// вставляем сразу после вопроса
			question.parentNode.insertBefore(answer, question.nextSibling);
			answer.classList.add('in-mobile');
		} else {
			// если уже в том же контейнере, убедимся что он именно после вопроса
			question.parentNode.insertBefore(answer, question.nextSibling);
			answer.classList.add('in-mobile');
		}

		// показать
		question.classList.add('active');
		answer.classList.add('active');
	}

	function handleClick(question) {
		const target = question.getAttribute('data-faq-question');
		const mobile = window.innerWidth <= 767.98;

		if (mobile) {
			activateMobile(target);
		} else {
			// гарантируем что ответы находятся в контейнере
			restoreAnswersToContainer();
			activateDesktop(target);
		}
	}

	questions.forEach((question) => {
		question.addEventListener('click', () => handleClick(question));
	});

	// начальное состояние
	function init() {
		if (questions.length === 0 || answers.length === 0) return;

		if (window.innerWidth <= 767.98) {
			// mobile: покажем первый ответ под первым вопросом
			activateMobile(questions[0].getAttribute('data-faq-question'));
		} else {
			// desktop: стандартное поведение — ответы в контейнере
			restoreAnswersToContainer();
			activateDesktop(questions[0].getAttribute('data-faq-question'));
		}
	}

	// при ресайзе возвращаем ответы в контейнер если переходим на десктоп
	let resizeTimer;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			if (window.innerWidth > 991.98) {
				restoreAnswersToContainer();
				// включим активный вопрос + ответ (если был)
				const activeQ = document.querySelector('.questions-faq__item.active') || questions[0];
				if (activeQ) activateDesktop(activeQ.getAttribute('data-faq-question'));
			} else {
				// при переходе на мобильный — если ничего активно, активируем первый
				const anyMobileActive = document.querySelector('.answers-faq .in-mobile.active') || document.querySelector('.item-answers-faq.in-mobile.active');
				if (!anyMobileActive) {
					activateMobile(questions[0].getAttribute('data-faq-question'));
				}
			}
		}, 120);
	});

	init();
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
