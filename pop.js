let agence = document.querySelector('#agence');
let popAgence = document.querySelector('.pop_agence');



agence.addEventListener(
    'click', event => {
        popAgence.style.display = "block";
    });

close.addEventListener(
    'click', Close => {
        popAgence.style.display = "none";
    }
    )