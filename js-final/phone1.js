// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to generate a randomized keypad layout
function generateKeypad() {
    // Create an array of numbers from 1 to 9
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    // Shuffle the array to randomize the order
    const shuffledNumbers = shuffleArray(numbers);

    // Get all keypad buttons
    const keypadButtons = document.querySelectorAll('.keypad button');

    // Shuffle the keypad buttons
    const shuffledButtons = shuffleArray(Array.from(keypadButtons));

    // Assign the shuffled numbers to the buttons
    shuffledButtons.forEach((button, index) => {
        button.textContent = shuffledNumbers[index];
    });

    // Reattach shuffled buttons to keypad
    const keypad = document.querySelector('.keypad');
    keypad.innerHTML = '';
    shuffledButtons.forEach(button => {
        keypad.appendChild(button);
    });
}

// Call the function to generate the keypad layout when the page loads
window.onload = generateKeypad;
