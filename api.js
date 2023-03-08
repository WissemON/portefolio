let container = document.querySelector(".cards");
let search = document.querySelector("#search");

// fonction pour récupérer les données en utilisant fetch
function fetchData(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.log(error);
    });
}

// fonction pour afficher les données dans la page HTML
function renderData(data) {
  let img = "./ressources/kain.png";
  container.innerHTML = "";
  data.map(data2 => {
    if (data2.pictures.length != 0) {
      img = data2.pictures[0].url;
    } else {
      img = "./ressources/kain.png";
    }
    container.innerHTML += `<div class="card">
      <div class="flex_in">
        <img src="${img}" alt="" class="img_card">
        <div>
          <p><span>Name:</span> ${data2.name}</p>
          <p><span>Origin:</span> </br> ${data2.origin}</p>
          <p><span>Race:</span> ${data2.race}</p>
          <p><span>Gender:</span> ${data2.gender}</p>
          <p><span>Age:</span> ${data2.age}</p>
        </div>
      </div>
      <p class="desc">${data2.description}</p>
    </div>`;
  });
}

// événement input sur l'élément input
search.addEventListener("input", function(event) {
  let searchValue = event.target.value;
  let searchUrl = `https://www.moogleapi.com/api/v1/characters/search?name=${searchValue}`;
  // appel de la fonction fetchData avec l'URL de recherche
  fetchData(searchUrl).then(function(data) {
    renderData(data);
  });
});

// appel de la fonction fetchData avec l'URL de base pour afficher les données initiales
let url = "https://www.moogleapi.com/api/v1/characters";
fetchData(url).then(function(data) {
  renderData(data);
});
