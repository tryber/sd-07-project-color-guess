const rgbColorText = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');
const ballList = document.querySelectorAll('.ball');
const buttonReset = document.getElementById('reset-game');
// set up game messages
const msgList = { 
	begin: 'Escolha uma cor',
	win: 'Acertou!', 
	loose: 'Errou! Tente novamente!'
 };

// assign function initGame to onload
window.onload = initGame;

// function that run after page on load
function initGame() {
	// generate color rgb
	rgbColorText.innerText = generateRandomRGB();
	
	// set up begin msg	
	answerText.innerText = msgList.begin;

	// fill ball with a random color
	fillBalls();
}


// function to generate random color RGB
function generateRandomRGB() {
	// generate random numbers [1]
	const numberR = Math.floor(Math.random() * 256);
	const numberG = Math.floor(Math.random() * 256);
	const numberB = Math.floor(Math.random() * 256);
	// build the result text
	const resultRGB = `(${numberR}, ${numberG}, ${numberB})`;
	// return the result
	return resultRGB;
}

// function fill balls with random color
function fillBalls() {
	// for each ball
	for (let index = 0; index < ballList.length; index += 1) {
		ballList[index].style.backgroundColor = 'rgb' + generateRandomRGB();
	}
	// random choose one, and put the text color [0-5]
	const randomBall = Math.floor(Math.random() * 6);
	ballList[randomBall].style.backgroundColor = 'rgb' + rgbColorText.innerText;
	// log
	console.log(randomBall)
	console.log(ballList[randomBall].style.backgroundColor)
}

// function hit the color ball
function hit(event) {
	// Get the ball that throw the event
	const ballClick = event.target;
	console.log(ballClick.style.backgroundColor,' == ','rgb' + rgbColorText.innerText);
	// Compare the color ballClick with text
	if (ballClick.style.backgroundColor == 'rgb' + rgbColorText.innerText) {
		// Show the win message
		answerText.innerText = msgList.win;
	} else {
		// Show the loose message
		answerText.innerText = msgList.loose;
	}
}

// Assign click button to function initGame
buttonReset.addEventListener('click', initGame);

// Assign hit function to all balls
for (let index = 0; index < ballList.length; index += 1) {
	ballList[index].addEventListener('click', hit);
}
