const randomRgbToGuess = document.getElementById('rgb-color');
const ballsElementsList = document.getElementsByClassName('ball');
let rgbStringList = [];

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
console.log(ballsElementsList[0]);
for (let j = 0; j < newRgbArray.length; j += 1) {
  ballsElementsList[j].style.backgroundColor = "rgb" + newRgbArray[j];
}
