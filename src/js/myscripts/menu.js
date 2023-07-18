let toggleMobileSubmenu = function () {
	// Если есть хоть один элемент
	if (document.querySelector('.nav__link--down')) {
		// if (document.documentElement.clientWidth <= 1200) {

		// Если мобильный режим
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			//Выбираем все нужные ссылки
			let navLinksDown = document.querySelectorAll('.nav__link--down');
			navLinksDown.forEach(function(element) {
				// Отслеживаем по ним клик, отменяем стандартное действие
				element.addEventListener('click', function(e) {
					e.preventDefault();
					// navLinksDown.forEach(function(element) {
					// 	element.classList.remove('toggle');
					// 	e.target.classList.toggle('toggle');
					// });

					let parentEl = e.target.parentElement;

					// Задаем нужные классы
					e.target.classList.toggle('toggle');
					parentEl.classList.toggle('toggle');

					if (!e.target.classList.contains('toggle')) {
						e.target.nextElementSibling.classList.add('toggle');
					} else {
						e.target.nextElementSibling.classList.remove('toggle');
					};
				});
			});
		};
	};
};

toggleMobileSubmenu();