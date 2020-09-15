const randomRgbToGuess = document.getElementById('rgb-color');
const ballsElementsList = document.getElementsByClassName('ball');
const resetGameButton = document.getElementById('reset-game');
const answerTag = document.getElementById('answer');
const scoreTag = document.getElementById('score');
let rgbStringList = [];
let userScore;

// checking if localStorage is empty
if (localStorage.getItem('lastScore') === null) {
    userScore = 0;
} else {
    userScore = parseInt(localStorage.getItem('lastScore'));
}

function generateRandomRgb() {
  const randomR = Math.round(Math.random() * 255);
  const randomG = Math.round(Math.random() * 255);
  const randomB = Math.round(Math.random() * 255);
  return `(${randomR}, ${randomG}, ${randomB})`
}

// function that shuffles the array (borrowed from stack overflow)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
  return array;
}

function checkTheAnswer(event) {
  if (event.target.style.backgroundColor === ('rgb' + colorToGuess)) {
    answerTag.innerText = 'Acertou!';
    userScore += 3;
    localStorage.removeItem('lastScore');
    localStorage.setItem('lastScore', userScore);
    scoreTag.innerText = `Pontos: ${userScore}`;
  } else {
    answerTag.innerText = 'Errou! Tente novamente!';
  }
}

// generate the right number and adds to the page and the list
const colorToGuess = generateRandomRgb();
rgbStringList.push(colorToGuess);
randomRgbToGuess.innerText = colorToGuess;

// generate five random numbers and append to the list
for (let i = 0; i < 5; i += 1) {
  rgbStringList.push(generateRandomRgb());
}

// shuffling the array and add the rgb values to the circles
const newRgbArray = shuffleArray(rgbStringList);
for (let j = 0; j < newRgbArray.length; j += 1) {
  ballsElementsList[j].style.backgroundColor = "rgb" + newRgbArray[j];
  ballsElementsList[j].addEventListener('click', checkTheAnswer);
}

resetGameButton.addEventListener('click', function() {
  location.reload();
})

scoreTag.innerText = `Pontos: ${userScore}`;
