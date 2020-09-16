function generateColor(number) {
  const red = Math.floor(Math.random() * number);
  const green = Math.floor(Math.random() * number);
  const blue = Math.floor(Math.random() * number);
  return `(${red} , ${green} , ${blue})`;
}

const writeRGB = document.querySelector('#rgb-color');
let theMainColor = generateColor(255);
writeRGB.innerHTML = theMainColor;

function coloringBalls() {
  const allBalls = document.querySelectorAll('.ball');
  allBalls[0].style.backgroundColor = `rgb${theMainColor}`
  for (let i = 1; i < 6; i += 1) {
    allBalls[i].style.backgroundColor = `rgb${generateColor(255)}`;
  }
}
coloringBalls();

