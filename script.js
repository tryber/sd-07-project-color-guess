const balls = document.querySelectorAll('.ball');
const scoreWindow = document.querySelector('#score');
const colorTarget = document.querySelector('#rgb-color');
const asnwerText = document.querySelector('#answer');
const resetGameButton = document.querySelector('#reset-game');
let color = [];
let scoreCount = 0;
scoreWindow.innerText = 0;

function applyCollorTarget() {
  const colorLotery = Math.ceil(Math.random() * 6);
  console.log(colorLotery);
  colorTarget.innerText = color[colorLotery - 1];
  console.log(color[colorLotery-1]);
}

function changeColorBalls() {
  for (let index = 0 ; index < balls.length; index += 1) {
    const red = Math.round(Math.random() * 255);
    const yellow = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);

    color.push(`(${red}, ${yellow}, ${green})`);

    balls[index].style.backgroundColor = `rgb(${red}, ${yellow}, ${green})`;
  }

  applyCollorTarget();
}

function verifyTargetColor(event) {
  const cssObj = window.getComputedStyle(event.target, null);
  const colorClicked = cssObj.getPropertyValue('background-color');
  const targetColor = `rgb${colorTarget.innerText}`

  if (colorClicked === targetColor) {
    asnwerText.innerText = 'Acertou!';
    scoreCount += 3;
    scoreWindow.innerText = scoreCount;
  } else {
    asnwerText.innerText = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < balls.length; index += 1) {
  balls[index].addEventListener('click', verifyTargetColor);
}

resetGameButton.addEventListener('click', function () {
  color = [];
  asnwerText.innerText = 'Escolha uma cor';
  changeColorBalls();
});

changeColorBalls();
