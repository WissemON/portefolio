let agences = document.querySelectorAll('.agence');
let popAgence = document.querySelectorAll('.pop_agence');
let snakes = document.querySelectorAll('.snake');
let closeAgence = document.querySelectorAll('.close_agence');
let closeSnake = document.querySelectorAll('.close_snake');
let popSnake = document.querySelectorAll('.pop_snake');


document.addEventListener('DOMContentLoaded', () => {


agences.forEach((agence) => {
    agence.addEventListener('click', event => {
        console.log(popAgence);
        popAgence[0].style.display = "block";
    })
});

closeAgence.forEach((close, index) => {
    close.addEventListener('click', event => {
        popAgence[0].style.display = "none";
    })
});

snakes.forEach((snake, index) => {
    snake.addEventListener('click', event => {
        popSnake[0].style.display = "block";
    })
});

closeSnake.forEach((close, index) => {
    close.addEventListener('click', event => {
        popSnake[0].style.display = "none";
    })
});
    

});