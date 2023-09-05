const audioContainer = document.querySelector('[data-audio-container]');
const audioButton = audioContainer.querySelector('[data-audio-button]');
const audioPoster = audioContainer.querySelector('[data-audio-poster]');

function onButtonPlayAudio() {
  if (!audioContainer && !audioButton && !audioPoster) {
    return;
  }
  audioPoster.remove();
  audioButton.remove();
  audioContainer.dataset.isPlaying = 'is-playing';
  const audioPlayer = document.createElement('iframe');
  audioPlayer.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
  audioPlayer.setAttribute('width', '340');
  audioPlayer.setAttribute('heigth', '220');
  audioPlayer.setAttribute('allow', 'autoplay');
  audioPlayer.innerHTML = 'Слушайте 001. Конец фронтенда, одинаковые фреймворки и логические свойства на Яндекс Музыке';
  audioContainer.append(audioPlayer);
  audioButton.removeEventListener('click', onButtonPlayAudio);
}

const initAudioPlayer = () => {
  if (!audioContainer) {
    return;
  }
  audioButton.addEventListener('click', onButtonPlayAudio);
};

export {initAudioPlayer};
