const colorToGuess = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
let colorToGuessString = '';

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
}

function createClickEventOnBall() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', function (event) {
      if (event.target.style.backgroundColor === colorToGuessString) {
        answer.innerHTML = 'Acertou!'
      } else {
        answer.innerHTML = 'Errou! Tente novamente!'
      }
    });
  }
}

function initialize() {
  resetColors();
  answer.innerHTML = 'Escolha uma cor';
  createClickEventOnBall();
}



resetButton.addEventListener('click', resetColors);

initialize();
