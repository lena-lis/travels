import Swiper from '../../vendor/swiper.js';

function catchActiveSlideFocus() {
  const heroSlides = document.querySelectorAll('.hero__item');
  const activeHeroSlide = document.querySelector('.hero__item.swiper-slide-active');

  if (!activeHeroSlide) {
    return;
  }

  const focusableSlides = Array.from(heroSlides).filter((heroSlide) => !heroSlide.classList.contains('swiper-slide-active'));
  focusableSlides.forEach((element) => element.setAttribute('inert', true));
  activeHeroSlide.removeAttribute('inert');
}

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

initHeroSlider.on('init', catchActiveSlideFocus());
