const btnLanguage = document.querySelectorAll('.header_language');
function languageBtn() {
	btnLanguage.forEach(btn => {
		btn.addEventListener('click', () => {
			btnLanguage.forEach(btn => {
				btn.classList.remove('active')
			})
			btn.classList.add('active')

		})
	})
}
languageBtn();

const headerBtn = document.querySelectorAll('.header_btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');
const body = document.body;


function headerPopup(btn, popup, close) {
	headerBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			popup.classList.add('open')
			body.style.overflow = 'hidden'
		});
		close.addEventListener('click', () => {
			popup.classList.remove('open')
			body.style.overflow = ''

		});
		popup.addEventListener('click', (e) => {
			if (e.target === popup) {
				popup.classList.remove('open')
				body.style.overflow = ''


			}
		});
	})

}
headerPopup(headerBtn, popup, popupClose);

const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.header_menu');


function menuBurger() {
	burger.addEventListener('click', function () {
		if (!burger.classList.contains('active')) {
			this.classList.add('active')
			body.style.overflow = 'hidden'
		}
		else {
			this.classList.remove('active')
			body.style.overflow = ''

		}
		if (burger.classList.contains('active')) {
			menu.classList.add('active')
		}
		else {
			menu.classList.remove('active')
		}

		window.addEventListener('resize', function () {
			let width = Math.max(document.documentElement.clientWidth, this.innerWidth || 0);

			if (width >= 950) {
				menu.classList.remove('active')
				burger.classList.remove('active')
				body.style.overflow = ''

			}
		})
	})
}
menuBurger();

const header = document.querySelector('.header')
function sizeHeader() {
	let windowWidth = window.innerWidth

	if (windowWidth < 950 || burger.classList.contains('active')) {
		header.classList.add('screen')
	}
	else {
		header.classList.remove('screen')
	}
}
sizeHeader();
function windowSize() {
	window.addEventListener('scroll', function () {
		let headerScroll = header.clientHeight;

		if (this.scrollY > headerScroll) {
			header.classList.add('fixed')

		}
		else {
			header.classList.remove('fixed')

		}
	});
}
windowSize();