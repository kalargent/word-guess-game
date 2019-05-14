// REFERENCE THE VARIABLES ABOVE USING document.getVariableById SO THAT THEY DISPLAY ON THE UI
var directionsText = document.getElementById("directionsText");
var totalWins = document.getElementById("totalWins"); 
var currentWord = document.getElementById("currentWord"); 
var remainingGuesses = document.getElementById("guessCounter"); 
var wrongLetters = document.getElementById("usedLetters");
var spaces = document.getElementById("spaces");

// DEFINE WORD LIB - WHICH WORDS ARE INCLUDED, BASED ON THEME 
var wordLib = ["wednesday", "kalteen", "fetch", "gruel", "plastics", "toaster strudel", "pusher", "burn book", "cool mom", "mathlete"]; 

// VARIABLES 
var secretWord = "";
var guessedWord = [ ];
var guessCounter = 0; 
var usedLetters = [];
var winCounter = 0; 


// START GAME
window.onkeypress = function initializeGame (event) {

    console.log("guessCounter is" + guessCounter);


    if (secretWord === "") {
        // GENERATES SECRET WORD
        secretWord = wordLib[Math.floor(Math.random() * wordLib.length)];
        guessCounter = secretWord.length + 2;
        console.log (guessCounter);
        directionsText.style.display =("none"); 
        // PRINTS SECRET WORD TO CONSOLE
        console.log(secretWord);
        // CREATED GUESSED WORD VAR, AND GETS AN UNDERSCORE FOR EACH LETTER IN THE SECRET WORD
        for (var i = 0; i < secretWord.length; i++) {
            if (secretWord[i] == " ") {
                guessedWord.push("&nbsp;");    
            }
            else {
                guessedWord.push("_");
            }
        }
    }
    else {
       // DECREMENT GUESS CONTER IF THE CHOSEN LETTER DOES NOT EXISTS IN USED LETTERS AND/OR GUESSED WORD
       if (!usedLetters.includes(String.fromCharCode (event.charCode)) && (!guessedWord.includes(String.fromCharCode (event.charCode)))) { 
            guessCounter--;
       } 

        console.log("guessCounter is" + guessCounter);  
        //LOGS STRING TO CONSOLE FOR CHECKING
        console.log (String.fromCharCode (event.charCode));

        // CHECK IF THE SECRET WORD OR USED LETTERS CONTAINS THE LETTER 
        if (!secretWord.includes(String.fromCharCode (event.charCode)) && (!usedLetters.includes(String.fromCharCode (event.charCode)))) {
            usedLetters.push(String.fromCharCode (event.charCode));
        }

        for (var i = 0; i < secretWord.length; i++) {
            // DISPLAYS LETTER IN SECRET WORD 
            if (secretWord[i] === String.fromCharCode (event.charCode)) {
                guessedWord[i] = String.fromCharCode (event.charCode);
            } 
        }
        // WIN OR LOSE SCENARIOS 
        console.log (secretWord);
        console.log (guessedWord);
            // IF THE SECRET WORD IS FILLED IN COMPLETELY  
            if (!guessedWord.includes ("_")) {
                // DISPLAY AN ALERT AND WRITE TO CONSOLE
                alert ("You're right! The secret word was " + secretWord); 
                console.log ("they guessed right");
                // INCREMENT WIN COUNTER BY 1 AND LOG TO CONSOLE
                winCounter++;
                console.log ("total wins" + winCounter);
                usedLetters = [ ];
                secretWord = "";
                guessedWord = [ ];
                console.log (guessCounter, guessedWord, usedLetters, secretWord);   
                initializeGame();
            } 


            else if (guessCounter === 0) {
                alert  ("Sorry! You ran out of guesses. The secret word was " + secretWord); 
                console.log ("they ran out of turns");
                usedLetters = [];
                secretWord = "";
                guessedWord = []; 
                console.log (guessCounter, guessedWord, usedLetters, secretWord);
                initializeGame();
            }     
        

    }
    //JOINS THE UNDERSCORES FOR THE SECRET WORD WITH A SPACE IN BETWEEN
    currentWord.innerHTML = guessedWord.join(" "); 
    remainingGuesses.innerHTML=guessCounter; 
    wrongLetters.innerHTML=usedLetters;
    totalWins.innerHTML=winCounter;
    
}
