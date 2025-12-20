const ticketBg = document.querySelector('.ticket-bg');

if (ticketBg) {
	const swipers = ticketBg.querySelectorAll('.swiper');

	swipers.forEach((slider, i) => {
		new Swiper(slider, {
			loop: true,
			freeMode: true,
			slidesPerView: 'auto',
			spaceBetween: 60,
			speed: 15000,
			autoplay: {
				delay: 0,
				reverseDirection: i % 2 === 0,
				disableOnInteraction: false,
				pauseOnMouseEnter: false,
			},

			breakpoints: {
				// when window width is >= 768px
				768: {
					spaceBetween: 25,
				},
			},
		});
	});
	function updateCenterSwiper() {
		const viewportCenter = window.innerHeight / 2;

		let closestSwiper = null;
		let minDistance = Infinity;

		swipers.forEach((swiper) => {
			const rect = swiper.getBoundingClientRect();
			const swiperCenter = rect.top + rect.height / 2;
			const distance = Math.abs(viewportCenter - swiperCenter);

			if (distance < minDistance) {
				minDistance = distance;
				closestSwiper = swiper;
			}
		});

		swipers.forEach((swiper) => swiper.classList.remove('is-center'));
		if (closestSwiper) closestSwiper.classList.add('is-center');
	}

	window.addEventListener('scroll', updateCenterSwiper);
	window.addEventListener('resize', updateCenterSwiper);
	updateCenterSwiper();
}

if (document.querySelector('.faq')) {
	const questions = document.querySelectorAll('[data-faq-question]');
	const answers = document.querySelectorAll('[data-faq-answer]');
	const answersContainer = document.querySelector('.answers-faq');

	// Вспомог: вернуть все ответы в контейнер (для десктопа)
	function restoreAnswersToContainer() {
		answers.forEach((a) => {
			if (a.parentElement !== answersContainer) {
				answersContainer.appendChild(a);
			}
			a.classList.remove('in-mobile'); // флаг мобильного режима
			a.classList.remove('active'); // скрыть по умолчанию
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
		});

		const question = document.querySelector(`[data-faq-question="${target}"]`);
		const answer = document.querySelector(`[data-faq-answer="${target}"]`);
		if (!question || !answer) return;

		// Переместим ответ сразу после вопроса (в мобильный поток)
		question.parentNode.insertBefore(answer, question.nextSibling);
		answer.classList.add('in-mobile');

		// показать
		question.classList.add('active');
		answer.classList.add('active');
	}

	function handleClick(question) {
		const target = question.getAttribute('data-faq-question');
		const mobile = window.innerWidth <= 991.98;

		if (mobile) {
			activateMobile(target);
		} else {
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

		if (window.innerWidth <= 991.98) {
			// MOBILE: ничего не активируем по умолчанию — все ответы скрыты
			// Убедимся, что все ответы скрыты и (если они были перемещены) вернём их в мобильный поток пустыми:
			questions.forEach((q) => q.classList.remove('active'));
			answers.forEach((a) => {
				a.classList.remove('active');
				a.classList.remove('in-mobile');
				// убедимся, что ответы не показываются (их размещаем в контейнер, но в мобильной вёрстке они будут вставляться при клике)
				if (a.parentElement !== answersContainer) {
					// оставляем их там — не принуждаем возвращаться; это безопасно
				}
			});
		} else {
			// DESKTOP: стандартное поведение — ответы в контейнере, первый активен
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
				// при переходе на десктоп — вернуть в контейнер и восстановить активный (если был)
				restoreAnswersToContainer();
				const activeQ = document.querySelector('.questions-faq__item.active') || questions[0];
				if (activeQ) activateDesktop(activeQ.getAttribute('data-faq-question'));
			} else {
				// при переходе на мобильный — не активируем автоматически (оставляем все закрытыми)
				questions.forEach((q) => q.classList.remove('active'));
				answers.forEach((a) => {
					a.classList.remove('active');
					a.classList.remove('in-mobile');
				});
			}
		}, 120);
	});

	init();
}

(() => {
	const mainSlider = new Swiper('.main__slider', {
		direction: 'vertical',
		loop: true,
		speed: 3000,
		slidesPerView: 1,
		effect: 'slide',
		mousewheel: {
			enabled: true,
		},
	});
})();
