const corTitulo = document.querySelector("#rgb-color");
corTitulo.innerHTML = `${randomRGB()}`
preencherBolas()

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

function teste() {console.log("teste")}
// Rodada

rodada()
function rodada(){
  let corAtual = randomRGB()
  corTitulo.innerHTML = corAtual
  const balls = document.querySelectorAll(".ball");
  const bolaDaVez = Math.floor(Math.random() * balls.length)
  balls[bolaDaVez].style.backgroundColor = corAtual
  balls[bolaDaVez].removeEventListener('click', errou)
  balls[bolaDaVez].addEventListener('click', acertou)
}

// Btn Mudar Dificuldade
// Btn Resetar o Jogo
// Cor atual


// Placar 
let placar = 0

function acertou(){
  const resposta = document.querySelector('#answer')
  resposta.innerHTML = "Acertou!"
  placar += 3
  document.querySelector("#score").innerHTML = placar
}
function errou(){
  const resposta = document.querySelector('#answer')
  resposta.innerHTML = "Errou! Tente novamente!"
}