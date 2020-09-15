window.onload = randomColors

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
    createEvents();
}

//Cor a ser escolhida
function oneColor(){
    let cor = Math.floor(Math.random() *7);
    let lista= document.querySelectorAll(".ball");
    let escolhida = lista[cor].style.backgroundColor;
    document.querySelector("#rgb-color").innerHTML = escolhida;
    console.log (cor)
}
// Create Events

function createEvents(){

    let lista= document.querySelectorAll(".ball");
    for (let index=0;index<lista.length;index+=1){
        lista[index].addEventListener("click",function(){
            if (lista[index].style.backgroundColor == document.querySelector("#rgb-color").innerHTML){
                document.querySelector("#answer").innerHTML = "Acertou!";
            }else {
                document.querySelector("#answer").innerHTML = "Errou! Tente novamente!";
            }
        })
    }
}