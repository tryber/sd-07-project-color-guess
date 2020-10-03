
const balls = document.getElementsByClassName('ball');

document.querySelectorAll('.ball').forEach((item) => {
  item.addEventListener('click', () => {
    alert('Clique');
  });
});

const randonRGB = () => {
  const corR = parseInt(((Math.random()) * 256), 0);
  const corG = parseInt(((Math.random()) * 256), 0);
  const corB = parseInt(((Math.random()) * 256), 0);
  return `rgb(${corR},${corG},${corB})`;
};

for (let index = 0; index < balls.length; index += 1) {
  balls[index].style.backgroundColor = randonRGB();
}
