var original = document.getElementById("original"),
    percent = document.getElementById("percent"),
    calculate = document.getElementById("calculate"),
    output = document.getElementById("output");

calculate.addEventListener("click", function(){
  output.textContent = original.value - (original.value * ("0."+percent.value));
});

