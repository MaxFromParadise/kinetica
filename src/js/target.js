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

if (document.querySelector('.socials-links__slider .swiper')) {
	const resultsSwiper = new Swiper('.socials-links__slider .swiper', {
		slidesPerView: 'auto',
		spaceBetween: 50,
		loop: true,
		speed: 3000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	});
}
