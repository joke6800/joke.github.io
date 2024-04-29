// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Array representing the keys on the keypad
const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Shuffle the keys array
shuffleArray(keys);

// Function to create keypad buttons
function createButtons() {
    const keypadButtons = document.getElementById('keypadButtons');

    keys.forEach(key => {
        const button = document.createElement('button');
        button.textContent = key;
        button.addEventListener('click', () => {
            document.getElementById('phoneNumber').value += key;
        });
        keypadButtons.appendChild(button);
    });
}

// Call the function to create buttons when the page loads
window.onload = createButtons;
