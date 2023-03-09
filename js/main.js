/*----- constants -----*/
const word = 'comet'
const images = {
    a1: "./imgs/alien1.png",
    a2: "./imgs/alien2.png",
    a3: "./imgs/alien3.png",
    a4: "./imgs/alien4.png",
    a5: "./imgs/alien5.png",
    a6: "./imgs/alien6.png",
}

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

/*----- event listeners -----*/
// keyboard event listener
document.body.addEventListener("keyup", renderGuess);

// play again button
playAgainBtn.addEventListener('click', init)

/*----- functions -----*/
init();

function init() {
    remainingLetters = word.length;
    remainingTurns = 8;
    lettersArray= ['_ ', ' _ ', ' _ ', ' _ ', ' _',];
    correctLetter.innerText = "_ _ _ _ _ _"
    messageEl.innerText = "Don't let the spaceman get taken!"
    render()
}

function render() {
    renderWinner();
    turnsLeft();
}

function renderGuess(evt) {
    const keyName = evt.key;
    let guess = keyName.toLowerCase()
    console.log(guess)
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            lettersArray.splice(i, 1, guess)
            remainingLetters--;
        }
        correctLetter.innerText = `${lettersArray.join('')}`
    }
    if (!word.includes(guess)) remainingTurns--;
    render()
}

function renderWinner() {
    if (remainingLetters == 0 ) {
        messageEl.innerText = `YOU WON!`
    } else if (remainingTurns == 0 && remainingLetters >= 1) {
        messageEl.innerText = "YOU LOSE"
    }
}

function turnsLeft() {
    if (remainingTurns <= 8 && remainingTurns >= 0) {
        guessesEl.innerText = `You have ${remainingTurns} turns left`
    }
}
