function rgbGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function colorGenerator() {
  const balls = document.querySelector('.balls-container').children;
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = rgbGenerator();
  }
  choseColorAnswer(balls);
}

function choseColorAnswer(ballsArray) {
  const sortedNum = Math.floor(Math.random() * 6);
  const rgbColorElement = document.querySelector('#rgb-color');
  const simpleString = ballsArray[sortedNum].style.backgroundColor.slice(3);
  rgbColorElement.innerText = simpleString;
}

const ballsContainer = document.querySelector('.balls-container');

ballsContainer.addEventListener('click', function (event) {
  const answerElement = document.querySelector('#answer');
  if (event.target.className == 'ball') {
    const rgbColorElement = document.querySelector('#rgb-color').innerText;
    if (event.target.style.backgroundColor.includes(rgbColorElement)) {
      answerElement.innerText = 'Acertou!'
    }
    else {
      answerElement.innerText = 'Errou! Tente novamente!'
    }
  }
})

window.onload = colorGenerator;
