let numberColors = 6;

function createBalls() {
  const colorsCircle = document.querySelector("#color-palete");
  for (let i = 0; i < numberColors; i += 1) {
    let div = document.createElement("div");
    div.classList.add("ball");
    colorsCircle.appendChild(div);
  }
}

function colorRandomBalls() {
  const balls = document.querySelectorAll(".ball");

  for (let i = 0; i < numberColors; i += 1) {
    let randomNumber = Math.round(Math.random() * 1000000);
    let randomColor = `#${randomNumber}`;

    balls[i].style.backgroundColor = randomColor;
    // console.log(balls[0])
  }
}

function myQuestion() {
  const question = document.querySelector("#rgb-color");

  let randomNumber1 = Math.round(Math.random() * 255);
  let randomNumber2 = Math.round(Math.random() * 255);
  let randomNumber3 = Math.round(Math.random() * 255);
  
  let numberQuestion = `(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
  question.innerText = numberQuestion;

  const balls = document.querySelectorAll(".ball");
  let randomNumber = Math.round(Math.random()*5);

  balls[randomNumber].style.backgroundColor = "rgb"+ question.innerHTML;
  console.log(randomNumber);
}

function message() {
  const answer = document.querySelector("#answer");
  const balls = document.querySelectorAll(".ball");
  const question = document.querySelector("#rgb-color");
  answer.innerText = "Escolha uma cor";

  for(let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener("click", function (event) {
      let divBall = event.target;
      if (divBall.style.backgroundColor == `rgb${question.innerText}`) {
        answer.innerText = "Acertou!";
      } else {
        answer.innerText = "Errou! Tente novamente!";
      }
      console.log(divBall);
    })
  }
  // console.log(balls[0]);
}

window.onload = function () {
  createBalls();
  colorRandomBalls();
  myQuestion();
  message();
};
