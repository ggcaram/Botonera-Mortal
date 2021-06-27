import "./styles.css";

window.addEventListener('keydown', playSound);

function playSound(e) {
  const key = e.key.toLowerCase() ;
  const mySound = document.querySelector(`audio[data-key="${key}"]`);
  const pad = document.querySelector(`.pad[data-key="${key}"]`);
  
  if (!mySound) return;
  
  mySound.currentTime = 0;
  mySound.play();
  pad.classList.add('playing');
  
  setTimeout(() => {
    pad.classList.remove('playing');
  }, 100)
}