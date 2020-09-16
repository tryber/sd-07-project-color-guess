let score = 0;
let waitReset = false;
function rightColor() {
  const answer = document.querySelector('#answer');
  const scoreText = document.querySelector('#score');
  const hitPoints = 3;

  if (waitReset === false) {
    answer.innerText = 'Acertou!';
    score += hitPoints;
    scoreText.innerHTML = `${score}`;
    waitReset = true;
  }
}
function wrongColor() {
  const answer = document.querySelector('#answer');

  if (waitReset === false) {
    answer.innerText = 'Errou! Tente novamente!';
    waitReset = true;
  }
}
function createRGB() {
  const rgb = [];
  for (let index = 0; index < 3; index += 1) {
    rgb[index] = parseInt(255 * Math.random(), 10);
  }
  return rgb;
}
function createRgbText(rgb) {
  const rgbText = document.querySelector('#rgb-color');
  rgbText.innerHTML = `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}
function createBalls(colors) {
  const balls = document.querySelector('#balls');
  const choosenColor = Math.floor(6 * Math.random());

  balls.innerHTML = '';
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    const rgb = colors[index];
    ball.className = 'ball';
    if (index === choosenColor) {
      ball.addEventListener('click', rightColor);
      createRgbText(rgb);
    } else {
      ball.addEventListener('click', wrongColor);
    }
    ball.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    balls.appendChild(ball);
  }
}
function createColors() {
  const colors = [];

  for (let index = 0; index < 6; index += 1) {
    colors[index] = createRGB();
  }
  return colors;
}
function resetGame() {
  const answer = document.querySelector('#answer');
  answer.innerHTML = 'Escolha uma cor';
  createBalls(createColors());
  waitReset = false;
}
window.onload = function () {
  const resetGameButton = document.querySelector('#reset-game');

  resetGame();
  resetGameButton.addEventListener('click', resetGame);
};
