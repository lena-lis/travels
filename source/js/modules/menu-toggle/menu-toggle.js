import '../../utils/scroll-lock';

const navMenuOverlay = document.querySelector('[data-menu-overlay]');
const navMain = document.querySelector('[data-nav-main]');
const navMenu = document.querySelector('[data-nav-menu]');
const navLinks = navMenu.querySelectorAll('a');
const navToggle = document.querySelector('[data-nav-toggle]');

function closeMenu() {
  navMain.classList.remove('main-navigation--opened');
  navMain.classList.add('main-navigation--closed');
  navMenuOverlay.style.display = 'none';
  window.scrollLock.enableScrolling();
  navLinks.forEach((navLink) => {
    navLink.removeEventListener('click', closeMenu);
  });
  navMenuOverlay.removeEventListener('click', closeMenu);
  navToggle.removeEventListener('click', closeMenu);
}

const openMenu = () => {
  if (!navToggle) {
    return;
  }
  navMain.classList.remove('main-navigation--closed');
  navMain.classList.add('main-navigation--opened');
  navMenuOverlay.style.display = 'block';
  window.scrollLock.disableScrolling();
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', closeMenu);
  });
  navMenuOverlay.addEventListener('click', closeMenu);
  navToggle.addEventListener('click', closeMenu);
};


const onNavToggleClick = () => {
  if (!navMenuOverlay && !navMain && !navMenu && !navToggle) {
    return;
  }
  navMain.classList.remove('main-navigation--nojs');
  navMain.classList.add('main-navigation--closed');
  navToggle.addEventListener('click', openMenu);
};

export {onNavToggleClick};
