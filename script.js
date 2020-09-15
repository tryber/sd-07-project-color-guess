
let score=0;
window.onload = function(){

randomColors()
createEvents()

}
//Gerar cores aletórias
function randomColors(){

    let lista= document.querySelectorAll(".ball");
    for (let index=0;index<lista.length;index+=1){
        let x = Math.floor(Math.random() *256);
        let y = Math.floor(Math.random() *256);
        let z = Math.floor(Math.random() *256);
        let color = "rgb("+x+", "+y+", "+z+")"
        lista[index].style.backgroundColor= color;      
    }
    oneColor();
}

//Cor a ser escolhida
function oneColor(){
    let cor = Math.floor(Math.random() *6);
    console.log(cor)
    let lista= document.querySelectorAll(".ball");
    let escolhida = lista[cor].style.backgroundColor;
    document.querySelector("#rgb-color").innerHTML = escolhida;
}
// Create Events

function createEvents(){

    let lista= document.querySelectorAll(".ball");
    for (let index=0;index<lista.length;index+=1){
        lista[index].addEventListener("click",function(){
            if (lista[index].style.backgroundColor == document.querySelector("#rgb-color").innerHTML){
                document.querySelector("#answer").innerHTML = "Acertou!";
                
                score = score + 3;
                console.log("score é " + score);

                document.querySelector("#score").innerHTML = "Placar: "+score;
            }else {
                document.querySelector("#answer").innerHTML = "Errou! Tente novamente!";
            }
        })
    }
}
// Reiniciar jogo
let reset = document.querySelector("#reset-game");
reset.addEventListener("click", randomColors);
