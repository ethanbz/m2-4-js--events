let main = document.querySelector('#main');

for (i=1; i<21; i++) {
    let btn = document.createElement('button');
    main.appendChild(btn);
    btn.setAttribute('class', 'btn');
    btn.style.backgroundColor = 'red';
    btn.style.padding = '80px';
    btn.innerText = i;
}



let btn = document.querySelectorAll('.btn');
console.log(btn);
//btn.addEventListener('click', modifyColor);



btn.forEach(button => {
    button.addEventListener('click', () => {
        if (button.style.backgroundColor = 'red') {
            button.style.backgroundColor = 'green';
        } 
        button.addEventListener('click', () => {
            if (button.style.backgroundColor = 'green') {
                button.style.backgroundColor = 'red';
            }
            button.addEventListener('click', () => {
                if (button.style.backgroundColor = 'red') {
                    button.style.backgroundColor = 'green';
                }
        });
    });
    });
});


//SOLUTION REQUIRES DIRECT ENTRY OF CSS .............. SO UNFAIR