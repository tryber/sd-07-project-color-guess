function createBalls() {
    const balls = document.querySelector('#balls');

    for (let index = 0; index < 6; index += 1) {
        const ball = document.createElement('div');
        ball.className = 'ball';
        balls.appendChild(ball);
    }
}
function createRGB() {
  const rgbText = document.querySelector('#rgb-color');

  rgbText.innerHTML = '(123, 123, 123)'
}
window.onload = function () {
  createBalls();
  createRGB();
}