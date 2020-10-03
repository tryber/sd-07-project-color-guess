
const balls = document.getElementsByClassName('ball');
const rgbTip = document.getElementById('rgb-color');
const resetButton = document.getElementById('reset-game');
const resposta = document.getElementById('answer');
let guessRGB = [];

document.querySelectorAll('.ball').forEach((item) => {
  item.addEventListener('click', () => {
    alert('Clique');
  });
});

const randonRGB = () => {
  const corR = parseInt(((Math.random()) * 256), 0);
  const corG = parseInt(((Math.random()) * 256), 0);
  const corB = parseInt(((Math.random()) * 256), 0);
  guessRGB.push(`(${corR},${corG},${corB})`);
  return `rgb(${corR},${corG},${corB})`;
};

const colorBalls = () => {
  guessRGB = [];
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randonRGB();
  }
  rgbTip.innerText = guessRGB[parseInt(((Math.random()) * 6), 0)];
  resposta.innerText = 'Escolha uma cor';
  // console.log(guessRGB);
};

resetButton.addEventListener('click', colorBalls);

colorBalls();
