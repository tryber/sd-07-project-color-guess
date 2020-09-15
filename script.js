function rgbGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function choseColorAnswer(ballsArray) {
  const sortedNum = Math.floor(Math.random() * 6);
  const rgbColorElement = document.querySelector('#rgb-color');
  const simpleString = ballsArray[sortedNum].style.backgroundColor.slice(3);
  rgbColorElement.innerText = simpleString;
}

function colorGenerator() {
  const balls = document.querySelector('.balls-container').children;
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = rgbGenerator();
  }
  choseColorAnswer(balls);
}

const ballsContainer = document.querySelector('.balls-container');
let score = 0;

ballsContainer.addEventListener('click', function (event) {
  const answerElement = document.querySelector('#answer');
  if (event.target.className === 'ball') {
    const rgbColorElement = document.querySelector('#rgb-color').innerText;
    if (event.target.style.backgroundColor.includes(rgbColorElement)) {
      answerElement.innerText = 'Acertou!';
      score += 3;
      document.querySelector('#score').innerText = `Sua pontuação: ${score}`;
    } else {
      answerElement.innerText = 'Errou! Tente novamente!';
    }
  }
});

const buttonReset = document.querySelector('#reset-game');

buttonReset.addEventListener('click', function () {
  colorGenerator();
  document.querySelector('#answer').innerText = 'Escolha uma cor';
});

window.onload = colorGenerator;
