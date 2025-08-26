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

// amp-email
if (document.querySelector('.amp-email__slider .swiper')) {
	const ampEmailSwiper = new Swiper('.amp-email__slider .swiper', {
		freeMode: true,
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
		},
		slidesPerView: 'auto',
		pagination: {
			el: '.amp-email__bullets',
			clickable: true,
		},
		// effect: 'coverflow',
		coverflowEffect: {
			rotate: -60,
			stretch: 100,
			depth: 500,
			modifier: 0.9,
			slideShadows: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 1,
				freeMode: false,
				loop: true,
				grabCursor: true,
				autoplay: {
					delay: 4000,
				},
			},
		},
	});
}
// results
if (document.querySelector('.results .swiper')) {
	const bullets = document.querySelector('.results__bullets');

	const resultsSwiper = new Swiper('.results .swiper', {
		slidesPerView: 1,
		spaceBetween: 500,
		speed: 2000,
		pagination: {
			el: '.results__bullets',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
		},
	});
}

document.querySelectorAll('.my-page')[1].style.backgroundColor = 'white';

const pageFlip = new St.PageFlip(document.getElementById('book'), {
	width: window.innerWidth,
	height: window.innerHeight,
	showCover: false,
	size: 'stretch',
	// drawShadow: false,
	maxShadowOpacity: 0.5, // Half shadow intensity
});

pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

document.querySelector('#test').addEventListener('click', () => {
	pageFlip.flipNext({ corner: 'top' });
});
