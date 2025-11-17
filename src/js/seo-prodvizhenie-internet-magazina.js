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
	// center width
	const CENTER_BAND = 120;

	const texts = Array.from(document.querySelectorAll('.item-main-steps'));

	if (!texts.length) return;

	let ticking = false;

	function updateStyles() {
		const viewportCenter = window.innerHeight / 2;

		texts.forEach((el) => {
			const rect = el.getBoundingClientRect();
			const title = el.querySelector('.item-main-steps__title');

			const elCenter = rect.top + rect.height / 2;
			const delta = elCenter - viewportCenter;

			// el.style.color = 'rgb(173, 176, 188)';
			// el.style.transition = '0.8s ease 0s';

			if (Math.abs(delta) <= CENTER_BAND) {
				el.style.opacity = '1';
				title.style.color = '#00B2FF';
			} else if (delta > 0) {
				// Lower
				el.style.opacity = '0.5';
				el.style.color = '#ADB0BC';
			} else {
				// Upper
				el.style.opacity = '1';
				title.style.color = '#292B32';
			}
		});

		ticking = false;
	}

	function onScrollOrResize() {
		if (!ticking) {
			ticking = true;
			requestAnimationFrame(updateStyles);
		}
	}

	window.addEventListener('scroll', onScrollOrResize, { passive: true });
	window.addEventListener('resize', onScrollOrResize);
	window.addEventListener('load', updateStyles);
	document.addEventListener('DOMContentLoaded', updateStyles);
})();
