
var wordChoices = ["sun", "moon", "tyr", "woden", "thor", "frigge", "saturn"];
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
var wordDisplay = document.getElementById("word");
var guessesDisplay = document.getElementById("guesses");
var wrongLettersDisplay = document.getElementById("wrong");
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");

function wordSelector() {  
    if (index < wordChoices.length) {
      var word = wordChoices[index];
      index++;
      return word;
    } else {
      var word = "";
      index = 0;
      return word;
    }
}

function gameStart() {
  guesses = 9;
  wordPick = wordSelector();
  wordLetters = wordPick.split("");
  numBlanks = wordLetters.length;

  console.log(wordPick);

  blanksOrLetters = [];
  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksOrLetters.push("_");
  }

  console.log(blanksOrLetters);

  guessesDisplay.innerHTML = guesses;
  wordDisplay.innerHTML = blanksOrLetters.join(" ");
  wrongLettersDisplay.innerHTML = wrongGuesses.join(" ");
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
    winsDisplay.innerHTML = "Wins: " + wins;
    gameStart();
  }
  else if (guesses === 0) {
    losses++;
    instructDisplay.innerHTML = "Try Again";
    lossesDisplay.innerHTML = "Losses" + losses;
    gameStart();
  }
};

gameStart();

document.onkeyup = function(event) {
  
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    var userGuess = event.key.toLowerCase();
    letterGuess(userGuess);
    endRound();
  }
};