let main = document.querySelector('#main');


for (i=0;i<20;i++) {
    let btn = document.createElement('button');
    main.appendChild(btn);
    btn.setAttribute('class', 'btn');
    btn.style.backgroundColor = 'red';
    btn.style.fontSize = '30px';
    btn.style.boxSizing = 'borderBox';
    btn.style.padding = '80px';
    btn.innerText = i+1;
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = 'green';
    });
}

