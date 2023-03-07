/*----- constants -----*/
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

const currentWord = 'comet'
/*----- state variables -----*/
// let currentWord;
let guessNum;
let letterGuess;
let keyName;

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
init()

// initialize function
function init() {
    letterSpaces = [null, null, null, null, null];
    guessNum = 0;
    render()
}

function render() {
    renderGame();
    renderMessage();
}

function renderGame() {


}


function keyLetter(evt) {
    const keyName = evt.key;
    let guess = keyName
    console.log(guess)
    console.log(currentWord)
    if(currentWord.includes(guess)){
        console.log('correct!')
        correctLetter.innerText=`${guess}`
    }
}



function renderMessage() {
    // if full word is guessed before 8 guesses render 'you win!'
    // if != full word and 8 max guesses render "try again!"
    if (keyLetter) {
        messageEl.innerText = "keep trying!"
    }
}