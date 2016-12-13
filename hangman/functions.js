var alphabet        = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    words           = ["acres", "adult", "advice", "arrangement", "attempt", "birthday", "coffee", "toothbrush", "exist", "nuts", "palace", "cookies", "damage", "depth", "solar", "simplest", "shallow", "remarkable", "discussion", "donkey", "canine", "poetry", "garage"],
    selectedWord    = "",
    score           = 0,
    requiredScore   = 0,
    triesLeft       = 6,
    crossCheck      = 0,
    randomWord      = document.getElementById("randomWord"),
    start           = document.getElementById("start"),
    letterGuess     = document.getElementById("letterGuess"),
    body            = document.getElementsByTagName("Body"),
    lettersUsed     = document.getElementById("lettersUsed"),
    chancesLeft     = document.getElementById("chancesLeft"),
    hangmanFull     = document.getElementById("midParts"),
    availableLetters;

chancesLeft.textContent = triesLeft;

start.addEventListener("click", function(){
    this.textContent = "New Game";
    if(triesLeft <= 5){
        head.classList.toggle("headWrong");
    }
    if(triesLeft <= 4){
        mansBody.classList.toggle("wrong");
    }
    if(triesLeft <= 3){
        leftArm.classList.toggle("wrong");
    }
    if(triesLeft <= 2){
        rightArm.classList.toggle("wrong");
    }
    if(triesLeft <= 1){
        leftLeg.classList.toggle("wrong");
    }
    if(triesLeft === 0){
        rightLeg.classList.toggle("wrong");
    }
    triesLeft = 6;
    chancesLeft.textContent = triesLeft;
    requiredScore = 0;
    score = 0;
    randomWord.innerHTML = "";
    var tempRandomWord = words[Math.floor(Math.random()*words.length)].toUpperCase();
    selectedWord = tempRandomWord;
    var tempArray = [];
    for(var i=0; i<tempRandomWord.length; i++){
        requiredScore++;
        tempArray.push('<h1 id="square'+i+'" class="square"></h1>')
    }
    var bob = tempArray.toString().replace(/[,]/g, "");
    randomWord.innerHTML = bob;
    var letterArray = [];
    for(var i=0; i<alphabet.length; i++){
        letterArray.push('<div class="alphabet" id="'+alphabet[i]+'">'+alphabet[i].toUpperCase()+'</div>');
    }
    var blah = letterArray.toString().replace(/[,]/g, "");
    lettersUsed.innerHTML = blah;
});

function letterGuessFunc(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode =='13' && triesLeft > 0){
        var tempLetter = document.getElementById(letterGuess.value);
        tempLetter.textContent = " ";
        for(var i=0; i<selectedWord.length; i++){
            if(letterGuess.value.toUpperCase() === selectedWord[i]){
                score++;
                crossCheck++;
                console.log("users Score: "+score)
                console.log("score Needed: "+requiredScore)
                document.getElementById("square"+i).textContent = selectedWord[i].toUpperCase();
            }
        }
        if(crossCheck === 0){
            triesLeft--;
            if(triesLeft === 5){
                head.classList.toggle("headWrong");
            }
            if(triesLeft === 4){
                mansBody.classList.toggle("wrong");
            }
            if(triesLeft === 3){
                leftArm.classList.toggle("wrong");
            }
            if(triesLeft === 2){
                rightArm.classList.toggle("wrong");
            }
            if(triesLeft === 1){
                leftLeg.classList.toggle("wrong");
            }
            if(triesLeft === 0){
            rightLeg.classList.toggle("wrong");
            }
            
            chancesLeft.textContent = triesLeft;
        }
        crossCheck = 0;
        letterGuess.value = "";
        if(score === requiredScore){
           alert("winner winner!");
        }
        if(triesLeft === 0){
            alert("You Lose, the word was " + selectedWord);
        }
    }
}

function resetMan(){
    hangmanFull.removeChild(hangmanFull.childNodes[0])
    hangmanFull.insertAdjacentHTML('<div class="leftBar"></div><div class="rightBar"></div>')
}