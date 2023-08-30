import Swiper from '../../vendor/swiper.js';

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia('(min-width: 1200px)');
// keep track of swiper instances to destroy later
let featuresSlider;

const enableSlider = () => {
  featuresSlider = new Swiper('[data-features-slider]', {
    loop: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    spaceBetween: 30,
    centeredSlides: true,
    freeMode: true,
    allowTouchMove: false,
    navigation: {
      prevEl: '.features__button--prev',
      nextEl: '.features__button--next',
    },
  });
};

const breakpointChecker = () => {
  if (!breakpoint.matches) {
    // clean up old instances and inline styles when available
    if (featuresSlider) {
      featuresSlider.destroy(true, true);
    }
    // or/and do nothing
    return;
  }
  enableSlider();
};

// keep an eye on viewport size changes
breakpoint.addEventListener('change', breakpointChecker);
// kickstart
breakpointChecker();
