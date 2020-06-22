// Exercise 1.1
// ------------
console.log('exercise 1.1');


let body = document.querySelector('body');
let textBox = document.querySelector(".result");
let text = 'You win';

function lose() {
    text = "You lose";
}

setTimeout(lose, 1000);

body.addEventListener('mousedown', () => {
    textBox.innerText = text;
})
