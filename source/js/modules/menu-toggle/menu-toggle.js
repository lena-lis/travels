import '../../utils/scroll-lock';

const menuToggle = () => {
  const navMenuOverlay = document.querySelector('[data-menu-overlay]');
  const navMain = document.querySelector('[data-nav-main]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const navToggle = document.querySelector('[data-nav-toggle]');

  if (navMenuOverlay && navMain && navMenu && navToggle) {
    navMain.classList.remove('main-navigation--nojs');
    navMain.classList.add('main-navigation--closed');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-navigation--closed')) {
        navMain.classList.remove('main-navigation--closed');
        navMain.classList.add('main-navigation--opened');
        navMenuOverlay.style.display = 'block';
        window.scrollLock.disableScrolling();
      } else {
        navMain.classList.add('main-navigation--closed');
        navMain.classList.remove('main-navigation--opened');
        navMenuOverlay.style.display = 'none';
        window.scrollLock.enableScrolling();
      }
    });
  }
};

export {menuToggle};
