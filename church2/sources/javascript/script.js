// DOM VARIABLES
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");


function everything(){
	var now = new Date();
	var currentYear = now.getYear() + 2000;
	var currentDate = now.getDate();
	var currentDayofWeek = now.getDay();

	var nextService = new Date();
	nextService.setDate(currentDate - currentDayofWeek +7);
	nextService.setHours(14);
	nextService.setMinutes(0);
	nextService.setSeconds(0);

	var timeLeft = nextService - now;
	var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	var hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
	if(secondsLeft<10){
		secondsLeft = "0" + secondsLeft;
	};
	if(minutesLeft<10){
		minutesLeft = "0" + minutesLeft;
	};
	if(hoursLeft<10){
		hoursLeft = "0" + hoursLeft;
	};
	$("#days").text(daysLeft);
	$("#hours").text(hoursLeft);
	$("#minutes").text(minutesLeft);
	$("#seconds").text(secondsLeft);
}

window.setInterval(
	everything
	, 1000);


function initMap(){
	 var uluru = {lat: 37.549102, lng: 126.952744};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}