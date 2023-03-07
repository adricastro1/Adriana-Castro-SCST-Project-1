function renderGame(evt) {
    const currentWord = chooseWord()
    const lettersArray = currentWord.split('')
    console.log(lettersArray)
    lettersArray.forEach(function (letter, idx) {
        const letterId = `${idx}`
        const letterEl = document.getElementById(letterId)
        letterEl.innerText = [letter[0]]
        console.log(letterId)
    })

}

// function chooseWord() {
//     const options = ['comet', 'orbit', 'pluto']
//     const randomWord = Math.floor(Math.random() * options.length)
//     return options[randomWord]
// }