let buttonreset = document.getElementById("reset-game");
let score = document.getElementById("score");
let points = 0;
score.innerText = "Placar: " + points;
buttonreset.addEventListener("click",reset);
reset();
function reset() {

    let balls = document.querySelectorAll("#balls");
    balls[0].removeChild(balls[0].firstElementChild);
    balls[0].removeChild(balls[0].firstElementChild);
    balls[0].removeChild(balls[0].firstElementChild);
    balls[0].removeChild(balls[0].firstElementChild);
    balls[0].removeChild(balls[0].firstElementChild);
    balls[0].removeChild(balls[0].firstElementChild);
    
    balls = document.getElementById("balls");

    let aux = document.createElement("div");
    aux.className = "ball";
    balls.appendChild(aux);

    aux = document.createElement("div");
    aux.className = "ball";
    balls.appendChild(aux);

    aux = document.createElement("div");
    aux.className = "ball";
    balls.appendChild(aux);

    aux = document.createElement("div");
    aux.className = "ball";
    balls.appendChild(aux);

    aux = document.createElement("div");
    aux.className = "ball";
    balls.appendChild(aux);

    aux = document.createElement("div");
    aux.className = "ball";
    balls.appendChild(aux);

    document.getElementById("answer").innerText = "Escolha uma cor";
    let colorrandom = "("+parseInt(Math.random()*255)+", "+parseInt(Math.random()*255)+", "+parseInt(Math.random()*255)+")";
    document.getElementById("rgb-color").innerText = colorrandom;
    document.getElementById("rgb-color").style.backgroundColor = "rgb"+colorrandom;

    balls = document.getElementsByClassName("ball");
    let random = parseInt(Math.random()*6);
    for (let i = 0;i < balls.length;i++) {
        if (i != random) {
            balls[i].style.backgroundColor = "rgb("+parseInt(Math.random()*255)+", "+parseInt(Math.random()*255)+", "+parseInt(Math.random()*255)+")";
        } else {
            balls[i].style.backgroundColor = "rgb"+colorrandom;
        }
        balls[i].addEventListener("click", function(event) {
            if (event.target == balls[random]) {
                document.getElementById("answer").innerText = "Acertou!";
                points += 3;
                score.innerText = "Placar: " + points;
            } else {
                document.getElementById("answer").innerText = "Errou! Tente novamente!";
            }
        });
    }

}