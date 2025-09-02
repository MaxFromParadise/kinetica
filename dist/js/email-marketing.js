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

// document.querySelectorAll('.my-page')[1].style.backgroundColor = 'white';

// const pageFlip = new St.PageFlip(document.getElementById('book'), {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// 	showCover: false,
// 	size: 'stretch',
// 	// drawShadow: false,
// 	maxShadowOpacity: 0.5, // Half shadow intensity
// });

// pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

if (document.querySelector('.karaoke-date__item')) {
	const items = document.querySelectorAll('.karaoke-date__item');
	const wrapper = document.querySelector('.date-page-wrap');
	const button = document.querySelector('#show-date');

	button.addEventListener('click', () => {
		button.style.visibility = 'hidden';
		// Сначала вращаем

		// Через 0.6–0.8 секунды сдвигаем лендинг
		setTimeout(() => {
			wrapper.classList.add('show-date');
		}, 300);
		setInterval(createLeaf, 700);
		for (let i = 0; i < 10; i++) {
			createLeaf();
		}
		setTimeout(() => {
			const secondDate = document.querySelector('.calendar-date_second');
			secondDate.classList.add('calendar-date_second-out');
			items.forEach((item, i) => {
				setTimeout(() => {
					if (i != 0 && i != items.length) {
						items[i - 1].classList.remove('karaoke-date__item_active');
					}
					item.style.opacity = 1;
					item.classList.add('karaoke-date__item_active');
					if (i === items.length - 1) {
						document.querySelector('.date-page__button').style.opacity = 1;
					}
				}, i * 1200);
			});
		}, 2600);
	});
}
function createLeaf() {
	const leaf = document.createElement('div');
	leaf.classList.add('leaf');

	const startLeft = Math.random() * window.innerWidth;
	const duration = 5 + Math.random() * 5;
	const xMove = (Math.random() - 0.5) * 200 + 'px';

	// случайные оттенки
	const hue = Math.floor(Math.random() * 90 - 45) + 'deg'; // -45..45 градусов
	const bright = (0.8 + Math.random() * 0.4).toFixed(2); // 0.8–1.2
	const sat = (0.7 + Math.random() * 0.6).toFixed(2); // 0.7–1.3

	leaf.style.left = startLeft + 'px';
	leaf.style.setProperty('--x-move', xMove);
	leaf.style.animationDuration = duration + 's';
	leaf.style.setProperty('--hue', hue);
	leaf.style.setProperty('--bright', bright);
	leaf.style.setProperty('--sat', sat);

	document.querySelector('.date-page').appendChild(leaf);

	setTimeout(() => leaf.remove(), duration * 1000);
}
