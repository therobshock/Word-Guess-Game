var wordChoices = [
  "mommy", 
  "daddy", 
  "car-games", 
  "smoke-detector", 
  "exhaust-pipe", 
  "phone-jack", 
  "kerchew", 
  "lightning-mcqueen"
];
var index = 0;
var wordPick = "";
var wordLetters = [];
var numBlanks = 0;
var blanksOrLetters = [];
var wrongGuesses = [];

var wins = 0;
var losses = 0;
var guesses = 9;

var instructDisplay = document.getElementById("instructions");
var directionsDisplay = document.getElementById("directions");
var wordDisplay = document.getElementById("word");
var guessesDisplay = document.getElementById("guesses");
var wrongLettersDisplay = document.getElementById("wrong");
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");

function detectmob() {
  if(window.innerWidth <= 800 && window.innerHeight <= 900) {
    return true;
  } else {
    return false;
  }
}

var isMobile = detectmob();

if (isMobile) {
  alert("Sorry, without a physical keyboard you're gonna have a bad time...");
}

function wordSelector() {  
    if (index < wordChoices.length) {
      var word = wordChoices[index];
      index++;
      return word;
    } 
}

function gameStart() {
  guesses = 9;

  if (index < wordChoices.length) {
    wordPick = wordSelector();
  } else {
    return gameOver();
  }
  wordLetters = wordPick.split("");
  numBlanks = wordLetters.length;

  console.log(wordPick);

  blanksOrLetters = [];
  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    if (wordPick[i] === "-") {
      blanksOrLetters.push("-");
    }
    else {
      blanksOrLetters.push("_");
    }
  }

  console.log(blanksOrLetters);

  guessesDisplay.innerHTML = guesses;
  wordDisplay.innerHTML = blanksOrLetters.join(" ");
  wrongLettersDisplay.innerHTML = wrongGuesses.join(" ");
  winsDisplay.innerHTML = "Wins: " + wins;
  lossesDisplay.innerHTML = "Losses: " + losses;

  gamePlay();
}

function letterGuess(letter) {
  
  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (wordPick[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (wordPick[j] === letter) {
        blanksOrLetters[j] = letter;
      }
    }
    console.log(blanksOrLetters);
  }
  else {
    wrongGuesses.push(letter);
    guesses--;
    console.log(wrongGuesses);
  }
};

function endRound() {
  console.log("Wins: " + wins + " | Losses: " + losses + " | Guesses: " + guesses);

  guessesDisplay.innerHTML = guesses;
  wordDisplay.innerHTML = blanksOrLetters.join(" ");
  wrongLettersDisplay.innerHTML = wrongGuesses.join(" ");

  if (wordLetters.toString() === blanksOrLetters.toString()) {
    wins++;
    instructDisplay.innerHTML = "You Win!";
    wordDisplay.innerHTML = blanksOrLetters.join(" ");
    winsDisplay.innerHTML = "Wins: " + wins;
    keyToContinue();
  }
  else if (guesses === 0) {
    losses++;
    instructDisplay.innerHTML = "Try Again";
    lossesDisplay.innerHTML = "Losses: " + losses;
    keyToContinue();
  }
 
};

function gamePlay() {
  instructDisplay.innerHTML = "Guess the word!";
  directionsDisplay.innerHTML = "Press a computer button (key) to guess letter";
  
  document.onkeyup = function(event) {
        
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      var userGuess = event.key.toLowerCase();
      letterGuess(userGuess);
      endRound();
    }
  };
};

function keyToContinue() {
  directionsDisplay.innerHTML = "Press any computer button (key) to continue...";
  
  document.onkeyup = function(event) {
    gameStart();
  }
};

function gameOver() {
  instructDisplay.innerHTML = "Game Over!";
  directionsDisplay.innerHTML = "Try again? Press Y or N";
  document.onkeyup = function(event) {
    userKey = event.key.toLowerCase();
    if (userKey === "y") {
      wins = 0;
      losses = 0;
      index = 0;
      instructDisplay.innerHTML = "Let's Do It!";
      keyToContinue();
    }
    else if (userKey === "n") {
      directionsDisplay.innerHTML = "Thanks for playing!";
    }
  }
};

keyToContinue();