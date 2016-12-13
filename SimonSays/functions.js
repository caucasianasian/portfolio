var squares		 = document.querySelectorAll(".square");
var colors 		 = ["green", "red", "yellow", "blue"];
var usersArray 	 = [];
var simonsArray  = [];
var startButton  = document.querySelector("#start");
var clickCount 	 = 0;
var score 		 = document.querySelector("#score");
/////////////////////////////
//SETTING UP THE GAME BOARD//
/////////////////////////////
for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];
}
/////////////////////////
///SIMON PICKS A COLOR///
/////////////////////////
startButton.addEventListener("click", function(){
	simonsArray = [];
	simonsPickedColor();
	usersArray = [];
	clickCount = 0;
	score.textContent = 0;
});

function simonsPickedColor(){
	var simonsColor = Math.floor(Math.random()*4+1);
	if(simonsColor === 1){
		simonsArray.push("green");
	}
	if(simonsColor === 2){
		simonsArray.push("red");
	}
	if(simonsColor === 3){
		simonsArray.push("yellow");
	}
	if(simonsColor === 4){
		simonsArray.push("blue");
	}
	var test = simonsArray;
	for (var i = 1; i <= simonsArray.length; i++) {
		//console.log(test);
    (function(index) {
    	let n = i-1;
    	var tempSquare = document.getElementById(test[n]);
        setTimeout(function() { 
        	tempSquare.style.opacity = "0.5";
        	setTimeout(function(){
        		tempSquare.style.opacity = "1";
        	}, 250);
        }, i * 500);
    })(i*250);
}
	console.log(simonsArray);
	usersArray = [];
}

//////////////////////
//USER PICKS A COLOR//
//////////////////////
for(var i=0; i<squares.length;i++){
	squares[i].addEventListener("click", function(){
		usersArray.push(this.style.background);
		//change opacity on click
		var tempButton = this;
		tempButton.style.opacity = "0.5";
		setTimeout(function(){
			tempButton.style.opacity = "1";
		}, 250);
		//jesus that took fucking forever to figure out
		compare();	
	})
}
function compare(){
	for(var i=0; i<usersArray.length; i++){
		if(usersArray[i] !== simonsArray[i]){
			console.log("sorry, you lost");
			simonsArray = [];
			usersArray = [];
			clickCount = 0;
			score.textContent = clickCount;		}
	}
	if(usersArray.length === simonsArray.length){
		clickCount ++;
		score.textContent = clickCount;
		simonsPickedColor();
	}
}
