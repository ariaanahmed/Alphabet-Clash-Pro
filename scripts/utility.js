function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// set background highlight
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// random alphabet
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // generate random index
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}