function numberRGB() {
    const number = Math.floor(Math.random() * 255);
    return number;
  }
let rgbColor;
let answer = document.querySelector('#answer');
answer.textContent = 'Escolha uma cor';

function resposta(ballClick){
    let propBackgroundColor = window.getComputedStyle(ballClick.target).getPropertyValue('background-color');
    console.log(propBackgroundColor);
    if (propBackgroundColor === `rgb${rgbColor.textContent}`){
        answer.textContent = 'Acertou!';
    } else {
        answer.textContent = 'Errou! Tente novamente!';
    }
}


let balls = document.querySelectorAll('.ball');
for (let index = 0; index < balls.length; index += 1){
    balls[index].addEventListener('click', resposta);
}

window.onload = iniciaJogo();

function iniciaJogo() {
    rgbColor = document.querySelector('#rgb-color');
    rgbColor.textContent = `(${numberRGB()}, ${numberRGB()}, ${numberRGB()})`;
    let balls = document.querySelectorAll('.ball');
    balls[0].style.backgroundColor = `rgb${rgbColor.textContent}`;
    for (let index = 1; index < balls.length; index += 1){
        let colorBall = balls[index];
      colorBall.style.backgroundColor = `rgb(${numberRGB()} ,${numberRGB()} ,${numberRGB()})`;
    }
    
    answer.textContent = 'Escolha uma cor';
}

let buttonReset = document.querySelector('#reset-game');
buttonReset.addEventListener('click', iniciaJogo);