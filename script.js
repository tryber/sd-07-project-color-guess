// Criando o score do jogo
let points = 0;
const score = document.getElementById('score');

// Imprimindo o score
score.innerHTML = points;

// Sorteia as cores
const answer = document.getElementById('answer');
let color = []; // assortedColors();

// Sorteia a cor escolhida entre as 6 cores
let numberRaffledBall = -1; // o intervalo de sorteio é de [0, 5] rndRGB(5);

// imprime na tela o RGB sorteado
const rgbColor = document.getElementById('rgb-color');

const container = document.querySelector('.container');

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
  const colors = [];
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
      colors.push(newColor);
      thereAreEqualColors = false;
    } while (thereAreEqualColors);
  }
  return (colors);
}

// Atribui as cores sorteadas para as divs .ball
function colorsToDivs(colors) {
  const childrenContainer = document.querySelector('.container').children;
  for (let i = 0; i < childrenContainer.length; i += 1) {
    childrenContainer[i].style.backgroundColor = colors[i];
  }
}

// Recebe um dos filhos selecionado e retorna sua posição entre os irmãos
function returnNumberOfChild(child) {
  // Retirado de:
  //        https://stackoverflow.com/questions/11761881/
  //        javascript-dom-find-element-index-in-container
  // O slice.call converte um HTMLCollection em um array
  const arrayAllChildren = Array.prototype.slice.call(child.parentNode.children);

  // retorna o número do filho dentro array
  return (arrayAllChildren.indexOf(child));
}

function init() {
  // Escreve o texto
  answer.innerText = 'Escolha uma cor';

  // Remove a borda do item selecionado
  const lastSelected = document.getElementsByClassName('selected');
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
}

init();

container.addEventListener('click', function (event) {
  if (answer.innerText === 'Escolha uma cor') {
    const selected = event.target;

    // Adiciona a borda de seleção
    selected.classList.add('selected');

    const indexSelected = returnNumberOfChild(selected);

    if (indexSelected === numberRaffledBall) {
      points += 3;
      score.innerHTML = points;
      answer.innerText = 'Acertou!';
    } else {
      // score.innerHTML = points;
      answer.innerText = 'Errou! Tente novamente';
    }
  }
});

const resetGame = document.getElementById('reset-game');

resetGame.addEventListener('click', init);
