let main = document.querySelector('#main');



for (i = 1; i<+20; i++) {
    let btn = document.createElement('button');
    main.appendChild(btn);
    btn.innerText = i;
    btn.setAttribute('class', 'button');
    btn.style.left = `${Math.random()*95}%`
    btn.style.top = `${Math.random()*95}%`
    btn.addEventListener('click', modifyColor);
    
}



function modifyColor(e) {
    e.target.classList.toggle('verde');
}