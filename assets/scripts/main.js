
let swiper = new Swiper(".sliderSwiper", {
  spaceBetween: 50,
  slidesPerView: 2,
  centeredSlides: true,
  initialSlide: 1,
  breakpoints: {
    640: {
      slidesPerView: 1.7,
      spaceBetween: 60,
    },
    993: {
      slidesPerView: 3.2,
      spaceBetween: 100,
    },
    1400: {
      slidesPerView: 2.4,
      spaceBetween: 392,
    },
  },
});
