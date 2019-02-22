
 result = function() {
     for (i = 0; i < word.length; i++) {
         //console.log(word[i]);
         var guess = document.createElement("span");
         guess.innerHTML= "_ ";
         wordHolder.appendChild(guess);
        }
    }
    
    wordBox = function(word) {
        for (z = 0; z < word.length; z++) {
        wordHolder = document.getElementById("hold");
        //guess = document.createElement("div");
        letters = document.createElement("span")
        wordHolder.appendChild(letters);
        //guess.appendChild(letters);
        letters.innerHTML= "_ ";
    }
    }
    
    wordChooser = function() {
        var wordChoices = ["sun", "moon", "tyr", "woden", "thor", "frigge", "saturn"];
        var word = "Press Key";
        var j = 0;
 
        
        document.onkeyup = function (event) {
            var userKey = event.key.toLowerCase();
  
            if (j < wordChoices.length) {
                word = wordChoices[j];
                console.log(word);
                

                j++;
            }
            else {
            }
        }
        
}

function letterSpaces() {
  var letterSpace = document.getElementById("hold");
  var wordHold = document.createElement("div");
  var letSpaces = document.createElement("span");
 letterSpace.appendChild(wordHold);
 wordHold.appendChild(letSpaces);
 letSpaces.innerHTML = "_ ";
  
  var j = 0;
  document.onkeyup = function(event) {
    var userKey = event.key.toLowerCase();
    if (j < wordChoices.length) {
      letterSpace.removeChild(wordHold);
      var word = wordChoices[j];
      for (i = 0; i < word.length; i++) {
        letterSpace = document.getElementById("hold");
        wordHold = document.createElement("div");
        letSpaces = document.createElement("span");
       letterSpace.appendChild(wordHold);
       wordHold.appendChild(letSpaces);
       letSpaces.innerHTML = "_ ";


      }
      j++;
    }

  }
  
}





resultdemo = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('div');
    //var word = "spider-man";


    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('span');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

//      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }


  var hangMan = function() {
      var word = "aethelflad";
      var wordField = "hello";
      var wordBoard = document.getElementById("hold");
      wordBoard.textContent = wordField;
      var i = 0;
      var gameStart = false;

      document.onkeyup = function(event) {
          var userKey = key.event.toLowerCase();

      }

  }