const reset = document.querySelector('#reset-game');
let balls = document.querySelectorAll('.ball');
let answer = document.querySelector('#answer');
let score = document.querySelector('#score');
let main = document.getElementById('main-container');
let rgbColor = document.querySelector('#rgb-color');
let finalPoints = 0;

function randomRGB() {
  const rgbNumbers = [];
  for (let index = 0; index < 3; index += 1) {
    const randomColor = Math.floor(Math.random() * 255);
    rgbNumbers.push(randomColor);
  }
  return rgbNumbers.toString();
}

function randomBallColors() {
  balls.forEach((item) => {
    const newColor = `rgb(${randomRGB()})`;
    item.style.backgroundColor = newColor;
  });
}

function randomColors() {
  const selectNumb = Math.floor(Math.random() * balls.length);
  const getRGB = balls[selectNumb].style.backgroundColor;
  return getRGB;
}

function selectRandom() {
  let getRGB = randomColors();

  balls.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.style.backgroundColor === getRGB) {
        finalPoints += 3;
        answer.innerText = 'Acertou!';
      } else {
        if (finalPoints > 0) {
          finalPoints -= 1;
        }
        answer.innerText = 'Errou! Tente novamente!';
      }

      randomBallColors();
      getRGB = randomColors();

      rgbColor.innerText = getRGB.replace('rgb', '');
      score.innerText = finalPoints;
    });
  });
  rgbColor.innerText = getRGB.replace('rgb', '');
}

randomBallColors();
selectRandom();

reset.addEventListener('click', () => {
  const fullReset = main.cloneNode(true);
  main.parentNode.replaceChild(fullReset, main);

  balls = document.querySelectorAll('.ball');
  answer = document.querySelector('#answer');
  score = document.querySelector('.score');
  rgbColor = document.querySelector('#rgb-color');
  main = document.getElementById('main-container');

  answer.innerText = 'Escolha uma cor';
  randomBallColors();
  selectRandom();
});
