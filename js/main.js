/*----- constants -----*/
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

/*----- state variables -----*/
let currentWord;
let guessNum;
let letterGuess;
let keyName;

/*----- cached elements  -----*/
const messageEl = document.querySelector('#message');
const playAgainBtn = document.querySelector('button');
const correctLetter = document.querySelector('#letter-spaces>div');

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
    currentWord = null;
    guessNum = 0;
    render()
}

function render() {
    renderGame();
    renderMessage();
    // renderWord();
}

function renderGame(evt) {
    // pick random word from wordChoices 
    const currentWord = chooseWord()
    const lettersArray = currentWord.split('')
    console.log(lettersArray)
    lettersArray.forEach(function (letter, idx) {
        const letterId = `${idx}`
        const letterEl = document.getElementById(letterId)
        letterEl.innerText = [letter]
        console.log(letterId)
    })

}


function chooseWord() {
    const options = ['comet', 'orbit', 'pluto']
    const randomWord = Math.floor(Math.random() * options.length)
    return options[randomWord]
}

function keyLetter(evt) {
    const keyName = evt.key;
    let guess = keyName

}

function renderWord() {

}

// function for amount of guesses left?

function renderMessage() {
    // if full word is guessed before 8 guesses render 'you win!'
    // if != full word and 8 max guesses render "try again!"
    if (keyLetter) {
        messageEl.innerText = "keep trying!"
    }
}