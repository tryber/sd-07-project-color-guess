window.onload = function (){
    //gerar cores aleatórias
    let lista= document.querySelectorAll(".ball");
    for (let index=0;index<lista.length;index+=1){
        let x = Math.floor(Math.random() *256);
        let y = Math.floor(Math.random() *256);
        let z = Math.floor(Math.random() *256);
        let color = "rgb("+x+", "+y+", "+z+")"
        lista[index].style.backgroundColor= color;    
    }
}
