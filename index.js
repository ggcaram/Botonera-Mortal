import "./styles.css";

window.addEventListener('keydown', playSound);

function playSound(e) {
  //Permite que el sistema funcione con block mayus activado
  const key = e.key.toLowerCase() ;
  //Toma la info de la tecla presionada y el audio asignado a la misma
  const mySound = document.querySelector(`audio[data-key="${key}"]`);
  //Relaciona el boton con la tecla presionada
  const pad = document.querySelector(`.pad[data-key="${key}"]`);
  
  if (!mySound) return;
  
  mySound.currentTime = 0;
  mySound.play();
  pad.classList.add('playing');
  
  // Para el sonido despes de 100 milisegundos
  setTimeout(() => {
    pad.classList.remove('playing');
  }, 100)
}
