/*----- constants -----*/
const word = 'comet'

/*----- state variables -----*/
let guessNum;
let guess;
let keyName;
let remainingLetters = word.length;
let remainingTurns = 6;
let lettersArray = ['_ ', ' _ ', ' _ ', ' _ ', ' _',];


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

// initialize function
function init() {
    console.log('starting game')
    keyName = 0;
    lettersArray = ['_ ', ' _ ', ' _ ', ' _ ', ' _',];
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
            remainingLetters--;
        } 
        else if {
            remainingTurns--;
        }
    }
    correctLetter.innerText = `${lettersArray.join('')}`
    console.log(lettersArray) 
    console.log(remainingLetters)
    render()
}


function renderMessage() {
    if (remainingLetters == 0) {
        messageEl.innerText = `YOU WON!`
    } else if (remainingLetters >= 1){
        messageEl.innerText = "" 
    } 
}

function turnsLeft() {
    guessesEl.innerText = `You have ${remainingTurns} turns left`
}