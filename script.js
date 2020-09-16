function createBalls(colors) {
  const balls = document.querySelector('#balls');
  const choosenColor = Math.floor(6 * Math.random());

  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    const rgb = colors[index];
    ball.className = 'ball';
    if (index === choosenColor) {
      ball.addEventListener('click', rightColor);
      createRgbText(rgb);
    } else {
      ball.addEventListener('click', wrongColor);
    }
    ball.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    balls.appendChild(ball);
  }
}
function createRGB() {
  let rgb = [];
  for (let index = 0; index < 3; index++) {
    rgb[index] = parseInt(255 * Math.random());    
  }
  return rgb;
}
function createColors() {
  const colors = [];
  
  for (let index = 0; index < 6; index += 1) {
    colors[index] = createRGB();    
  }
  return colors;
}
function createRgbText(rgb) {
  const rgbText = document.querySelector('#rgb-color');
  rgbText.innerHTML = `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}
function rightColor() {
  const answer = document.querySelector('#answer');

  answer.innerText = 'Acertou!';
}
function wrongColor() {
  const answer = document.querySelector('#answer');

  answer.innerText = 'Errou! Tente novamente!';
}
window.onload = function () {
  createBalls(createColors());
};
