function geraTresRgb() {
  let r = [];

  for (let i = 0; i < 3; i += 1) {
    r[i] = Math.round(Math.random() * 255);
  }
  return "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")";
}

function geraCorAleatoria() {
  let bolas = document.querySelectorAll(".ball");
  for (let i = 0; i < bolas.length; i += 1) {
    bolas[i].style.backgroundColor = geraTresRgb();
  }
}
geraCorAleatoria();

//----------------------------------------------------------------------

function tiraRgbTexto(string) {
  let novaString = "";
  for (let i = 3; i < string.length; i += 1) {
    novaString = novaString + string[i];
  }
  return novaString;
}

function textoDeUmaBolaAleatoria() {
  let text = document.querySelector("#rgb-color");
  let bolas = document.querySelectorAll(".ball");

  let random = window
    .getComputedStyle(bolas[Math.round(Math.random() * 6)], null)
    .getPropertyValue("background-color");

  text.innerHTML = tiraRgbTexto(random);
}
textoDeUmaBolaAleatoria();

//-----------------------------------------------------------------------

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("ball")) {
    let answer = document.querySelector("#answer");
    let text = document.querySelector("#rgb-color");

    let pickedColor = window
      .getComputedStyle(event.target, null)
      .getPropertyValue("background-color");
    pickedColor = tiraRgbTexto(pickedColor);

    if (pickedColor == text.innerText) {
      answer.innerHTML = "Acertou!";
    } else {
      answer.innerHTML = "Errou! Tente novamente!";
    }
  }
});
