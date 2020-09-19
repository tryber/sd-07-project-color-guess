function numberRGB() {
  const number = Math.floor(Math.random() * 255);
  return number;
}
let rgbColor;
let exibePlacar = document.querySelector('#score');
let score = 0;
exibePlacar.innerText = score;
const answer = document.querySelector('#answer');
answer.textContent = 'Escolha uma cor';

function resposta(ballClick) {
  let propBackgroundColor = window.getComputedStyle(ballClick.target).getPropertyValue('background-color');
  if (propBackgroundColor === `rgb${rgbColor.textContent}`) {
    answer.textContent = 'Acertou!';
    score += 3;
    exibePlacar.innerText = score;
  } else {
      answer.textContent = 'Errou! Tente novamente!';
  }
}

const balls = document.querySelectorAll('.ball');
for (let index = 0; index < balls.length; index += 1){
  balls[index].addEventListener('click', resposta);
}

function iniciaJogo() {
  rgbColor = document.querySelector('#rgb-color');
  rgbColor.textContent = `(${numberRGB()}, ${numberRGB()}, ${numberRGB()})`;
  balls[0].style.backgroundColor = `rgb${rgbColor.textContent}`;
  for (let index = 1; index < balls.length; index += 1){
    const colorBall = balls[index];
    colorBall.style.backgroundColor = `rgb(${numberRGB()} ,${numberRGB()} ,${numberRGB()})`;
  }
  answer.textContent = 'Escolha uma cor';
}

const buttonReset = document.querySelector('#reset-game');
buttonReset.addEventListener('click', iniciaJogo);

window.onload = iniciaJogo();
