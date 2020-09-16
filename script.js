function createRandom(maxValue) {
  return Math.floor(Math.random()*(maxValue+1))
}

function createRandomColor(){
  const red = createRandom(255)
  const green = createRandom(255)
  const blue = createRandom(255)

  return `rgb(${red}, ${green}, ${blue})`
}

function createColorBox(color){
  const newElement = document.createElement('div');
  newElement.style.backgroundColor = color;
  newElement.classList.add('ball');
  newElement.addEventListener('click', selectElement)
  colorBoard.appendChild(newElement);
}

function destructBoardBox (){
  const elementList = document.querySelectorAll('.ball')
  for (const iterator of elementList) {
    colorBoard.removeChild(iterator);
  }
}

function populateOptions() {
  for (let elemento = 0; elemento < 6; elemento += 1) {
    let color = createRandomColor();
    createColorBox(color);
  }
}

function createColorBoard() {
  destructBoardBox()
  populateOptions()
  selectPremierBall()
}

function restartGame() {
  answerText.textContent = 'Escolha uma cor'
  createColorBoard()
}

function selectPremierBall() {
  let randomInterval = createRandom(5)
  let randomBall = document.querySelectorAll('.ball')[randomInterval]
  let colorRandomBall = randomBall.style.backgroundColor
  rgbColor.textContent = colorRandomBall.slice(3)
}

function checkAlternative(element){
  let colorActual = element.style.backgroundColor.slice(3)
  return rgbColor.textContent === colorActual
}

function selectElement(e){
  if (checkAlternative(e.target)) {
    answerText.textContent = 'Acertou!'
    scoreElement.textContent = parseInt(scoreElement.textContent) + 3
  } else {
    answerText.textContent = 'Errou! Tente novamente!'
  }
}

const colorBoard = document.querySelector('#color-board')
const resetGame = document.querySelector('#reset-game')
const answerText = document.querySelector('#answer')
const rgbColor = document.querySelector('#rgb-color')
const scoreElement = document.querySelector('#score')

resetGame.addEventListener('click', restartGame)

createColorBoard()
