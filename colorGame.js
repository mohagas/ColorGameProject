var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
		//pick a new random color
		pickedColor = pickColor();
		//change the color display
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "NEW COLORS";
		messageDisplay.textContent = "";
		//change the color of the square 
		for (var i = 0; i < squares.length; i++) {
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";							}
		}
		h1.style.backgroundColor = "steelblue";
}

	resetButton.addEventListener("click", function(){
		reset();

	})

	colorDisplay.textContent = pickedColor;		

	for (var i = 0; i < squares.length; i++) {
		//setting initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//setting eventListeners on square
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//check if the pickedColor is same as correctColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "CORRECT!"; 
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "PLAY AGAIN!";
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "TRY AGAIN!"; 
			}
		});

	};

function changeColors(color){

	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match correct color
		squares[i].style.backgroundColor = color;
		};
	};

function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	};

function generateRandomColors(num){
	// create array
	var arr = [];
	// add random colors to array (push)
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	// return array 
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256); 

	// pick a "green" from 0 - 255

	var g = Math.floor(Math.random() * 256);

	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}