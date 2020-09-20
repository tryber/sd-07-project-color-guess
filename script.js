function geraCores() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let rgb = `${r}, ${g}, ${b}`;
  return rgb;
}

const ball = document.querySelectorAll('.ball');
for (let index = 0; index < ball.length; index += 1) {
  ball[index].style.backgroundColor = "rgb("+geraCores()+")";
}

const rgbColor = document.querySelector('#rgb-color');
let igualcores = ball[Math.round(Math.random() * (ball.length - 1))].style.backgroundColor;
rgbColor.innerText = igualcores;

for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', () => {
    if (rgbColor.innerText === ball[index].style.backgroundColor) {
      document.querySelector('#answer').innerText = 'Acertou! Novas cores!';
    } else {
      document.querySelector('#answer').innerText = 'Errou! Tente novamente';
    }
  });
}

const botaoJogar = document.querySelector('#reset-game');
botaoJogar.addEventListener('click', () => {
  location.reload()
});



