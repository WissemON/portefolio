let agence = document.querySelector('#agence');
let popAgence = document.querySelector('.pop_agence');
let close = document.querySelector('#close');
let hoverVoyage = document.querySelector('#voy');
let hoverSnake = document.querySelector('#sna');


agence.addEventListener(
    'click', event => {
        popAgence.style.display = "block";
    });

close.addEventListener(
    'click', Close => {
        popAgence.style.display = "none";
    }
    )