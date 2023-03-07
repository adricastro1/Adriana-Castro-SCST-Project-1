/*----- constants -----*/
const wordChoices = {
    comet: [c, o, m, e, t],
    orbit: [o, r, b, i, t],
    pluto: [p, l, u, t, o],
}

// alphabet as buttons?

/*----- state variables -----*/
let currentWord;
let guessNum;
let letterGuess;

/*----- cached elements  -----*/
const messageEl = document.querySelector('#message');
const playAgainBtn = document.querySelector('button');
const correctLetter = document.querySelector('#word-spaces');

/*----- event listeners -----*/
// keyboard event listener

// play again button

/*----- functions -----*/
init()

// initialize function
function init() {
    render()
}

function render() {
    renderGame();
    renderMessage();
}

function renderGame() {
    // pick random word from wordChoices 
    // 
}

// function for amount of guesses left?

function renderMessage() {
    // if full word is guessed before 8 guesses render 'you win!'
    // if != full word and 8 max guesses render "try again!"
}