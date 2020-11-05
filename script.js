const balls = document.querySelectorAll('.ball');
const clearButton = document.getElementById('reset-game');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const scoreElement = document.getElementById('score');
let score = 0;

function randomColor() {
  const firstNumber = Math.ceil(Math.random() * 255);
  const secondNumber = Math.ceil(Math.random() * 255);
  const thirdNumber = Math.ceil(Math.random() * 255);
  const string = `rgb(${firstNumber},${secondNumber},${thirdNumber})`;
  return string;
}

const drawNumber = () => {
  const randomOneToSix = Math.ceil(Math.random() * 5);
  return randomOneToSix;
};

const sortedColor = () => {
  const number = drawNumber();
  const color = document.querySelectorAll('.ball')[number].style.backgroundColor.split('rgb')[1];
  rgbColor.innerText = color;
};

const setColor = () => {
  balls.forEach((ball) => {
    ball.style.backgroundColor = randomColor();
  });
  sortedColor();
  answer.innerText = 'Escolha uma cor';
};

const getAnswerAndGenerateNewColors = (event) => {
  if (event.target.style.backgroundColor === `rgb${document.getElementById('rgb-color').innerText}`) {
    setColor();
    answer.innerText = 'Acertou!';
    scoreElement.innerText = `Placar: ${score += 3}`;
  } else {
    setColor();
    answer.innerText = 'Errou! Tente novamente!';
  }
};

const getColor = () => {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', getAnswerAndGenerateNewColors);
  }
};

clearButton.addEventListener('click', setColor);

getColor();
setColor();
