let score = 0;
function randomColor() {
  const color = `rgb(${Math.ceil((Math.random() * 255))} , ${Math.ceil(
(Math.random() * 255))} , ${Math.ceil((Math.random() * 255))})`;
  return color;
}

function ballColor() {
  document.querySelectorAll('.ball').forEach((item) => {
    item.classList.remove('premiado');
    item.style.backgroundColor = randomColor();
  });
}
function randomBall() {
  const randomNumber = Math.floor((Math.random() * 6) + 1).toString();
  document.querySelectorAll('.ball').forEach((item) => {
    if (item.classList[1] === randomNumber) {
      item.classList.add('premiado');
      const colorName = document.querySelector('.premiado').style
        .backgroundColor;
      document.querySelector('#rgb-color').innerText = colorName.slice(3);
    }
  });
}

document.querySelector('#score').innerText = score;
document.getElementById('answer').innerText = 'Escolha uma cor';
document.querySelector('#reset-game').addEventListener('click', () => {
  ballColor();
  randomBall();
  document.querySelector('#answer').innerText = 'Escolha uma cor';
});

randomColor();
ballColor();

document.querySelectorAll('.ball').forEach((item) => {
  if (item.classList === 'selecionado') {
    document.querySelector('p').innerText = item.style.backgroundColor;
  }
});
randomBall();

document.querySelectorAll('.ball').forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList[2] === 'premiado') {
      score += 3;
      document.querySelector('#score').innerText = score;
      return (document.querySelector('#answer').innerText = 'Acertou!');
    }
    return (document.querySelector('#answer').innerText = 'Errou! Tente novamente!');
  });
});
