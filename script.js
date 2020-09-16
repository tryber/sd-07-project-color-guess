
function getNumber(number){
  return Math.floor(Math.random() * Math.floor(number));
}

function generateColors(){
  let colors = [];

  for(let i = 0; i < 6; i += 1){
    let color = `rgb(${getNumber(255)}, ${getNumber(255)}, ${getNumber(255)})`;

    colors.push(color);
  }

  return colors;
}

function pickColor(colors){
  let index = getNumber(6);
  let colorToGuess;
  let auxName;

  auxName = colors[index].split('rgb');
  colorToGuess = auxName[1];

  return colorToGuess;
}

function ballClicked(e){
  let textHint = document.getElementById('answer');
  let colorToGuess = document.getElementById('rgb-color');
  let colorClicked;

  colorClicked = e.srcElement.style.backgroundColor.split('rgb');

  if(colorClicked[1] === colorToGuess.innerText){
    textHint.innerText = 'Acertou!';
  }else{
    textHint.innerText = 'Errou! Tente novamente!';
  }

}

function newGame(){
  let balls = document.querySelectorAll('.ball');
  let textColorToGuess = document.querySelector('#rgb-color');
  let textHint = document.getElementById('answer');
  let colors = generateColors();
  let colorToGuess = '';

  for(let i=0; i < 6; i += 1){
    balls[i].style.backgroundColor = colors[i];
  }

  colorToGuess = pickColor(colors);
  textColorToGuess.innerHTML = colorToGuess;

  textHint.innerText = 'Escolha uma cor';
}

let btnReset = document.getElementById('reset-game');
let ballsForEvent = document.getElementsByClassName('ball');

btnReset.addEventListener('click', newGame);

for(let i=0; i<ballsForEvent.length; i += 1){
  ballsForEvent[i].addEventListener('click', ballClicked);
}

window.onload = newGame;
