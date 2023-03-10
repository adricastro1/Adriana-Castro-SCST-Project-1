/*----- constants -----*/
const word = 'comet'
const images = ["./imgs/alien0.png", "./imgs/alien1.png", "./imgs/alien2.png", "./imgs/alien3.png", "./imgs/alien4.png", "./imgs/alien5.png"
]

/*----- state variables -----*/
let guess;
let keyName;
let remainingLetters
let remainingTurns;
let lettersArray = [];
let usedLetters = [];


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
    correctLetter.innerText = "_  _  _  _  _  _"
    messageEl.innerText = "Don't let the spaceman get abducted!"
    usedLetters = [''];

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
        if (word[i] === guess && !usedLetters.includes(guess)) {
            lettersArray.splice(i, 1, guess)
            remainingLetters--;
        }
        correctLetter.innerText = `${lettersArray.join(' ')}`
    }
    usedLetters.push(guess)
    if (!word.includes(guess)) remainingTurns--;
    console.log(remainingLetters)
    render()
}

function renderWinner() {
    if (remainingLetters == 0) {
        messageEl.innerText = `YOU WIN!`
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
