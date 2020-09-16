const OUTPUT_COLOR = document.querySelector(".output");

function randomColor() {
  const maxNumber = 255;
  return Math.ceil(Math.random() * maxNumber);
}

function defineBallsColor() {
  const balls = document.querySelectorAll(".ball");
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = `rgb(
    ${randomColor()},
    ${randomColor()},
    ${randomColor()})`;
  }
  const numberofBalls = 6;
  let randomNumber = Math.floor(Math.random() * numberofBalls);
  console.log(randomNumber);
  return balls[randomNumber].style.backgroundColor;
}
OUTPUT_COLOR.innerText = defineBallsColor();
