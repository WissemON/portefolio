let frenchFlag = document.querySelector('#fr_flag');
let englishFlag = document.querySelector('#en_flag');
let en = document.querySelectorAll('.english');
let fr = document.querySelectorAll('.french');
let lightSelect = document.querySelector('.light_select');

function ChangeToEnglish() { 
      frenchFlag.classList.toggle("light_select");
      englishFlag.classList.toggle("light_select");

      fr.forEach(element => {
            element.style.display = 'none';
          });
          en.forEach(element => {
            element.style.display = 'block';
          });
}

function ChangeToFrench() { 
      frenchFlag.classList.toggle("light_select");
      englishFlag.classList.toggle("light_select");

      fr.forEach(element => {
            element.style.display = 'block';
          });
          en.forEach(element => {
            element.style.display = 'none';
          });
}

englishFlag.addEventListener( "click", () =>
{
      if(englishFlag.classList.contains("light_select")) {
      }
      else {
            ChangeToEnglish();
      }
      
}


)

frenchFlag.addEventListener( "click", () =>
{
      if(frenchFlag.classList.contains("light_select")) {
      }
      else {
      ChangeToFrench();
      }
}


)