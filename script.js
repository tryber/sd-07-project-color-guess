const colorsCircle = document.querySelector("#color-palete");
let numberColors = 6;

function createBalls () {
  
  for(let i=0; i<numberColors; i+= 1) {
    let div = document.createElement("div");
    div.classList.add("ball");
    colorsCircle.appendChild(div);
  }
}


window.onload = function () {
  createBalls();
}