function colorGenerate() {
  const rgb = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
  return `rgb(${Object.values(rgb)})`;
}

function phrasesGenerator(param) {
  switch (param) {
    case 0: return 'Escolha uma cor';
    case 1: return 'Acertou!';
    case 2: return 'Errou! Tente novamente!';
    default: return 'Escolha uma cor';
  }
}

function scoreGenerate(score, action) {
  if (action === 'add') return (score += 3);
  return score;
}

function scoreInit() {
  const placar = document.querySelector('#score');
  placar.innerHTML = 0;
  return parseInt(placar.innerText, 10);
}

function ballsGenerate() {
  const ball = document.getElementsByClassName('ball');
  for (let i = 0; i < 6; i += 1) {
    ball[i].style.backgroundColor = colorGenerate();
  }
  const number = Math.floor(Math.random() * 6);
  const textRgb = document.getElementById('rgb-color');
  textRgb.innerText = ball[number].style.backgroundColor;
}

function playGame() {
  const ball = document.getElementsByClassName('ball');
  const textRgb = document.getElementById('rgb-color');
  const placar = document.querySelector('#score');
  const phrase = document.querySelector('#answer');
  for (let i = 0; i < 6; i += 1) {
    ball[i].addEventListener('click', function () {
      if (ball[i].style.backgroundColor === textRgb.innerText) {
        phrase.innerText = phrasesGenerator(1);
        placar.innerHTML = scoreGenerate(parseInt(placar.innerText, 10), 'add');
      }
      if (ball[i].style.backgroundColor !== textRgb.innerText) {
        phrase.innerText = phrasesGenerator(2);
      }
    });
  }
}

const phrase = document.querySelector('#answer');
window.onload = function () {
  scoreInit();
  phrase.innerText = phrasesGenerator(0);
  ballsGenerate();
  playGame();
};

const btReset = document.querySelector('#reset-game');
btReset.addEventListener('click', function () {
  ballsGenerate();
  phrase.innerText = phrasesGenerator(0);
});

const btBegin = document.querySelector('#begin-game');
btBegin.addEventListener('click', function () {
  scoreInit();
  ballsGenerate();
  phrase.innerText = phrasesGenerator(0);
});
