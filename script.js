const textRgb = document.getElementById('rgb-color');
textRgb.innerText=setColor();

const containerBall = document.getElementById('container-balls');
const ball = containerBall.getElementsByTagName('figure');
for(let index = 0;index<6; index+=1){


  ball[index].style.background ='rgb'+ setColor();
  ball[index].addEventListener('click',function(){

    verifyColor(ball[index].style.background);
  })
}

const btn = document.getElementById('reset-game');
btn.addEventListener('click', function getColor(){

  const answer = document.getElementById('answer');
  answer.innerText='Escolha uma cor';

  for(let index = 0;index<6; index+=1){


    ball[index].style.background ='rgb'+ setColor();
    ball[index].addEventListener('click',function(){


    })

  textRgb.innerText=setColor();
  setColorRight();


}
})

function setColor(){
  let colors = ['(0, 0, 0)','(106, 90, 205)','(0, 255, 255)','(47, 79, 79)','(189, 83, 107)'];
  const min = Math.ceil(0);
  const max= Math.floor(4);

  let index = Math.floor(Math.random() * (max - min + 1)) + min;

  return colors[index];

}



const answer = document.getElementById('answer');
answer.innerText='Escolha uma cor';
function verifyColor(color){

  alert(color);

let colorTextRgb=textRgb.innerText;
colorTextRgb='rgb'+colorTextRgb;

  alert(colorTextRgb);
  if(colorTextRgb===color){

    answer.innerText='Acertou!';

  }else if(textRgb.innerText!==color){

    answer.innerText='Errou! Tente novamente!';
  }

}

function setColorRight(){

  const min = Math.ceil(0);
  const max= Math.floor(5);

  let index = Math.floor(Math.random() * (max - min + 1)) + min;
  ball[index].style.background ='rgb'+textRgb.innerText;
}

setColorRight();
