// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {
	if (document.querySelector(".b08-slider-js")) {
		const b08SliderJs = new Swiper(".b08-slider-js", {
			slidesPerView: "auto",
			spaceBetween: 20,
			// loop: true,
			navigation: {
				nextEl: ".b08-slider__next",
				prevEl: ".b08-slider__prev",
			},
		});
	}

	if (document.querySelector(".quiz-slider")) {
		const b04SliderJs = new Swiper(".quiz-slider", {
			slidesPerView: 1,
			spaceBetween: 5,
			allowTouchMove: false,
			loop: false,
			pagination: {
				el: ".quiz-counter",
				type: "fraction",
			},
			navigation: {
				nextEl: ".quiz-btn__next",
				prevEl: ".quiz-btn__prev",
			},
		});

		// Когда достигаем конца слайдера
		b04SliderJs.on("slideChange", function () {
			if (b04SliderJs.isEnd) {
				document.querySelector('.quiz-btn__next').style.display = 'none';
				document.querySelector('.quiz-btn__send').style.display = 'block';
			} else {
				document.querySelector('.quiz-btn__next').style.display = 'block';
				document.querySelector('.quiz-btn__send').style.display = 'none';
			};
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
