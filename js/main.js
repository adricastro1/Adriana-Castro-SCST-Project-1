/*----- constants -----*/
const wordChoices = {
    comet: ['c', 'o', 'm', 'e', 't'],
    orbit: ['o', 'r', 'b', 'i', 't'],
    pluto: ['p', 'l', 'u', 't', 'o'],
};


/*----- state variables -----*/
let currentWord;
let guessNum;
let letterGuess;
/*----- cached elements  -----*/
const messageEl = document.querySelector('#message');
const playAgainBtn = document.querySelector('button');
const correctLetter = document.querySelector('#letter-spaces');

/*----- event listeners -----*/
// keyboard event listener

// play again button

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
    // renderMessage();
}

function renderGame() {
    // pick random word from wordChoices 
    const currentWord = chooseWord()
    const letters = currentWord.split('')
    console.log(letters)
}

function chooseWord() {
    const options = ['comet', 'orbit', 'pluto']
    const randomWord = Math.floor(Math.random() * options.length)
    return options[randomWord]
}

function renderWord(){

}

// function for amount of guesses left?

// function renderMessage() {
    // if full word is guessed before 8 guesses render 'you win!'
    // if != full word and 8 max guesses render "try again!"
// }