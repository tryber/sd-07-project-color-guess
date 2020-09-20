var rgbText = document.querySelector('#rgb-color');
var answer = document.querySelector('#answer');


function rgbGenerator() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `(${x}, ${y}, ${z})`;
}


function rgbInputText() {
  rgbText.innerHTML = rgbGenerator();
}


function rgbSetBall() {
  let rgbBalls = document.querySelectorAll('.ball');
  rgbBalls[Math.floor(Math.random() * 5)].style.background = `rgb${rgbText.innerHTML}`;
}


function rgbColorBalls() {
  let balls = document.querySelectorAll('.ball');
  balls.forEach((ball) => {
    ball.style.backgroundColor = `rgb${rgbGenerator()}`;
  });
  rgbSetBall();
}


// https://github.com/tryber/sd-04-block5-project-color-guess/pull/17/files
function checkColor() {
   let balls = document.querySelectorAll('.ball');
   balls.forEach((ball) => {
     ball.addEventListener('click', () => {
       if (ball.style.background === `rgb${rgbText.innerHTML}`) {
         answer.innerHTML = 'Acertou!';
       } else {
         answer.innerHTML = 'Errou! Tente novamente!';
       }
     });
   });
 }


function resetGame() {
  rgbInputText();
  rgbColorBalls();
  answer.innerHTML = 'Escolha uma cor';
}


rgbInputText();
rgbColorBalls();
checkColor();
resetGame();

