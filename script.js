function generateColor(number) {
    const red = Math.floor(Math.random() * number);
    const green = Math.floor(Math.random() * number);
    const blue = Math.floor(Math.random() * number);
    return `(${red}, ${green}, ${blue})`
}

let theMainColor = document.querySelector('#rgb-color');
theMainColor.innerText = generateColor(255);
