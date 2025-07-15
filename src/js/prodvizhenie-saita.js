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
