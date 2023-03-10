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

    <div id="letter-spaces">
    <div id="0" class="letter"></div>
    <div id="1" class="letter"></div>
    <div id="2" class="letter"></div>
    <div id="3" class="letter"></div>
    <div id="4" class="letter"></div>
</div>

} else if ((word[i] !== guess) && (remainingLetters !== remainingLetters--) ) {
            remainingTurns--;
        }

        // const images = {
//     '6': "./imgs/alien5.png",
//     '5': "./imgs/alien4.png",
//     '4': "./imgs/alien3.png",
//     '3': "./imgs/alien2.png",
//     '2': "./imgs/alien1.png",
//     '1': "./imgs/alien0.png",
// }
