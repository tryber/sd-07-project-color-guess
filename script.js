const rgbText = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const score = document.querySelector('#score');
var count = 0;

function rgbGenerator() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return `(${x}, ${y}, ${z})`;
}


function rgbInputText() {
  rgbText.innerHTML = rgbGenerator();
}


function rgbColorBalls() {
  const balls = document.querySelectorAll('.ball');
  balls.forEach((ball) => {
    ball.style.backgroundColor = `rgb${rgbGenerator()}`;
  });
  balls[Math.floor(Math.random() * 5)].style.backgroundColor = `rgb${rgbText.innerHTML}`;
}


// https://github.com/tryber/sd-04-block5-project-color-guess/pull/17/files
function checkColor() {
  const balls = document.querySelectorAll('.ball');
  score.innerHTML = '0';
  balls.forEach((ball) => {
    ball.addEventListener('click', () => {
      if (ball.style.backgroundColor === `rgb${rgbText.innerHTML}`) {
        answer.innerHTML = 'Acertou!';
        count += 3;
        score.innerHTML = (count);
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  });
}


document.querySelector('#reset-game').addEventListener('click', resetGame);
function resetGame() {
  rgbInputText();
  rgbColorBalls();
  answer.innerHTML = 'Escolha uma cor';
}


rgbInputText();
rgbColorBalls();
checkColor();
