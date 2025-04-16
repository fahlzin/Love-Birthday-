const audio = document.getElementById('meuAudio');
const botao = document.getElementById('botaoPlayPause');
const barra = document.getElementById('barraProgresso');
const tempoAtual = document.getElementById('tempoAtual');
const tempoTotal = document.getElementById('tempoTotal');

botao.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener('loadedmetadata', () => {
  tempoTotal.textContent = formatarTempo(audio.duration);
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
  tempoAtual.textContent = formatarTempo(audio.currentTime);
});

function mudarProgresso(e) {
  const largura = e.currentTarget.clientWidth;
  const cliqueX = e.offsetX;
  const tempo = (cliqueX / largura) * audio.duration;
  audio.currentTime = tempo;
}

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
}
