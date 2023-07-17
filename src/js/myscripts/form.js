// Инициализация Inputmask
// https://github.com/RobinHerbots/Inputmask

function initInputMask() {
	let formPhone = document.querySelectorAll('.form__phone');
	formPhone.forEach(element => {
		Inputmask({ "mask": "+7 (999) 999-99-99" }).mask(element);
	});
}

initInputMask();