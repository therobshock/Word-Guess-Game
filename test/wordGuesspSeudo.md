Draft

div ids: 
    title
    instructions
    word
    score

variables:
    gameTitle = says what to put in .title
    gameInstructions = what to put in .instructions
    wordArray = words to be played
    gameWord = stores word being played from wordArray
    gameScore = 0 //* a counter that keeps number of correct guesses
    userKey = captures key press
    userGuess = records userKey string
    correctLetter = false //* for determining a correct guess
    wordGuess = number of letter guesses for each word

    in .title
        gameTitle = a stylized title

    in .instructions
        gameInstructions = Text saying: "Let's do this! Press any key to begin"
    
    in .word
        some placeholder
    
    in .score
        some text that says "Total score "+ gameScore " out of " wordArray.length

on userKey
    begins loop through wordArray
        .instructions
            gameInstructions = text saying instructions to play the game

        in .word
            a row of lines or boxes as many as letters in word from wordArray

        .score
            add text above previous text that says: "Tries remaining: " + wordGuess


        next userKey
            userKey = userGuess
            correctLetter = false
            wordGuess = #
            wordLetter = letters from current word
            if (userGuess === wordLetter)
                correctLetter = true
            
            if (correctLetter)

                in .instructions
                    add text affirming choice
                
                in .word
                    populate the correct letter(s) in the appropriate space(s)

            if all letters guessed
                    gameScore++

                   .instructions
                       text affirming win
                        
            
            wordGuess -1

            if (wordGuess === 0)
                .instructions
                    text affirming loss
                
                .word
                    populate all spaces with all letters of wordLetter


if (gameScore > something)
    .instructions
        fun message

    .word
        populate spaces with letters for "good job!"
    
if (gameScore is between this and that)
    .instructions
        funny message
    
    .word
        populate spaces with letters for "not bad"
    
if (gameScore < something)
    .instructions
        nice message

    .word
        populate spaces with letters for "try again?"

.score
    text: "Final score: " + gameScore
    text: "Play again? Press Y or N

    userKey = playAgain
    gameOver = false
    if (playAgain = "n")
        gameOver = true
    
    if (gameOver)
        .instructions
            text: "Thanks for playing"

reset to beginning




            


        






        

in .score