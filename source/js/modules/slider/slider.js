import Swiper from '../../vendor/swiper.js';

const heroSlider = new Swiper('[data-hero-slider]', {
  loop: true,
  speed: 300,
  breakpoints: {
    1200: {
      allowTouchMove: false,
    },
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
});

const toursSlider = new Swiper('[data-tours-slider]', {
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
  navigation: {
    prevEl: '.tours__button--prev',
    nextEl: '.tours__button--next',
  },
});

const instructorsSlider = new Swiper('[data-instructors-slider]', {
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
  navigation: {
    prevEl: '.instructors__button--prev',
    nextEl: '.instructors__button--next',
  },
});

const reviewsSlider = new Swiper('[data-reviews-slider]', {
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next',
  },
});

export {heroSlider, toursSlider, instructorsSlider, reviewsSlider};
