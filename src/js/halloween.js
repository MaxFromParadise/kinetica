const headerMuteButton = document.querySelector('.header__mute');
const firstVideo = document.querySelector('.halloween__video_1');
const secondVideo = document.querySelector('.halloween__video_2');
const main = document.querySelector('.main');
const mainFirst = document.querySelector('.main__first');
const mainSecond = document.querySelector('.main__second');
const transitionOverlay = document.querySelector('.transition-overlay');

const curses = [
	'Ваши клиенты теперь присылают правки голосовыми на 5 минут',
	'Теперь ты чистишь принтер, который все забывают заправлять',
	'Теперь ты разбираешь корпоративную почту 2 месяца',
	'Любой вопрос из серии “а кто это сделает?” теперь к тебе',
	'Теперь коэффициент конверсии вашего сайта равен 0 в этом месяце',
	'Все лиды превращаются в «оставил почту и исчез»',
	'Все твои лиды теперь невалидные',
	'Теперь ваш коллега каждый день подогревает рыбу в микроволновке. Рядом с вашим столом',
	'На тебе  запуск с бюджетом 15 тыс. и ожиданием как у глобальных брендов',
	'Все твои рекламные кампании больше не проходят модерацию',
];

const changeVideo = () => {
	// VIDEO
	transitionOverlay.classList.add('active');
	setTimeout(() => {
		firstVideo.classList.remove('active');
		secondVideo.classList.add('active');
		secondVideo.muted = false;
		headerMuteButton.classList.remove('is-muted');
		secondVideo.play();
		transitionOverlay.classList.remove('active');
	}, 1800);
	// VIDEO
};

const remainTimer = () => {
	const timer = document.querySelector('.second-main__timer');

	let remainSeconds = 10;

	timer.textContent = `0:${remainSeconds}`;
	const interval = setInterval(() => {
		remainSeconds = Math.max(0, remainSeconds - 1);
		timer.textContent = `0:${remainSeconds}`;
		if (remainSeconds === 0) {
			clearInterval(interval);
		}
	}, 1000);
};

const toggleMuted = () => {
	if (!firstVideo) return;

	firstVideo.muted = !firstVideo.muted;
	secondVideo.muted = !secondVideo.muted;

	headerMuteButton.classList.toggle('is-muted');
};

const getRandomCurse = (curses) => {
	const curseContainer = document.querySelector('.second-main__curse');

	const randomCurse = curses[Math.floor(Math.random() * curses.length)];

	curseContainer.textContent = randomCurse;
};

headerMuteButton.addEventListener('click', toggleMuted);

main.addEventListener(
	'click',
	() => {
		changeVideo();
		getRandomCurse(curses);
		setTimeout(() => {
			mainFirst.classList.remove('active');
			mainSecond.classList.add('active');
		}, 1000);
		setTimeout(remainTimer, 2000);
	},
	{ once: true }
);

const getLinkOnMainPage = () => {
	const buttons = document.querySelectorAll('.second-main__button');
	buttons.forEach((button) => {
		button.addEventListener('click', async () => {
			await navigator.clipboard.writeText('https://kinetica.su/');
			button.innerHTML = `✔ СКОПИРОВАНО`;
		});
	});
};
getLinkOnMainPage();
