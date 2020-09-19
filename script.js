const colorToGuess = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
let colorToGuessString = '';
const score = document.getElementById('score');
score.innerHTML = 0;

function getRandom() {
  return Math.floor(Math.random() * 255);
}

function resetColors() {
  colorToGuessString = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
  colorToGuess.innerHTML = colorToGuessString.substr(3);
  const colorToGuessIndex = Math.floor(Math.random() * 6);
  balls[colorToGuessIndex].style.backgroundColor = colorToGuessString;
  for (let index = 0; index < 6; index += 1) {
    if (index !== colorToGuessIndex) {
      balls[index].style.backgroundColor = `rgb(${getRandom()} , ${getRandom()} , ${getRandom()})`;
    }
  }
  answer.innerHTML = 'Escolha uma cor';
}

function createEvent(event) {
  if (event.target.style.backgroundColor === colorToGuessString) {
    answer.innerHTML = 'Acertou!';
    let previousScore = parseInt(score.innerHTML, 10);
    score.innerHTML = previousScore + 3;
    previousScore = 0;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    score.innerHTML = 0;
  }
}

function createClickEventOnBall() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', createEvent);
  }
}

function initialize() {
  resetColors();
  createClickEventOnBall();
}

resetButton.addEventListener('click', resetColors);

initialize();
