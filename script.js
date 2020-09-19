const x = Math.floor(Math.random() * 256);
const y = Math.floor(Math.random() * 256);
const z = Math.floor(Math.random() * 256);
const rgbGenerator = `rgb (${x}, ${y}, ${z})`;

const rgbText = document.querySelector('#rgb-color');
rgbText.innerHTML = rgbGenerator; 


const balls = document.querySelectorAll('.ball');
const displayText = document.querySelector('#answer');
if ( balls[i].style.backgroundColor == rgbGenerator) {
  displayText.innerHTML = 'Acertou!';
} else {
  displayText.innerHTML = 'Errou! Tente novamente!';
}
