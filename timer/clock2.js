var sessionPlus = document.getElementById("sessionPlus"),
    sessionMinus = document.getElementById("sessionMinus"),
    //breakPlus   = document.getElementById("breakPlus"),
    //breakMinus = document.getElementById("breakMinus"),
    startClock = document.getElementById("startBTN"),
    //stopClock = document.getElementById("stopBTN"),
    sessionLength = document.getElementById("sessionLength"),
    domMinutes = document.getElementById("minutes"),
    domseconds = document.getElementById("seconds");
    //breakLength = document.getElementById("breakLength");

var stop = true;
var sessionCount = 25;
var breakCount = 5;
var endDate;

sessionPlus.addEventListener("click", function(){
	sessionCount += 1;
	sessionLength.innerHTML = sessionCount;
	minutes.innerHTML = sessionCount + ":00";
});

sessionMinus.addEventListener("click", function(){
	if(sessionCount >=2){
		sessionCount -= 1;
		sessionLength.innerHTML = sessionCount;
		minutes.innerHTML = sessionCount + ":00";
	}
});

/*breakPlus.addEventListener("click", function(){
	breakCount += 5;
	breakLength.innerHTML = breakCount;
});

breakMinus.addEventListener("click", function(){
	if(breakCount <= 10){
		breakCount -= 5;
		breakLength.innerHTML = breakCount;
	}
});
*/
startClock.addEventListener("click", function(){
	var calculatedSessionCount = sessionCount * 60000;
	var plannedEndDate = new Date();
	endDate = Date.parse(plannedEndDate)+calculatedSessionCount;
	if(stop === true){
		counter();
		}
	stop = false;
	this.innerHTML = "reset";
});
/*
stopClock.addEventListener("click", function(){
		stop = !stop;
		this.textContent = "unpause";
});
*/

function counter(){
	setInterval(function(){
		var startDate = Date.parse(new Date());
		var total = endDate - startDate;
		var seconds = Math.floor(total/1000)%60;
		var minutes = Math.floor((total/1000)/60)%60;
		if(stop === false){
			if(minutes < 10){
				minutes = "0" + minutes;
			}
			if(seconds < 10){
				seconds = "0" + seconds;
			}
			if(endDate >= startDate){
				domMinutes.innerHTML = minutes + ":" + seconds;
				//console.log(minutes + ":" + seconds);
			}
			if(endDate === startDate){
				timer();
			}
		}
	}, 1000);
}

function timer(){
	domMinutes.innerHTML = sessionCount + " minutes has elapsed";
	alert(sessionCount + " minutes has elapsed");
}