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
		// console.log(headerScroll)
		if (this.scrollY > headerScroll) {
			header.classList.add('fixed')
			// header.style.marginBottom = `${headerScroll}px`
		}
		else {
			header.classList.remove('fixed')

		}
	});
}
windowSize();

const tabBtn = document.querySelectorAll('.tabs_btn');
const tabItem = document.querySelectorAll('.tabs_item');
function tabs() {
	tabBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			let tabId = btn.getAttribute('data-tabs');
			let item = document.querySelector(tabId);
			tabBtn.forEach(btn => {
				btn.classList.remove('active');
			})
			tabItem.forEach(it => {
				it.classList.remove('active')
			})
			item.classList.add('active');
			btn.classList.add('active');
		});
	});
}
tabs();
function accardeon() {
	const header = document.querySelectorAll('.accardeon_header');
	header.forEach(h => {
		h.addEventListener('click', function (e) {

			const content = this.nextElementSibling; // nextElementSibling находит следующий элемент, this - accardeon_header
			content.classList.toggle('active');
			const item = e.target.closest('.accardeon_item');
			const arrow = item.querySelector('.arrow-accardeon');// поиск дочернего элемента
			if (content.classList.contains('active')) {
				arrow.classList.add('active')
			}
			else {
				arrow.classList.remove('active')
			}
		});
	})
	document.querySelector('.accardeon_header').click();
}
accardeon();
