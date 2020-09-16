const corTitulo = document.querySelector("#rgb-color");
corTitulo.innerHTML = `${randomRGB()}`
/* preencherBolas() */

// Cor Aleatória
function randomRGB(){
  function random255(){return Math.ceil(Math.random() * 255)}
  let R = random255()
  let G = random255()
  let B = random255()
  return `rgb(${R}, ${G}, ${B})`
}

// Preencher as Bolas com cores aleatórias 
function preencherBolas(){
  const balls = document.querySelectorAll(".ball");
  for (let i = 0; i < balls.length; i += 1) {balls[i].style.backgroundColor = randomRGB()}
}

// Rodada


rodada()

// Btn Mudar Dificuldade
// Btn Resetar o Jogo
// Cor atual
function rodada(){
  let corAtual = randomRGB()
  corTitulo.innerHTML = corAtual
  const Balls = document.querySelectorAll(".ball");
  const bolaDaVez = Math.floor(Math.random() * Balls.length)
  Balls[bolaDaVez].style.backgroundColor = corAtual
  Balls[bolaDaVez].addEventListener('click', acertou)
}

// Placar 
let placar = 0

function acertou(){
  placar += 1
  document.querySelector("#score").innerHTML = placar
}