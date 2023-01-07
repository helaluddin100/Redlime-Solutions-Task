var swiper = new Swiper(".studio", {
  effect: "coverflow",
  grabCursor: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  loop: false,
  initialSlide: 1,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  navigation: {
    prevEl: ".button-prev-studio",
    nextEl: ".button-next-studio",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
