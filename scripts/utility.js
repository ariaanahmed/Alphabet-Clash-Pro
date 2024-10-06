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

// remove background highlight
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// get text element value by id
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// set text element value by id
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById (elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// random alphabet
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25; // generate random index
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}