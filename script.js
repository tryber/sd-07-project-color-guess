const randomRgbElement = document.getElementById('rgb-color');

// numeros aleatorios rgb
const randomR = Math.round(Math.random() * 255);
const randomG = Math.round(Math.random() * 255);
const randomB = Math.round(Math.random() * 255);

function generateRandomRgb() {
  return `(${randomR}, ${randomG}, ${randomB})`
}

randomRgbElement.innerText = generateRandomRgb();
