// REFERENCE THE VARIABLES ABOVE USING document.getVariableById SO THAT THEY DISPLAY ON THE UI
var directionsText = document.getElementById("directionsText");
var totalWins = document.getElementById("totalWins"); 
var currentWord = document.getElementById("currentWord"); 
var remainingGuesses = document.getElementById("guessCounter"); 
var wrongLetters = document.getElementById("usedLetters");
var spaces = document.getElementById("spaces");

// DEFINE WORD LIB - WHICH WORDS ARE INCLUDED, BASED ON THEME 
var wordLib = ["wednesday", "kalteen", "fetch", "gruel", "plastics", "toaster strudel", "pusher", "burn book", "cool mom", "mathlete"]; 

// (COMPLETE)VARIABLE TO TRACK THE HIDDEN WORD 
var secretWord = "";
var guessedWord = [ ];
var guessCounter = 0; 
var usedLetters = [];
var winCounter = 0; 


// (COMPLETE) CHOOSE A RANDOM WORD FROM THE LIB OF WORDS AND DISPLAY ON THE SCREEN WITH UNDERSCORES
window.onkeypress = function initializeGame (event) {
    
    // PRINTS GUESSES TO CONSOLE (AND EVENTUALLY TO SCREEN)
    

    console.log("guessCounter is" + guessCounter);

    if (secretWord === "") {
        // GENERATES SECRET WORD
        secretWord = wordLib[Math.floor(Math.random() * wordLib.length)];
        guessCounter = secretWord.length + 2;
        console.log (guessCounter);
        directionsText.innerHTML =(""); 
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
        //GENERATE GUESS COUNTER BASED ON THE LENGTH OF THE WORD - THIS WILL BE AN ARRAY 
       // DETERMINE NUMBER OF GUESSES 
       // POPULATE GUESS COUNTER ARRAY WITH GUESSES
        guessCounter--;
        // ASK TA WHEHN/WHY TO USE THIS. AND WHY IT IS INCLUDED IN THIS EXAMPLE
        console.log("guessCounter is" + guessCounter);  
        //LOGS STRING TO CONSOLE FOR CHECKING
        console.log (String.fromCharCode (event.charCode));
        // LOOP THROUGH THE CHARACTERS IN THE SECRET WORD STARTING AT INDEX 0 FOR THE LENGTH OF THE WORD
        // MISSED LETTERS UPDATE USED LETTER ARRAY 
        if (!secretWord.includes(String.fromCharCode (event.charCode))) {
            usedLetters.push(String.fromCharCode (event.charCode));
        }

        for (var i = 0; i < secretWord.length; i++) {
            // DISPLAYS LETTER IN SECRET WORD 
            if (secretWord[i] === String.fromCharCode (event.charCode)) {
                guessedWord[i] = String.fromCharCode (event.charCode);
            } 


            // NEED AN ELSE STATEMENT FOR WHEN THE LETTER DOES NOT MATCH 
            // DETERMINE LETTER DOES NOT MATCH ANY OF THE INDICES IN SECRET WORD 

            // DISPLAY LETTER IN USED LETTERS - THIS WILL BE AN EMPTY ARRAY THAT I FILL IN

            // IGNORE THE KEYSTROKE IF THE SELECTED LETTER WAS ALREADY USED IN THE SECRET WORD OR USED LETTER LIST - DO NOT DECREMENT GUESS COUNTER IN THIS CASE 

        }
        // WIN OR LOSE SCENARIOS (TWO SEPARATE FUNCTIONS)
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
                alert ("Sorry! You ran out of guesses. The secret word was " + secretWord); 
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
    

    //LOGS STRING TO CONSOLE FOR CHECKING
    // console.log (String.fromCharCode (event.charCode));


    // RESET GAME
    // CLEAR SECRET WORD ARRAY
    // CLEAR GUESS COUNTER ARRAY 
    // CLEAR USED LETTERS ARRAy
}