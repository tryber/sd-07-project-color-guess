function numberRGB() {
    const number = Math.floor(Math.random() * 255);
    return number;
  }

let rgbColor = document.querySelector('p');
rgbColor.textContent = `(${numberRGB()}, ${numberRGB()}, ${numberRGB()})`;
