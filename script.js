window.onload = function () {
  if (localStorage.count != undefined) {
    let ponto = localStorage.getItem("count");
    let score = document.querySelector("#score");
    score.innerHTML = "Placar: " + ponto;
  }

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
    let number = Math.round(Math.random() * 5);
    let random = window
      .getComputedStyle(bolas[number], null)
      .getPropertyValue("background-color");

    text.innerHTML = tiraRgbTexto(random);
  }
  textoDeUmaBolaAleatoria();

  //-----------------------------------------------------------------------
  let count = 0;
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
        count += 3;
        atualizaPlacar(count);
      } else {
        answer.innerHTML = "Errou! Tente novamente!";
      }
    }
  });

  //-------------------------------------------------------------------

  let button = document.querySelector("#reset-game");

  button.addEventListener("click", function () {
    let answer = document.querySelector("#answer");
    geraCorAleatoria();
    textoDeUmaBolaAleatoria();
    answer.innerHTML = "Escolha uma cor";
  });

  //--------------------------------------------------------------------

  function atualizaPlacar(count) {
    localStorage.setItem("count", count);
    let score = document.querySelector("#score");
    score.innerHTML = "Placar: " + count;
  }
};
