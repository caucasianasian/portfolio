var original = document.getElementById("original");
var percent = document.getElementById("percent");
var calculate = document.getElementById("calculate");
var output = document.getElementById("output");

calculate.addEventListener("click", function(){
  output.textContent = original.value - (original.value * ("0."+percent.value));
});

