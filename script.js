function generateColor(number) {
  const red = Math.floor(Math.random() * number);
  const green = Math.floor(Math.random() * number);
  const blue = Math.floor(Math.random() * number);
  return `(${red}, ${green}, ${blue})`;
}

const writeRGB = document.querySelector('#rgb-color');
const theMainColor = generateColor(255);
writeRGB.innerHTML = theMainColor;

const allBalls = document.querySelectorAll('.ball');
function coloringBalls() {
  allBalls[0].style.backgroundColor = `rgb${theMainColor}`;
  for (let i = 1; i < 6; i += 1) {
    allBalls[i].style.backgroundColor = `rgb${generateColor(255)}`;
  }
}

window.onload = coloringBalls();

for (let i = 0; i < 6; i += 1) {
  allBalls[i].addEventListener('click', function () {
    if (allBalls[i].style.backgroundColor === `rgb${theMainColor}`) {
      document.querySelector('#answer').innerText = 'Acertou!';
    } else {
      document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
    }
  });
};
