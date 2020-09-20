function geraCores() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

const ball = document.querySelectorAll('.ball');
const rgbColor = document.querySelector('#rgb-color');
const placar = document.querySelector('#score');
let acerto = 0;

function placarAcertos(event) {
  if (rgbColor.innerText === event.target.style.backgroundColor) {
    document.querySelector('#answer').innerText = 'Acertou! Novas cores!';
    acerto += 3;
    placar.innerText = `Placar: ${acerto}`;
  } else {
    document.querySelector('#answer').innerText = 'Errou! Tente novamente';
    if (acerto > 0) {
      acerto -= 1;
      placar.innerText = `Placar: ${acerto}`;
    }
  }
}

for (let index = 0; index < ball.length; index += 1) {
  ball[index].style.backgroundColor = geraCores();
  const igualcores = ball[Math.round(Math.random() * (ball.length - 1))].style.backgroundColor;
  rgbColor.innerText = igualcores;
  ball[index].addEventListener('click', placarAcertos);
}

const botaoJogar = document.querySelector('#reset-game');
botaoJogar.addEventListener('click', () => {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = geraCores();
  }
  const igualcores = ball[Math.round(Math.random() * (ball.length - 1))].style.backgroundColor;
  rgbColor.innerText = igualcores;
  document.querySelector('#answer').innerText = 'Escolha uma cor';
});
