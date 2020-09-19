const x = Math.floor(Math.random() * 256);
const y = Math.floor(Math.random() * 256);
const z = Math.floor(Math.random() * 256);
const rgbGenerator = `RGB (${x}, ${y}, ${z})`;

const rgbText = document.querySelector('#rgb-color');
rgbText.innerHTML = rgbGenerator; 




