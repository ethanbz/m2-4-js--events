// Exercise 1.0
// ------------

let body = document.querySelector('body');
let text = document.querySelector('.main');

body.addEventListener('mousedown', () => {
    text.innerText = 'Hello';
});

console.log('exercise-1');

