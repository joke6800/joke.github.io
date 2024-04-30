document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.box');
    const setBtn = document.getElementById('setBtn');
    let isRotating = true;
    let intervalId;

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let currentIndex = 0;

    function rotateNumbers() {
        box.textContent = numbers[currentIndex];
        currentIndex = (currentIndex + 1) % numbers.length;
    }

    intervalId = setInterval(rotateNumbers, 100);

    setBtn.addEventListener('click', function() {
        if (isRotating) {
            clearInterval(intervalId);
            isRotating = false;
        } else {
            intervalId = setInterval(rotateNumbers, 100);
            isRotating = true;
        }
    });
});
