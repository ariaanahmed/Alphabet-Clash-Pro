function continueGame() {
    const alphabet = getRandomAlphabet();
    
    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    setBackgroundColorById(alphabet)
    
}

function play() {
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}