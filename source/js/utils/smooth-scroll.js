const smoothLinks = document.querySelectorAll('a[href^="#"]');

function scrollSmooth(links) {
  for (let link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}

scrollSmooth(smoothLinks);

export {scrollSmooth};
