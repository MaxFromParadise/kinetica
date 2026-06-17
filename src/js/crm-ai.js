// newteam arrow bounce
document.querySelectorAll('.newteam__arrow').forEach((arrow) => {
	arrow.addEventListener('mouseenter', () => {
		arrow.classList.remove('is-leaving');
		arrow.classList.add('is-hovered');
	});
	arrow.addEventListener('mouseleave', () => {
		arrow.classList.remove('is-hovered');
		arrow.classList.add('is-leaving');
	});
});

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
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.implemented__bullets',
			clickable: true,
			renderBullet(_index, className) {
				return `<span class="${className}"><img src="img/pages/crm-ai/implemented/bullet.svg" alt="" /></span>`;
			},
		},
	});
}

// approach tabs
const approachItems = document.querySelectorAll('.approach__item');
const approachPanels = document.querySelectorAll('.approach__banner');

if (approachItems.length && approachPanels.length) {
	let approachIndex = 0;

	function activateApproach(index) {
		approachItems.forEach((i) => i.classList.remove('item-approach--active'));
		approachPanels.forEach((p) => p.classList.remove('banner-approach--active'));
		approachItems[index].classList.add('item-approach--active');
		const target = approachItems[index].dataset.approach;
		document.querySelector(`.approach__banner[data-approach-panel="${target}"]`).classList.add('banner-approach--active');
	}

	let approachTimer = setInterval(() => {
		approachIndex = (approachIndex + 1) % approachItems.length;
		activateApproach(approachIndex);
	}, 5000);

	approachItems.forEach((item, i) => {
		item.addEventListener('click', () => {
			approachIndex = i;
			activateApproach(i);
			clearInterval(approachTimer);
			approachTimer = setInterval(() => {
				approachIndex = (approachIndex + 1) % approachItems.length;
				activateApproach(approachIndex);
			}, 5000);
		});
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
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

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
