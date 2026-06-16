// newteam tabs
const newteamTabs = document.querySelectorAll('.newteam__tab');
const newteamPanels = document.querySelectorAll('.newteam__panel');

newteamTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = tab.dataset.tab;
		newteamTabs.forEach((t) => t.classList.remove('newteam__tab--active'));
		newteamPanels.forEach((p) => p.classList.remove('newteam__panel--active'));
		tab.classList.add('newteam__tab--active');
		document.querySelector(`.newteam__panel[data-panel="${target}"]`).classList.add('newteam__panel--active');
	});
});

// implemented slider
if (document.querySelector('.implemented__slider .swiper')) {
	new Swiper('.implemented__slider .swiper', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 50,
		speed: 2000,
		pagination: {
			el: '.implemented__bullets',
			clickable: true,
			renderBullet(_index, className) {
				return `<span class="${className}"><img src="img/pages/crm-ai/implemented/bullet.svg" alt="" /></span>`;
			},
		},
	});
}

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
				spaceBetween: 175,
			},
		},
	});
}
