const initAudio = () => {
  const audioContainer = document.querySelector('[data-audio-container]');
  const playButton = videoContainer.querySelector('[data-audio-button]');
  const poster = videoContainer.querySelector('[data-audio-poster]');

  if (audioContainer && playButton && poster) {
    playButton.addEventListener('click', function (evt) {
      if (audioContainer.classList.contains('playing')) {
        return;
      }
      evt.preventDefault();
      poster.remove();
      playButton.remove();
      audioContainer.classList.add('playing');
      audioContainer.insertAdjacentHTML('afterbegin', '<iframe frameborder="0" style="border:none;width:340px;height:220px;" width="340" height="220" src="https://music.yandex.ru/iframe/#track/112912322/25474374">Слушайте <a href=`https://music.yandex.ru/album/25474374/track/112912322`>001. Конец фронтенда, одинаковые фреймворки и логические свойства</a> на Яндекс Музыке</iframe>');
    });
  }
};

export {initAudio};
