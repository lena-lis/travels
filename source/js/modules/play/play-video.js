const initVideo = () => {
  const videoContainer = document.querySelector('[data-video-container]');
  const playButton = videoContainer.querySelector('[data-video-button]');
  const poster = videoContainer.querySelector('[data-video-poster]');

  if (videoContainer && playButton && poster) {
    playButton.addEventListener('click', function (evt) {
      if (videoContainer.classList.contains('playing')) {
        return;
      }
      evt.preventDefault();
      poster.remove();
      playButton.remove();
      videoContainer.classList.add('playing');
      videoContainer.insertAdjacentHTML('afterbegin', '<iframe width="364" height="228" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="Бесплатные интерактивные онлайн-курсы" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    });
  }
};

export {initVideo};
