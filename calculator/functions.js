///////////////
//DOM VARS/////
///////////////
var  equationBTN = document.getElementsByClassName("equation"),
     numberBTN   = document.getElementsByClassName("number"),
     decimal     = document.getElementById("decimal"),
     clearBTN    = document.getElementById("CLR"),
     compute     = document.getElementById("compute"),
     output      = document.getElementById("output");
///////////////
//OTHER VARS///
///////////////
var fullStr = "",
    mathStr = "",
    numStr  = "";
//////////////////////////////
////because i'm dumb and 
////don't know what else to do variables
//////////////////////////////
var needCompute = 0; //check if there is already an equation that should be computed
var lastEq = 0; //check if last character was +, -, /, or *
var noDec = 0; //check if decimal exists
var pressedEquals = 0; // if already pressed equal, pressing num button will start new formula


//press numberBTN
for(var i=0; i<numberBTN.length; i++){
  numberBTN[i].addEventListener("click", function(){
    if(lastEq === 1){
      fullStr+= mathStr;
      lastEq = 0;
    }
    if(pressedEquals === 1){
      resetAll();
      pressedEquals = 0;
    }
    //put button text content into string and output
    //
    numStr += this.textContent;
    fullStr += this.textContent;
    output.textContent = numStr;
    console.log(fullStr);
    needCompute = 1;
  });
}

//press equationBTN
for(var i=0; i<equationBTN.length; i++){
  equationBTN[i].addEventListener("click", function(){
    //clear decimal and equals
    if(fullStr.length !== 0){
      noDec = 0;
      if(pressedEquals === 1){
        output.textContent = eval(fullStr);
        fullStr = eval(fullStr);
        }
      pressedEquals = 0;
      //
      //put button text content into string and output
      mathStr = this.textContent;
      output.textContent = mathStr;
      console.log(fullStr + mathStr);
      //clear numStr
      numStr = "";
      lastEq = 1;
    }
  });
}

//press decimalBTN
decimal.addEventListener("click", function(){
  //if decimal does not exist, continue.
  if(pressedEquals === 1){
      resetAll();
      pressedEquals = 0;
    }
    if(noDec === 0 && lastEq === 1){
      fullStr += mathStr;
      console.log(fullStr);
      mathStr = "";
    }
  if(noDec === 0){
    numStr += this.textContent;
    fullStr += this.textContent;
    output.textContent = numStr;
    noDec = 1;
  }
});

clearBTN.addEventListener("click", function(){
  needCompute = 0;
  lastEq = 0;
  noDec = 0;
  pressedEquals = 0;
  fullStr = "";
  mathStr = "";
  numStr = "";
  output.textContent = 0;
});

compute.addEventListener("click", function(){
  output.textContent = eval(fullStr);
  fullStr = eval(fullStr);
  console.log(fullStr);
  pressedEquals = 1;
});

function resetAll(){
  needCompute = 0;
  lastEq = 0;
  noDec = 0;
  pressedEquals = 0;
  fullStr = "";
  mathStr = "";
  numStr = "";
  output.textContent = fullStr;
}
