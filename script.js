const circles = document.querySelectorAll('.ball');

function button (event) {
  if(event.target.style.backgroundColor==document.querySelector('#rgb-color').innerText){
    document.querySelector('#answer').innerText = "Acertou!"
  }
  else {
    document.querySelector('#answer').innerText = 'Errou! Tente novamente!'
  }
}

function roll (elem){
  for (let i = 0; i < elem.length; i += 1) {
    elem[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    elem[i].addEventListener('click',button)
  }
  document.querySelector('#rgb-color').innerText = elem[2].style.backgroundColor
  document.querySelector('#answer').innerText = 'Escolha uma cor'
}
roll(circles);
