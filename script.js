

function getNumber(number){
  return Math.floor(Math.random() * Math.floor(number));
}

function generateColors(){
  let colors = [];

  for(let i = 0; i < 6; i += 1){
    let color = `rgb(${getNumber(255)} , ${getNumber(255)}, ${getNumber(255)})`;

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

function newGame(){
  let balls = document.querySelectorAll('.ball');
  let textColorToGuess = document.querySelector('#rgb-color');
  let textHint = document.getElementById('answer');
  let colors = generateColors();
  let colorToGuess = '';

  console.log(colors);
  for(let i=0; i < 6; i += 1){
    //console.log(i);
    balls[i].style.backgroundColor = colors[i];
    console.log(balls[i].style);
    //console.log(colors[i]);
  }

  colorToGuess = pickColor(colors);
  textColorToGuess.innerHTML = colorToGuess;
  console.log(colorToGuess);

  textHint.innerText = 'Escolha uma cor';
}

let btnReset = document.getElementById('reset-game');

btnReset.addEventListener('click', newGame);

window.onload = newGame;
