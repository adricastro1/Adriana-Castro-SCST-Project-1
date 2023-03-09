/*----- constants -----*/
const word = 'comet'
const images = {
    '6': "./imgs/alien5.png",
    '5': "./imgs/alien4.png",
    '4': "./imgs/alien3.png",
    '3': "./imgs/alien2.png",
    '2': "./imgs/alien1.png",
    '1': "./imgs/alien0.png",
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
const img = document.querySelector('img')
console.log(img)

/*----- event listeners -----*/
// keyboard event listener
document.body.addEventListener("keyup", renderGuess);

// play again button
playAgainBtn.addEventListener('click', init)

/*----- functions -----*/
init();

function init() {
    remainingLetters = word.length;
    remainingTurns = 5;
    lettersArray= ['_ ', ' _ ', ' _ ', ' _ ', ' _',];
    correctLetter.innerText = "_ _ _ _ _ _"
    messageEl.innerText = "Don't let the spaceman get taken!"

    render()
}

function render() {
    renderWinner();
    turnsLeft();
    renderImg();
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
    if (remainingTurns <= 6 && remainingTurns >= 0) {
        guessesEl.innerText = `You have ${remainingTurns} wrong guesses left`
    }
}

function renderImg() {
    imgTurn = `./imgs/alien${remainingTurns}.png`
    img.setAttribute('src', imgTurn)
}