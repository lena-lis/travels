import Swiper from '../../vendor/swiper.js';

function renderActiveSlide() {
  const heroList = document.querySelector('[data-hero-list]');
  const heroBackgrounds = document.querySelectorAll('[data-hero-background]');
  const heroSlides = document.querySelectorAll('.hero__item');
  const activeHeroSlide = document.querySelector('.hero__item.swiper-slide-active');

  if (!heroList && !heroBackgrounds && !activeHeroSlide) {
    return;
  }

  heroBackgrounds.forEach((el) => el.classList.remove('is-active'));

  const activeBackground = Array.from(heroBackgrounds).find((element) => element.dataset.indexNumber === activeHeroSlide.dataset.swiperSlideIndex);
  activeBackground.classList.add('is-active');

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

function controlVideo() {
  const indexCurrentSlide = initHeroSlider.activeIndex;
  const currentSlide = initHeroSlider.slides[indexCurrentSlide];
  const iframe = document.querySelector('iframe');

  if (!currentSlide.contains(iframe)) {
    if (iframe) {
      iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=0');
    }
  }
}

initHeroSlider.on('afterInit', renderActiveSlide()).
    on('slideChange', function () {
      const indexCurrentSlide = initHeroSlider.activeIndex;
      const currentSlide = initHeroSlider.slides[indexCurrentSlide];
      const inactiveSlides = initHeroSlider.slides;
      inactiveSlides.forEach((element) => {
        element.setAttribute('inert', true);
      });
      currentSlide.removeAttribute('inert');
    }).
    on('slideChange', controlVideo).
    on('slideChangeTransitionEnd', renderActiveSlide); // делаем коллбэк
