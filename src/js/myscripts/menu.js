// document.addEventListener('mouseover', function(e) {
// 	console.log(e.target);
// });


let subMenuOpen  = function() {
	let menu = document.querySelector('.nav__list');
	let elem = document.querySelector('.nav__link--down');

	if (!elem) {
		return;
	};

	// Закрываем все открытые подменю
	let subMenuClose  = function() {
		let elem = document.querySelector('.nav__link--down.toggle');

		if (elem) {
			let elems = document.querySelectorAll('.nav__link--down.toggle');
			
			elems.forEach(function(element) {
				element.classList.remove('toggle');
			});
		};
	};

	// По наведению сначала закрываем все подменю, потом открываем наведенное подменю 
	menu.addEventListener('mouseover', function(e) {
		if (e.target.classList.contains('nav__link--down')) {
			subMenuClose();
			e.target.classList.add('toggle');
			e.target.parentElement.classList.add('toggle');
		};		
	});
	
	
	// Закрыть подменю через пару секунд после ухода ховера с него 
	// menu.addEventListener('mouseout', subMenuClose);	
	menu.addEventListener('mouseout', function(e) {
		
		let childEl = e.target;
		console.log(childEl);
		
		// if (menu.contains.e.target) {
		// 	console.log(0);
		// }
		// setTimeout(subMenuClose, 10000);
	});

};

subMenuOpen();