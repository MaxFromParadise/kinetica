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

function calculateCost() {
	const region = document.querySelector('select[name="region"]')?.value;
	const theme = document.querySelector('select[name="theme"]')?.value;
	const queries = parseInt(document.querySelector('input[name="queries"]')?.value || '0', 10);
	const pages = parseInt(document.querySelector('input[name="pages"]')?.value || '0', 10);
	const linkBuilding = document.querySelector('input[name="linkBuilding"]')?.checked;
	const conversionOptimization = document.querySelector('input[name="conversionOptimization"]')?.checked;

	if (!region || !theme) return;

	let baseCost = region === 'moscow' || region === 'spb' ? 80000 : 70000;

	const themeCoefficients = {
		ecommerce: 1.5,
		medicine: 1.3,
		legal: 1.4,
		realestate: 1.6,
		logistics: 1.2,
		other: 1.0,
	};
	const themeCoefficient = themeCoefficients[theme];

	let queryCoefficient = 1.0;
	if (queries > 100 && queries <= 500) queryCoefficient = 1.1;
	else if (queries > 500 && queries <= 1000) queryCoefficient = 1.2;
	else if (queries > 1000 && queries <= 2000) queryCoefficient = 1.3;
	else if (queries > 2000) queryCoefficient = 1.4;

	let pageCoefficient = 1.0;
	if (pages > 100 && pages <= 500) pageCoefficient = 1.1;
	else if (pages > 500 && pages <= 1000) pageCoefficient = 1.2;
	else if (pages > 1000 && pages <= 1500) pageCoefficient = 1.3;
	else if (pages > 1500) pageCoefficient = 1.4;

	let calculatedCost = baseCost * themeCoefficient * queryCoefficient * pageCoefficient;

	if (linkBuilding) calculatedCost += 10000;
	if (conversionOptimization) calculatedCost += baseCost * 0.3;

	const minCost = baseCost;
	calculatedCost = Math.max(calculatedCost, minCost);

	document.getElementById('result').textContent = `${Math.round(calculatedCost).toLocaleString('ru-RU')} ₽`;
}

document.querySelectorAll('select[name="region"], select[name="theme"], input[name="queries"], input[name="pages"], input[type="checkbox"]').forEach((element) => {
	element.addEventListener('input', calculateCost);
	element.addEventListener('change', calculateCost);
});

calculateCost();

const ranges = document.querySelectorAll('.seo-form__range');

function updateRangeBackground(input) {
	const percent = ((input.value - input.min) / (input.max - input.min)) * 100;
	input.style.setProperty('--value-percent', `${percent}%`);
}

ranges.forEach((range) => {
	updateRangeBackground(range); // при загрузке
	range.addEventListener('input', () => updateRangeBackground(range));
});
if (document.querySelector('.report-data-lens')) {
	const section = document.querySelector('.report-data-lens');

	const img = section.querySelector('.report-data-lens__img img');
	const button = section.querySelector('.report-data-lens__button');
	const modal = section.querySelector('.report-data-lens__modal');
	const modalImg = section.querySelector('.report-data-lens__modal-img');
	const closeBtn = section.querySelector('.report-data-lens__modal-close');

	const openModal = () => {
		modal.style.display = 'flex';
		modalImg.src = img.src;
	};

	img.addEventListener('click', openModal);
	button.addEventListener('click', openModal);

	closeBtn.addEventListener('click', () => {
		modal.style.display = 'none';
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.style.display = 'none';
		}
	});
}

if (document.querySelector('.karaoke-date__item')) {
	const items = document.querySelectorAll('.karaoke-date__item');
	const wrapper = document.querySelector('.date-page-wrap');
	const button = document.querySelector('#show-date');

	button.addEventListener('click', () => {
		button.style.visibility = 'hidden';
		// Сначала вращаем
		wrapper.classList.add('show-date');

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
