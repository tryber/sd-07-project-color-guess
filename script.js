function rgbGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function colorGenerator() {
  const balls = document.querySelector('.balls-container').children;
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = rgbGenerator();
  };
}

window.onload = colorGenerator;
