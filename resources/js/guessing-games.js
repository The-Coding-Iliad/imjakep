const COLORS_ARRAY = [
    'blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
  COLORS_ARRAY[2] = 'silver';
  COLORS_ARRAY.sort();
  //alert(COLORS_ARRAY);

  function runGameColors() {
    let guess = '';
    let correct = false;
    let numTries = 0;

    let targetIndexA = Math.floor(Math.random() * COLORS_ARRAY.length);
    let target = COLORS_ARRAY[targetIndexA]
    alert('target = ' + target);
    console.log('target = ' + target);

    do {
      guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(' | ') + '\n\nWhat color am I thinking of?');
      numTries += 1;
      if (guess === null) {
        alert('The game was ended by you' + guess)
        return
      }
      correct = checkGuess(guess, target, correct)
    } while (!correct);
    alert('Congratulations! You have guessed the color in' + numTries + ' tries')
    document.body.style.background = guess;
  }
  function checkGuess(guess, target, correct) {

    const sorryMsg = 'Sorry your guess is incorrect.\n\n';
    const tryMsg = '\n\nPlease try again';
    if (!COLORS_ARRAY.includes(guess)) {
      alert('Sorry I do not recognize that color' + tryMsg);
    }
    else if (guess < target) {
      alert(sorryMsg + 'Hint your color is alphabetically lower than mine' + tryMsg);
    }
    else if (guess > target) {
      alert(sorryMsg + 'Hint your color is alphabetically higher than mine' + tryMsg);
    }
    else { correct = true; }
    return correct
  }

/* Number Guessing Game*/

function runGame() {

    //Convert string to number
    let guessString = '';
    // Store the guess as a variable
    let guessNumber = 0;
    //Holds Boolean Value to determine if guess is correct or not
    let correct = false;
    //Provides the number of guesses made
    let numTries = 0;

    //Generate a random number 1<>100 and store it for the game
    const target = Math.floor(Math.random() * 100) + 1;


    do {
//Prompts the user to provide first value
        guessString = prompt('I am thinking of a number between 1 to 100.\n\nWhat is the number?');
//converts string to number       
        guessNumber = +guessString;
//adds 1 to the variable everytime the question is asked
        numTries += 1;
//compares the value of the guess to the random number generated
        correct = checkGuess(guessNumber, target);
    } while (!correct);
    alert('You got it! the number was ' + target + '. \n\nIt took you ' + numTries + ' tries to guess correctly.');

}

function checkGuess(guessNumber, target) {
    //Default the value of correct to False
    let correct = false;
    //checks if the value is a number or not & if not alerts the user
    if (isNaN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
    }
//if it is a number, is it greater than 1 and less than 100, if not alert end user
        else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integer in between 1-100 range');
    }
    //check the guess number is greater or less than the target number
    else if (guessNumber > target) {
        alert('Your number is too large');
    }
    else if (guessNumber < target) {
        alert('Your number is too small');
    }
        else {
            correct = true;
    }
    return correct;
}

