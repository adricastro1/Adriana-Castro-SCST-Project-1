/*----- constants -----*/
const word = 'comet'

/*----- state variables -----*/
let guess;
let keyName;
let remainingLetters
let remainingTurns;
let lettersArray = [];


/*----- cached elements  -----*/
const messageEl = document.querySelector('#message');
const guessesEl = document.querySelector('#guesses')
const playAgainBtn = document.querySelector('button');
const correctLetter = document.querySelector('#letter-spaces');
const img = document.querySelector('img')

/*----- event listeners -----*/
document.body.addEventListener("keyup", renderGuess);

playAgainBtn.addEventListener('click', init)

/*----- functions -----*/
init();

function init() {
    remainingLetters = word.length;
    remainingTurns = 5;
    lettersArray = ['_ ', ' _ ', ' _ ', ' _ ', ' _',];
    correctLetter.innerText = "_ _ _ _ _ _"
    messageEl.innerText = "Don't let the spaceman get abducted!"

    render()
}

function render() {
    renderWinner();
    turnsLeft();
}

function renderGuess(evt) {
    const keyName = evt.key;
    let guess = keyName.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            lettersArray.splice(i, 1, guess)
            remainingLetters--;
        }
        correctLetter.innerText = `${lettersArray.join(' ')}`
    }
    if (!word.includes(guess)) remainingTurns--;
    render()
}

function renderWinner() {
    if (remainingLetters == 0) {
        messageEl.innerText = `YOU WON!`
    } else if (remainingTurns == 0 && remainingLetters >= 1) {
        messageEl.innerText = "YOU LOSE"
    }
}

function turnsLeft() {
    if (remainingTurns <= 6 && remainingTurns >= 0) {
        guessesEl.innerText = `You have ${remainingTurns} wrong guesses left`
        imgTurn = `./imgs/alien${remainingTurns}.png`
        img.setAttribute('src', imgTurn)
    }
}
