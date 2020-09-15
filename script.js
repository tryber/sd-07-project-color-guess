const randomRgbElement = document.getElementById('rgb-color');

function generateRandomRgb() {
  const randomR = Math.round(Math.random() * 255);
  const randomG = Math.round(Math.random() * 255);
  const randomB = Math.round(Math.random() * 255);
  return `(${randomR}, ${randomG}, ${randomB})`
}

randomRgbElement.innerText = generateRandomRgb();