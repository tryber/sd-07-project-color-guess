const balls = document.querySelectorAll('.ball');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
let points = 0;

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

function score(ballBackgroundColor) {
  if (rgbColor.innerText === ballBackgroundColor) {
    answer.innerText = 'Acertou!';
    points += 3;
    const scores = document.getElementById('score');
    scores.innerText = `Placar ${points}`;
  } else answer.innerText = 'Errou! Tente novamente!';
}

document.querySelector('.div-container').addEventListener('click', function (event) {
  const ballBackgroundColor = event.target.style.backgroundColor;
  if (ballBackgroundColor === '') return alert('clique na bola');
  score(ballBackgroundColor);
  return true;
});

document.getElementById('reset-game').addEventListener('click', function () {
  backgroundColorCicle();
  answer.innerText = 'Escolha uma cor';
});

window.onload = backgroundColorCicle();
