const audio = document.getElementById('meuAudio');
const botao = document.getElementById('botaoPlayPause');
const barra = document.getElementById('barraProgresso');

botao.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener('play', () => {
  botao.textContent = '❚❚';
});

audio.addEventListener('pause', () => {
  botao.textContent = '▶';
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  barra.style.width = percent + '%';
});

function mudarProgresso(e) {
  const largura = e.currentTarget.clientWidth;
  const cliqueX = e.offsetX;
  const tempo = (cliqueX / largura) * audio.duration;
  audio.currentTime = tempo;
}
