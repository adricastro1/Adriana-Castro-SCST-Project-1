/*----- constants -----*/
const word = 'comet'

/*----- state variables -----*/
let guessNum;
let guess;
let keyName;
// let lettersArray = [];
let remainingLetters = word.length;
let lettersArray = [null, null, null, null, null,];
/*----- cached elements  -----*/
const messageEl = document.querySelector('#message');
const playAgainBtn = document.querySelector('button');
const correctLetter = document.querySelector('#letter-spaces');

/*----- event listeners -----*/
// keyboard event listener
document.body.addEventListener("keyup", renderGuess);

// play again button
playAgainBtn.addEventListener('click', init)

/*----- functions -----*/
init();

// initialize function
function init() {
    keyName = 0;
    lettersArray = [null];
    render()
}

function render() {
    renderMessage();
}

function renderGuess(evt) {
    const keyName = evt.key;
    let guess = keyName
    console.log(guess)
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            lettersArray.splice(i, 1, guess)
        }
    }
    correctLetter.innerText = `${lettersArray.join('')}`
    console.log(lettersArray) 
    render()
}


function renderMessage() {
    // if full word is guessed before 8 guesses render 'you win!'
    // if != full word and 8 max guesses render "try again!"
    if (renderGuess) {
        messageEl.innerText = "keep trying!"
    }
}