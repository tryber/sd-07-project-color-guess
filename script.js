const allBalls = document.querySelectorAll('.ball');
const rgbColorPosition = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');

function getRandomColor() {
  return Math.floor(Math.random() * 255);
}

function getPosition() {
  let position = Math.floor(Math.random() * 10);
  if(position > 5) {
    position = 5;
  }
  return position;
}

window.onload = function () {
  for (let index = 0; index < allBalls.length; index += 1) {
    const randomRGBColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    allBalls[index].style.backgroundColor = randomRGBColor;
  }

  let position = getPosition();
  const withrgb = allBalls[position].style.backgroundColor;
  rgbColorPosition.innerText = withrgb.replace('rgb', '');
};

for(let index = 0; index < allBalls.length; index += 1) {
  allBalls[index].addEventListener('click', function () {
    if(`rgb${rgbColorPosition.innerText}` == allBalls[index].style.backgroundColor) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  });
}
