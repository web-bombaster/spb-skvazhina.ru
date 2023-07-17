// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.b08-slider-js')) {
		const b08SliderJs = new Swiper('.b08-slider-js', {
			slidesPerView: "auto",
			spaceBetween: 20,
			// loop: true,
			navigation: {
				nextEl: ".b08-slider__next",
				prevEl: ".b08-slider__prev",
			},
		});
	};
};

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();


