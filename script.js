function rgbGenerator() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.round(Math.random() * 256);
  let z = Math.round(Math.random() * 256);
  return `(${x}, ${y}, ${z})`;
} 

function rgbSelectText() {
  var rgbText = document.querySelector('#rgb-color');
  rgbText.innerHTML = rgbGenerator();
}



// https://github.com/tryber/sd-04-block5-project-color-guess/pull/17/files
function rgbSelectBall() {
  const rgbBall = document.querySelectorAll('.ball');
  rgbBall[Math.round(Math.random() * 5)].style.backgroundColor = `rgb${rgbSelectText()}`;
}


function rgbBalls() {
  const rgbBall = document.querySelectorAll('.ball');
  rgbBall.forEach((ball) => {
    ball.style.backgroundColor = `rgb${rgbGenerator()}`;
  });
  rgbSelectBall();
}
rgbBalls();
// -------------------------------------------------------------


function resetGame() {
  rgbSelectText();
  rgbBalls();
  answer.innerHTML = 'Escolha uma cor';
}



/*function check () {
  let displayText = document.querySelector('#answer');
  for (let index = 0; index < rgbBall.length; index += 1) {
    if (rgbBall[index].style.backgroundColor == rgbGenerator()) {
      displayText.innerHTML = 'Acertou!';
    } else {
      displayText.innerHTML = 'Errou! Tente novamente!';
    }
  }
}*/

