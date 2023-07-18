// функция будет перемещать блок в указанное место при определенной ширине экрана

let moving = function () {

        const windowWidth = window.innerWidth; // ширина экрана
        // console.log(windowWidth);

        if (windowWidth <= 1200) {
            document.querySelector('.mobile-menu__wrapper').prepend(document.querySelector('.nav__list'));
        } else {
            document.querySelector('.header__nav').append(document.querySelector('.nav__list'));
        };
};

moving();
window.addEventListener('resize', moving);