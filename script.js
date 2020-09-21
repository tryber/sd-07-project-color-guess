// Função que gera um número pseudo aleatório de 0 até N
function rndRGB(N) {
  return (Math.floor(parseInt(Math.random() * N, 10)));
}

// Função que retorna um RGB com as três cores aleatórias
function randRGB() {
  return (`rgb(${rndRGB(255)} , ${rndRGB(255)} , ${rndRGB(255)})`);
}

function assortedColors() {
  // Sorteia as Cores
  let colors = [];
  const numberOfColors = 6;
  colors.push(randRGB());

  for (let i = 1; i < numberOfColors; i += 1) {
    let newColor = (randRGB());
    let thereAreEqualColors = true;
    do {
      for (let j = 0; j < colors.length; j += 1) {
        if (newColor === colors[j]) {
          thereAreEqualColors = true;
          newColor = (randRGB());
          continue;
        }
      }
      colors.push(newColor)
      thereAreEqualColors = false
    } while (thereAreEqualColors )
  }
  return (colors)
}

// Atribui as cores sorteadas para as divs .ball
function colorsToDivs(colors) {
  const childrenContainer=document.querySelector('.container').children;
  for (let i = 0; i < childrenContainer.length; i += 1) {
    childrenContainer[i].style.backgroundColor =  colors[i];
  }
}

// Recebe um dos filhos selecionado e retorna sua posição entre os irmãos
function returnNumberOfChild(child) {
  // Retirado de:
  //        https://stackoverflow.com/questions/11761881/
  //        javascript-dom-find-element-index-in-container
  // O slice.call converte um HTMLCollection em um array
  let arrayAllChildren = Array.prototype.slice.call(child.parentNode.children);

  // retorna o número do filho dentro array
  return (arrayAllChildren.indexOf(child));
}

function init() {
  // Escreve o texto
  answer.innerText = 'Escolha uma cor';

  // Remove a borda do item selecionado
  let lastSelected = document.getElementsByClassName('selected');
  if (lastSelected.length !== 0) {
    lastSelected[0].classList.remove('selected');
  }

  // Sorteia as seis cores
  color = assortedColors();

  // Pinta os circulos
  colorsToDivs(color);

  // Sorteia a cor escolhida entre as 6 cores
  numberRaffledBall = rndRGB(5);

  // imprime na tela o RGB sorteado
  rgbColor.innerText = color[numberRaffledBall];

  console.log(numberRaffledBall);
}

// Criando o score do jogo
let sum = document.getElementById('sum');
let score = 0;
let textScore = document.getElementById('score');

// Sorteia as cores
let answer = document.getElementById('answer');
let color = []; // assortedColors();

// Sorteia a cor escolhida entre as 6 cores
let numberRaffledBall = -1; // o intervalo de sorteio é de [0, 5] rndRGB(5);

// imprime na tela o RGB sorteado
let rgbColor = document.getElementById('rgb-color');

let container = document.querySelector('.container');

init();

container.addEventListener('click', function (event) {
  if (answer.innerText === 'Escolha uma cor') {
    let selected = event.target

    // Adiciona a borda de seleção
    selected.classList.add('selected')

    let indexSelected = returnNumberOfChild(selected)

    if (indexSelected === numberRaffledBall) {
      score += 3;
      textScore.innerText = `Placar: ${score}`
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente';
    }
  }
});

let resetGame = document.getElementById('reset-game');

resetGame.addEventListener('click', function () {
  init();
})
