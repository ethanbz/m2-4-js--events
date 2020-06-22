// Exercise 1.2
// ------------
console.log('exercise 1.2');

let body = document.querySelector('body');
let resultBox = document.querySelector('.result');
let timeBox = document.querySelector('#time');

let time = Math.floor(Math.random()*5+1);
let result = 'You win';

timeBox.innerText = time;

setTimeout( () => {
    result = 'You lose';
}, time*1000);

let countdown = setInterval( () => {
    time = (time-0.1).toFixed(1);
    if (time <= 0) {
        time = 0;
        clearInterval(countdown);
    };
    timeBox.innerText=time;
    
}, 100);

body.addEventListener('mousedown', () => {
    resultBox.innerText = result;
});