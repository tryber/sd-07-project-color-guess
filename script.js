const balls = document.querySelectorAll('.ball');

function generationRandomColorRGB() {
  const maxNumberRGB = 256;
  const decimalNumber = () => Math.floor(Math.random() * maxNumberRGB);
  return `rgb(${decimalNumber()},${decimalNumber()},${decimalNumber()})`;
}

window.onload = function () {
  balls.forEach((ball) => {
    ball.style.backgroundColor = generationRandomColorRGB();
  });
}
document.querySelector('.div-container').addEventListener('click', function (event) {
  const rgbColor = document.getElementById('rgb-color');
  const ballBackgroundColor = event.target.style.backgroundColor;
  if (ballBackgroundColor === '') alert('clique na bola')
  if (rgbColor.innerText === ballBackgroundColor) {
    rgbColor.innerText = 'Acertou!';
  } else rgbColor.innerText = 'Errou! Tente novamente!';
});
