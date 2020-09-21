const balls = document.querySelectorAll('.ball');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');

function generationRandomColorRGB() {
  const maxNumberRGB = 256;
  const decimalNumber = () => Math.floor(Math.random() * maxNumberRGB);
  return `rgb(${decimalNumber()},${decimalNumber()},${decimalNumber()})`;
}

function generationRgbBackgroundColorCicle() {
  const randomElement = balls[Math.floor(Math.random() * balls.length)];
  rgbColor.innerText = randomElement.style.backgroundColor;
}

function backgroundColorCicle() {
  balls.forEach((ball) => {
    ball.style.backgroundColor = generationRandomColorRGB();
  });
  generationRgbBackgroundColorCicle();
}

document.querySelector('.div-container').addEventListener('click', function (event) {
  const ballBackgroundColor = event.target.style.backgroundColor;
  if (ballBackgroundColor === '') return alert('clique na bola');
  if (rgbColor.innerText === ballBackgroundColor) {
    answer.innerText = 'Acertou!';
  } else answer.innerText = 'Errou! Tente novamente!';
  return true;
});

document.getElementById('reset-game').addEventListener('click', function () {
  backgroundColorCicle();
  answer.innerText = 'Escolha uma cor';
});

window.onload = backgroundColorCicle();
