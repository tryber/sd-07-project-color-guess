const rgbColorText = document.getElementById('rgb-color');

window.onload = functionInit;

// function that run after page on load
function functionInit() {
	// generate color rgb
	rgbColorText.innerText = generateRandomRGB();
}

// function to generate random color RGB
function generateRandomRGB() {
	// generate random numbers [1]
	const numberR = Math.ceil(Math.random() * 255);
	const numberG = Math.ceil(Math.random() * 255);
	const numberB = Math.ceil(Math.random() * 255);
	// build the result text
	const resultRGB = `(${numberR}, ${numberG}, ${numberB})`;
	// return the result
	return resultRGB;
}
