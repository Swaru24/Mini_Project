// For Selecting DOM elements
const textInput = document.getElementById('textInput');
const vowelCountDisplay = document.getElementById('vowelCount');
const checkVowelsButton = document.getElementById('checkVowels');
const resetButton = document.getElementById('reset');

// Function to count vowels
function countVowels() {
    const text = textInput.value.toLowerCase();
    const vowels = text.match(/[aeiou]/g);
    const vowelCount = vowels ? vowels.length : 0;
    vowelCountDisplay.textContent = vowelCount;
}

// Function to reset textarea and vowel count
function resetCounter() {
    textInput.value = '';
    vowelCountDisplay.textContent = '0';
}

// Event listeners
checkVowelsButton.addEventListener('click', countVowels);
resetButton.addEventListener('click', resetCounter);
