var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector('#random');

body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";


css.textContent = body.style.background;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomInt() {
	return Math.floor(Math.random() * Math.floor(255));
  }

function createRGBValues() {
	var rgbValue1 = 'rgb(' + getRandomInt() + ', ' + getRandomInt() + ', ' + getRandomInt() + ')';
	var rgbValue2 = 'rgb(' + getRandomInt() + ', ' + getRandomInt() + ', ' + getRandomInt() + ')';

	return rgbValue1 + ', ' + rgbValue2;
}

function randomGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ createRGBValues();

	css.textContent = body.style.background + ";";
}

random.addEventListener('click', randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);