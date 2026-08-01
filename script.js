let score = 0;

const button = document.querySelector('#btn');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const display = document.querySelector('#display');

button.addEventListener('click', function() {
    score++;
    display.textContent = `Score: ${score}`;
});

button2.addEventListener('click', function() {
    score--;
    display.textContent = `Score: ${score}`;
});


button3.addEventListener('click', function() {
    score = 0;
    display.textContent = `Score: ${score}`;
});