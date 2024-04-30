document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const setBtns = document.querySelectorAll('.setBtn');
    const lockBtn = document.querySelector('.lockBtn'); // Select the lock button
    const intervals = []; // Array to store interval IDs for each box

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const rotateSpeed = 50; // Speed of rotation in milliseconds

    function rotateNumbers(box, index) {
        return function() {
            box.textContent = numbers[index];
            index = (index + 1) % numbers.length;
        };
    }


    boxes.forEach(function(box, index) {
        intervals[index] = setInterval(rotateNumbers(box, index), rotateSpeed);
    });

   
    setBtns.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            clearInterval(intervals[index]); 
        });
    });

    
    lockBtn.addEventListener('click', function() {
        intervals.forEach(function(interval) {
            clearInterval(interval); 
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const resetBtn = document.querySelector('.resetBtn');
    
    resetBtn.addEventListener('click', function() {
        location.reload();
    });
});