let containerCards = document.getElementById("sectionCards");
let contenedorCheck = document.getElementById("checkContainer");
let search = document.getElementById("searchInput");
const arrayEventos = data.events;

function createCard(objeto) {
  return `
  <div class="col-12 col-md-6 col-xl-4 ">
  <div class="card">
      <img src=${objeto.image} class="card-img-top w-100 h-50" alt="food fair">
      <div class="card-body">
          <h5 class="card-title">${objeto.name}</h5>
          <p class="card-text">${objeto.description}.</p>
          <div class="d-flex justify-content-between">
              <p>Price:${objeto.price}</p>
              <a href="./details.html" class="btn btn-danger">Details</a>
          </div>
      </div>
  </div>
</div>`;
}

function showCards(events) {
    for (let evento of events){
        containerCards.innerHTML += createCard(evento)
    }
}

function crearCheckbox(categoria) {
    return `<div class="row ps-3">
      <div class="form-check col-sm-6 col-xl">
          <input class="form-check-input" type="checkbox" value="${categoria}" id="${categoria}">
          <label class="form-check-label" for="${categoria}">
             ${categoria}
          </label>
      </div> `;
}
  

function mostrarCheckbox(array, lugar) {
    for (const categoria of array) {
      lugar.innerHTML += crearCheckbox(categoria);
    }
}

let categoriasRepetidas = arrayEventos.map((e) => e.category);
console.log(categoriasRepetidas, contenedorCheck);

let categoriasSinRepetir = Array.from()


showCards(data.events)
mostrarCheckbox(categoriasSinRepetir, contenedorCheck)


function filtrarCheck () {

}


function filtrarTexto(){

}

search.addEventListener("keyup", () => {
    containerCards.innerHTML = "";
    
})


contenedorCheck.addEventListener("change", () => {
    
  });