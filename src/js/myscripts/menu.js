// document.addEventListener('mouseover', function(e) {
// 	console.log(e.target);
// });


let subMenuOpen  = function() {
	let elem = document.querySelector('.nav__link--down');
	if (!elem) {
		return;
	};

	let subMenuClose  = function() {
		let elem = document.querySelector('.nav__link--down.toggle');

		if (elem) {
			let elems = document.querySelectorAll('.nav__link--down.toggle');
			
			elems.forEach(function(element) {
				element.classList.remove('toggle');
			});
		};
	};

	let menu = document.querySelector('.nav__list');
	menu.addEventListener('mouseover', function(e) {
		if (e.target.classList.contains('nav__link--down')) {
			subMenuClose();
			e.target.classList.add('toggle');
			e.target.parentElement.classList.add('toggle');
		};

		menu.addEventListener('mouseout', function() {
			
		});
		
	});





};

subMenuOpen();