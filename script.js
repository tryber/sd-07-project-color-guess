const circles = document.querySelectorAll('.ball');
let score = 0;
function button(event) {
  if (event.target.style.backgroundColor === document.querySelector('#rgb-color').innerText) {
    document.querySelector('#answer').innerText = 'Acertou!';
    score += 3;
    document.querySelector('#score').innerText = score;
  } else {
    document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
  }
}
function roll() {
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    circles[i].addEventListener('click', button);
  }
  document.querySelector('#rgb-color').innerText = circles[2].style.backgroundColor;
  document.querySelector('#answer').innerText = 'Escolha uma cor';
}
document.querySelector('#reset-game').addEventListener('click', roll);
roll(circles);
