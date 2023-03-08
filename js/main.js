/*----- constants -----*/
const word = 'comet'

/*----- state variables -----*/
let guessNum;
let guess;
let keyName;
var remainingLetters = word.length;

/*----- cached elements  -----*/
const messageEl = document.querySelector('#message');
const playAgainBtn = document.querySelector('button');
const correctLetter = document.querySelector('#letter-spaces');

/*----- event listeners -----*/
// keyboard event listener
document.body.addEventListener("keyup", keyLetter);

// play again button
playAgainBtn.addEventListener('click', init)

/*----- functions -----*/
init();

// initialize function
function init() {
    keyName = 0;
    guessNum = 0;
    render()
}

function render() {
    renderMessage();
}

function keyLetter(evt) {
    const keyName = evt.key;
    let guess = keyName
    let lettersArray = [null, null, null, null, null,];
    console.log(guess)
    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            lettersArray[i] = guess;
            remainingLetters--;
        }
    }
    console.log(lettersArray)
}




function renderMessage() {
    // if full word is guessed before 8 guesses render 'you win!'
    // if != full word and 8 max guesses render "try again!"
    if (keyLetter) {
        messageEl.innerText = "keep trying!"
    }
}