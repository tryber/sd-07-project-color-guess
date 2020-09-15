function randomColor (){
    const color = `rgb(${Math.ceil(Math.random()*255)} , ${Math.ceil(Math.random()*255)} , ${Math.ceil(Math.random()*255)})`;
    return color;
}
randomColor();

document.querySelectorAll('.ball').forEach((item) => {
    item.style.backgroundColor = randomColor();
})