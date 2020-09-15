function randomColor (){
    const color = `rgb(${Math.ceil(Math.random()*255)} , ${Math.ceil(Math.random()*255)} , ${Math.ceil(Math.random()*255)})`;
    return color;
}
randomColor();

document.querySelectorAll('.ball').forEach((item) => {
    item.style.backgroundColor = randomColor();
})

// TODO: Criar função com if item backgroundcolor == p adiciona a classe resposta certa, depois criar outra função que pega a classe das bolas, se a classe for acertou imprimir a mensagem acertou e se errar a mensagem errou