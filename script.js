const balls = document.querySelectorAll('.ball');
const rgbColor = document.getElementById('rgb-color');

function generationRandomColorRGB() {
  const maxNumberRGB = 256;
  const decimalNumber = () => Math.floor(Math.random() * maxNumberRGB);
  return `rgb(${decimalNumber()},${decimalNumber()},${decimalNumber()})`;
}

function generationRgbBackgroundColorCicle() {
  const randomElement = balls[Math.floor(Math.random() * balls.length)];
  rgbColor.innerText = randomElement.style.backgroundColor;
}

window.onload = function () {
  balls.forEach((ball) => {
    ball.style.backgroundColor = generationRandomColorRGB();
  });
  generationRgbBackgroundColorCicle()
}
document.querySelector('.div-container').addEventListener('click', function (event) {
  const ballBackgroundColor = event.target.style.backgroundColor;
  const answer = document.getElementById('answer')
  if (ballBackgroundColor === '') alert('clique na bola')
  if (rgbColor.innerText === ballBackgroundColor) {
    answer.innerText = 'Acertou!';
  } else answer.innerText = 'Errou! Tente novamente!';
});

