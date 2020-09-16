const colorToGuess = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

function getRandom() {
  return Math.random() * 255;
}

function resetColors() {
  colorToGuess.style.backgroundColor = `rgb(${getRandom()} , ${getRandom()} , ${getRandom()})`;
  const colorToGuessIndex = Math.floor(Math.random() * 6);
  balls[colorToGuessIndex].style.backgroundColor = colorToGuess.style.backgroundColor;
  for (let index = 0; index < 6; index += 1) {
    if (index !== colorToGuessIndex) {
      balls[index].style.backgroundColor = `rgb(${getRandom()} , ${getRandom()} , ${getRandom()})`;
    }
  }
}

