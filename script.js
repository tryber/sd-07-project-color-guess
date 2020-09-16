const OUTPUT_COLOR = document.querySelector(".output");

function randomNumber() {
  return Math.ceil(Math.random() * 255);
}

OUTPUT_COLOR.innerText = `(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
