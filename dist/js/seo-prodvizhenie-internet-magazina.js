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

if (document.querySelector('.media-about-us__slider .swiper')) {
	const mediaAboutSwiper = new Swiper('.media-about-us__slider .swiper', {
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
const specialProjectsSection = document.querySelector('.special-projects');
if (specialProjectsSection) {
	const swipers = specialProjectsSection.querySelectorAll('.special-projects__line .swiper');

	swipers.forEach((slider, i) => {
		new Swiper(slider, {
			loop: true,
			freeMode: true,
			slidesPerView: 'auto',
			spaceBetween: 60,
			speed: 10000,
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
(function () {
	const CENTER_BAND = 120;

	// Всегда берем актуальные элементы, на случай динамики
	const getTexts = () => Array.from(document.querySelectorAll('.item-main-steps'));

	function updateStyles() {
		const texts = getTexts();
		if (!texts.length) return;

		const viewportCenter = window.innerHeight / 2;

		texts.forEach((el) => {
			const rect = el.getBoundingClientRect();
			const title = el.querySelector('.item-main-steps__title');

			const elCenter = rect.top + rect.height / 2;
			const delta = elCenter - viewportCenter;

			if (Math.abs(delta) <= CENTER_BAND) {
				// В центре
				el.style.opacity = '1';
				if (title) title.style.color = '#00B2FF';
			} else if (delta > 0) {
				// Элемент ниже центра
				el.style.opacity = '0.5';
				if (title) title.style.color = '#ADB0BC'; // <-- исправлено: цвет заголовка
			} else {
				// Элемент выше центра
				el.style.opacity = '1';
				if (title) title.style.color = '#292B32';
			}
		});
	}

	let ticking = false;
	function requestUpdate() {
		if (!ticking) {
			ticking = true;
			requestAnimationFrame(() => {
				updateStyles();
				ticking = false;
			});
		}
	}

	function getAllScrollables() {
		const all = Array.from(document.querySelectorAll('*'));
		const scrollables = all.filter((el) => {
			const style = getComputedStyle(el);
			if (el.clientHeight === 0 && el.clientWidth === 0) return false;
			return /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX);
		});
		const se = document.scrollingElement || document.documentElement;
		const set = new Set([window, se, ...scrollables]);
		return Array.from(set);
	}

	function attachListeners() {
		const targets = getAllScrollables();

		targets.forEach((t) => {
			try {
				if (t === window) {
					window.addEventListener('scroll', requestUpdate, { passive: true });
				} else {
					t.addEventListener('scroll', requestUpdate, { passive: true });
				}
			} catch (e) {}
		});

		// fallback — ловим события колеса и touch
		document.addEventListener('wheel', requestUpdate, { passive: true });
		document.addEventListener('touchmove', requestUpdate, { passive: true });
	}

	// Если DOM меняется — пересобираем слушатели и триггерим обновление
	if ('MutationObserver' in window) {
		const mo = new MutationObserver(() => {
			attachListeners();
			requestUpdate();
		});
		mo.observe(document.documentElement || document.body, { childList: true, subtree: true });
	}

	// Init
	window.addEventListener('resize', requestUpdate);
	window.addEventListener('load', updateStyles);
	document.addEventListener('DOMContentLoaded', updateStyles);

	attachListeners();
	requestAnimationFrame(updateStyles);
})();
