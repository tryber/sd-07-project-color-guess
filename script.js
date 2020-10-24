window.onload = function() {
  scoreInit();
  ballsGenerate();
  playGame();
}

function colorGenerate() {
  const rgb = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  }
  return `rgb(${Object.values(rgb)})`;
}

function phrasesGenerator(param) {
  let phrase = ' ';
  switch (param) {
    case 0: return phrase = 'Escolha uma cor'; break;
    case 1: return phrase = 'Acertou!'; break;
    case 2: return phrase = 'Errou! Tente novamente!'; break;
    default: return phrase = 'Escolha uma cor'; break;
  };
}

function scoreGenerate(score, action) {
 parseInt(score);
  if (action === 'add') return (score += 3);
  return score = 0;
}

function scoreInit() {
const placar = document.querySelector('#score');
placar.innerHTML = 0; 
}

function ballsGenerate() {
  const ball = document.getElementsByClassName('ball');
  for( let i =0; i < 6; i += 1) {
    ball[i].style.backgroundColor = colorGenerate();
  }
  const number = Math.floor(Math.random() * 6); 
  const textRgb = document.getElementById('rgb-color'); 
  textRgb.innerText = ball[number].style.backgroundColor ;
}

function playGame(){
  const ball = document.getElementsByClassName('ball');
  const textRgb = document.getElementById('rgb-color'); 
  const placar = document.querySelector('#score');
  const phrase = document.querySelector('#answer');
  for( let i =0; i < 6; i += 1) {
    ball[i].addEventListener('click', function() {
      if (ball[i].style.backgroundColor === textRgb.innerText) {
        phrase.innerText = phrasesGenerator(1);
        placar.innerHTML = scoreGenerate(parseInt(placar.innerText), 'add');  
      };
    if (ball[i].style.backgroundColor !== textRgb.innerText){
      phrase.innerText = phrasesGenerator(2);
    }    
  });  
} ;
} 

const btReset = document.querySelector('#reset-game');
btReset.addEventListener('click', function() {
  ballsGenerate();
  phrase.innerText = phrasesGenerator(0);
  playGame();
});

const btBegin = document.querySelector('#begin-game');
btBegin.addEventListener('click', function() {
  scoreInit();
  ballsGenerate();
  phrase.innerText = phrasesGenerator(0);
  playGame();
});


