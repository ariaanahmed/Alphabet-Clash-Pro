// keyboard events

function handleKeyboardKeyupEvent(event) {
    const playerKeyPressed = event.key;

    if(playerKeyPressed === 'Escape') {
        gameOver();
    }

    // expected key pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const crrentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = crrentAlphabet.toLowerCase();

    if(playerKeyPressed === expectedAlphabet) {
        console.log('you have correctly pressed', expectedAlphabet);
        // update score
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore)
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('you missed');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if(updatedLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKeyupEvent)



function continueGame() {
    const alphabet = getRandomAlphabet();
    
    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet)
}

function play() {
    // hide and show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('playground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}


function gameOver() {
    hideElementById('playground');
    showElementById('final-score');
    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}