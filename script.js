const OUTPUT_COLOR = document.querySelector(".output");

function randomNumber() {
  const maxNumber = 255;
  return Math.ceil(Math.random() * maxNumber);
}

OUTPUT_COLOR.innerText = `(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

const balls = document.querySelectorAll(".ball");
for (let index = 0; index < balls.length; index += 1) {
  balls[index].style.backgroundColor = `rgb(
    ${randomNumber()},
    ${randomNumber()},
    ${randomNumber()})`;
}
