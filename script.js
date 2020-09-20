const boardOfBalls = document.querySelector('.container-of-color');
let allBalls = document.querySelectorAll('.ball');
const difficulty = document.querySelector('#difficulty');
const rgbColorPosition = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const reset = document.querySelector('#reset-game');
let currentDifficulty = 'easy';
let position;
let score;

for (let index = 0; index < allBalls.length; index += 1) {
  allBalls[index].addEventListener('click', function () {
    let referenceColor = allBalls[index].style.backgroundColor;
    if (`rgb${rgbColorPosition.innerText}` == referenceColor) {
      answer.innerText = 'Acertou!'
      score += 3;
    } else {
      answer.innerText = 'Errou! Tente novamente!'
      score -= 1;
    }
  });
}

function sortEasyPosition() {
  position = Math.floor(Math.random() * 10);
  if (position > 5) {
    position = 5;
  }
}

function sortHardPosition() {
  position = Math.floor(Math.random() * 12)
  if (position > 11) {
    position = 11;
  }
}

function getPosition() {
  allBalls = document.querySelectorAll('.ball');
  if (currentDifficulty == 'easy') {
    sortEasyPosition();
  } else {
    sortHardPosition();
  }
  const withrgb = allBalls[position].style.backgroundColor;
  rgbColorPosition.innerText = withrgb.replace('rgb', '');
}

function getRandomColor() {
  return Math.floor(Math.random() * 255);
}

function getColor() {
  for (let index = 0; index < allBalls.length; index += 1) {
    const randomRGBColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    allBalls[index].style.backgroundColor = randomRGBColor;
  }
  getPosition();
}

function makeBoard(currentDifficulty) {
  if (currentDifficulty == 'easy') {
    boardOfBalls.style.gridTemplateRows = 'repeat(2, 2fr)';
  } else {
    boardOfBalls.style.gridTemplateRows = 'repeate(4, 4fr)'
  }
  allBalls = document.querySelectorAll('.ball');
  getColor();
}

reset.addEventListener('click', makeBoard);

difficulty.addEventListener('click', function () {

  boardOfBalls.innerHTML = '';

  if (currentDifficulty == 'easy') {

    difficulty.innerText = 'Facil'
    currentDifficulty = 'hard';

    for (let index = 1; index <= 12; index += 1) {
      const newBall = document.createElement('div');
      newBall.className = 'ball';
      boardOfBalls.appendChild(newBall);
    }
  } else {

    difficulty.innerText = 'Difícil'
    currentDifficulty = 'easy';

    for (let index = 1; index <= 6; index += 1) {
      const newBall = document.createElement('div');
      newBall.className = 'ball';
      boardOfBalls.appendChild(newBall);
    }
  }
  makeBoard(currentDifficulty);
});

function getTheColor(index) {
  allBalls[index].addEventListener('click', function () {
    currentColor = allBalls[index].style.backgroundColor;
  });
}

function loopForBalls() {
  for (index = 0; index < allBalls.length; index += 1) {
    getTheColor(index);
  }
}

loopForBalls();

window.onload = function () {
  getColor();
  getPosition();
};
