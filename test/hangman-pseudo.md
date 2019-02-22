** FRAME HTML THEN DO JS THEN CSS**
screen fades in
    maybe some sort of load delay or something

 as theme for The Masters of the Universe plays in the background
    how to play sounds?

brilliant rainbow colors flash on and off surrounding the the title of the game:
    "Liam's Famous Words"
        text with style
        something that can animate or toggle the colors

title is surrounded by medieval gothic fantasy stone framing
    definitely some kind of css

inside the framing under the title is displayed the text "Let's do this! Press any key to begin"
    js document.getElementById()

user presses a key and the text is replaced by instructions that say:

"Liam loves using his words! Find out what his most famous words are by guessing a letter
Press a key to guess a letter"

Under the text is displayed a number of spaces either lines or boxes

A word will be chosen either by random or by order whose letters fit in the corrisponding spaces

The number of spaces will have to match the number of letters and the letters will be in word order
    The computer will choose a word from an array then generate spans in the row where letters are to be guessed

when the user's key press matches a letter from the word the letter(s) will appear in the appropriate space(s)
    computer will compare letter key to letter in word
        if user guess === letter in word
            then populate the correct letter(s) in the correct space(s)

A numbered countdown will display the number of wrong guesses the user will have. Each wrong guess will tick the counter down by 1
            else guessCount = -1

A correct guess will place the appropriate letter(s) in the appropriate space(s)

If all letters are guessed a text will appear saying, "Good Job Rob!", and a point will be added to a score counter
    A picture and/or audio relating to word appears/sounds
    if wordGuessed = true
        Text will appear in gameInstructions: "Good Job, Rob! Press any key to continue."
        One point will be added to score - gameScore = +1
        
If guess counter runs out before all the letters are guessed text will say, "Try again..." and unguessed letters revealed

Game is over when last word in set is played
    If amount of times played is less than total word array
        continue to the next word
        
Game Over Event
Message displayed giving final score and shows a ranking according to score
    If score is high say something fun
    If score is medium say something funny
    If score is low say something nice

A click option to "play again?"