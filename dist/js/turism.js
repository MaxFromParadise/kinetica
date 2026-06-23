if (document.querySelector('.fast__slider .swiper')) {
	new Swiper('.fast__slider .swiper', {
		autoHeight: true,
		spaceBetween: 100,
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: '.fast__controls-next',
			prevEl: '.fast__controls-prev',
		},
	});
}
