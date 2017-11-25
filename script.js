window.onload = () => {

  function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) {
      error();
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function error() {
    const error = document.querySelector('.error');
    const retry = document.querySelector('.retry');
    error.style.display = "grid";
    retry.addEventListener('click', () => location.reload())
  }

  function removeC(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  window.addEventListener('keydown', play);
  const keys = document.querySelectorAll('.key');
  keys.forEach(k => k.addEventListener('transitionend', removeC));
}
