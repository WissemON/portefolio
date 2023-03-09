let head = document.querySelector('header');
let links = document.querySelector('a');
let body = document.body;
let h1 = document.querySelector('h1');
let label = document.querySelector('#label_input');
let ball = document.querySelector('#ball');
const checkbox = document.getElementById('checkbox');

function LightMode() {
    head.classList.toggle("light-mode");
    body.classList.toggle("light-mode");
    h1.classList.toggle("h1-dark");
    label.classList.toggle("label-light");
    ball.classList.toggle("ball-dark")
}

checkbox.addEventListener('change', ()=>{
    LightMode();
})
