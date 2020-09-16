const OUTPUT_COLOR = document.querySelector(".output");
const BALLS = document.querySelectorAll(".ball");

defineBallsColor();
for (let i = 0; i < BALLS.length; i += 1) {
  BALLS[i].addEventListener("click", isChoosenRight);
}
document.querySelector(".res-gam").addEventListener("click", defineBallsColor);

function randomColor() {
  const maxNumber = 255;
  return Math.ceil(Math.random() * maxNumber);
}

function defineBallsColor() {
  for (let index = 0; index < BALLS.length; index += 1) {
    BALLS[index].style.backgroundColor = `rgb(
    ${randomColor()},
    ${randomColor()},
    ${randomColor()})`;
  }

  const numberofBalls = 6;
  let randomNumber = Math.floor(Math.random() * numberofBalls);
  console.log(randomNumber);
  OUTPUT_COLOR.innerText = BALLS[randomNumber].style.backgroundColor;
}

function isChoosenRight(event) {
  if (event.target.style.backgroundColor === OUTPUT_COLOR.innerText) {
    document.querySelector(".resp").innerText = "Acertou!";
  } else {
    document.querySelector(".resp").innerText = "Errou! Tente novamente!";
  }
}
