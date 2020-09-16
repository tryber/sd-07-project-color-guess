const allBalls = document.querySelectorAll('.ball');
function generateColor() {
  for (let i = 0; i < 6; i += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgbColor = `(${red}, ${green}, ${blue})`;
    allBalls[i].style.backgroundColor = `rgb${rgbColor}`;
  }
}

window.onload = generateColor();

let writeRGB = allBalls[Math.floor(Math.random() * 6)].style.backgroundColor;
// para pegar uma bola qualquer entre 0 e 6
let rgbStringOff = writeRGB.slice(3);
// slice remove o rgb e colocar só os parênteses (remove e adiciona ao mesmo tempo)
// referência https://www.w3schools.com/JSREF/jsref_slice_string.asp
document.querySelector('#rgb-color').innerHTML = rgbStringOff;

let points = 0;
function pontos() {
  if (document.querySelector('#answer').innerText === 'Acertou!') {
    points += 3;
    document.querySelector('#score').innerHTML = `Placar: ${points}`;
  }
}

for (let i = 0; i < 6; i += 1) {
  allBalls[i].addEventListener('click', function () {
    if (allBalls[i].style.backgroundColor === `rgb${rgbStringOff}`) {
      document.querySelector('#answer').innerText = 'Acertou!';
      pontos();
    } else {
      document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
    }
  });
}

document.querySelector('button').addEventListener('click', function () {
  generateColor();
  writeRGB = allBalls[Math.floor(Math.random() * 6)].style.backgroundColor;
  rgbStringOff = writeRGB.slice(3);
  document.querySelector('#rgb-color').innerHTML = rgbStringOff;
  document.querySelector('#answer').innerText = 'Escolha uma cor';
});
