const corTitulo = document.querySelector("#rgb-color");
corTitulo.innerHTML = `${randomRGB()}`

// Cor Aleatória
function randomRGB(){
  function random255(){return Math.ceil(Math.random() * 255)}
  let R = random255()
  let G = random255()
  let B = random255()
  return `rgb(${R}, ${G}, ${B})`
}

// Preencher as Bolas com cores aleatórias 
function preencherBolas() {
  const balls = document.querySelectorAll(".ball");
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomRGB()
    balls[i].addEventListener('click', errou)
  }
}

// Rodada
function rodada(){
  preencherBolas()
  let corAtual = randomRGB()
  corTitulo.innerHTML = corAtual
  corDaVez()
  resetaResposta()
  console.log('oi')
}
// Btn Resetar o Jogo
const btn = document.querySelector('#reset-game')
console.log(btn)
btn.addEventListener('click', rodada)

// Escolhendo a Cor da Rodada
function corDaVez(){
  const balls = document.querySelectorAll(".ball");
  const bolaDaVez = Math.floor(Math.random() * balls.length)
  balls[bolaDaVez].style.backgroundColor = corAtual
  balls[bolaDaVez].removeEventListener('click', errou)
  balls[bolaDaVez].addEventListener('click', acertou)
}
function resetaResposta(){
  const resposta = document.querySelector('#answer')
  resposta.innerHTML = "Escolha uma cor"
}
// Placar 
let score = 0

function acertou(){
  const resposta = document.querySelector('#answer')
  resposta.innerHTML = "Acertou!"
  score += 3
  document.querySelector("#score").innerHTML = score
}
function errou(){
  const resposta = document.querySelector('#answer')
  resposta.innerHTML = "Errou! Tente novamente!"
}

window.onload = rodada