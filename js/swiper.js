// swiper testimonial

const testimonialSwiper = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




