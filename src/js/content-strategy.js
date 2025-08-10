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
