import Swiper from '../../vendor/swiper.js';

const initHeroSlider = new Swiper('[data-hero-slider]', {
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

const initToursSlider = new Swiper('[data-tours-slider]', {
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

const initInstructorsSlider = new Swiper('[data-instructors-slider]', {
  loop: false,
  slidesPerView: 1,
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
  slideActiveClass: 'instructors__card--active',
  slideNextClass: 'instructors__card--next',
});

const initReviewsSlider = new Swiper('[data-reviews-slider]', {
  cssMode: true,
  loop: false,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      allowTouchMove: false,
    },
  },
  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next',
  },
});

const initGallerySlider = new Swiper('[data-gallery-slider]', {
  cssMode: true,
  loop: false,
  slidesPerView: 1,
  spaceBetween: 3,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 6,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 6,
      allowTouchMove: false,
    },
  },
  navigation: {
    prevEl: '.gallery__button--prev',
    nextEl: '.gallery__button--next',
  },
});

export {initHeroSlider, initToursSlider, initInstructorsSlider, initReviewsSlider, initGallerySlider};
