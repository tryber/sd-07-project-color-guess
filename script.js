const balls = document.getElementsByClassName('ball');
const resetButton = document.querySelector('#reset-game');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
let scoreCounter = 0;
score.innerText = `Placar: ${scoreCounter}`;

function generateColor() {
  answer.innerText = 'Escolha uma cor';
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = `rgb( ${Math.ceil(Math.random() * 255)} , ${Math.ceil(Math.random() * 255)} , ${Math.ceil(Math.random() * 255)})`;
    balls[index].classList.remove('guessed');
  }
  const randomIndex = Math.ceil(Math.random() * 6) - 1;
  const selectedBall = balls[randomIndex];
  const rbgSize = 3;
  // removing RGB from color name
  rgbColor.innerText = selectedBall.style.backgroundColor.slice(rbgSize);
  selectedBall.classList.add('guessed');
}

function result(event) {
  if (answer.innerText !== 'Escolha uma cor') {
    alert('What are you trying to do? Click the reset button.');
  } else if (event.target.classList.contains('guessed')) {
    answer.innerText = 'Acertou!';
    scoreCounter += 3;
    score.innerText = `Placar: ${scoreCounter}`;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

generateColor();

resetButton.addEventListener('click', generateColor);

for (let item = 0; item < balls.length; item += 1) {
  balls[item].addEventListener('click', result);
}
