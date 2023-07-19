import {createCard, showCards, mostrarCheckbox,filtroCruzado}from"../scripts/module/functions.js"
let containerCards = document.getElementById("sectionCards");
let contenedorCheck = document.getElementById("checkContainer");
let search = document.getElementById("searchInput");

// Fetch
let eventos;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
 .then((respuesta) => respuesta.json())
 .then((data) => {
    eventos = data.events;
    let categoriasRepetidas = eventos.map((evento) => evento.category);
    let categoriasSinRepetir = Array.from(new Set(categoriasRepetidas));
    showCards(eventos,containerCards, createCard);
    mostrarCheckbox(categoriasSinRepetir, contenedorCheck);
 })
 .catch((error) => console.log(error));


//Escuchadores de eventos
contenedorCheck.addEventListener("change", () => {
    console.log("El usuario hizo click");
    const eventosFiltrados = filtroCruzado(
      eventos,
      containerCards,
      search.value
    );
    showCards(eventosFiltrados, containerCards, createCard);
});

search.addEventListener("keyup", () => {
    const eventosFiltrados = filtroCruzado(
        eventos,
        containerCards,
        search.value
    );
    showCards(eventosFiltrados, containerCards,createCard);
});


//--------------------------------------
// function showCards(events) {
//     for (let evento of events){
//         containerCards.innerHTML += createCard(evento)
//     }
// }

// function crearCheckbox(categoria) {
//     return ` <div class="row ps-3">
//       <div class="form-check col-sm-6 col-xl">
//           <input class="form-check-input" type="checkbox" value="${categoria}" id="${categoria}">
//           <label class="form-check-label" for="${categoria}">
//              ${categoria}
//           </label>
//      </div>
//     `;
// }
  

// function mostrarCheckbox(array, lugar) {
//     let template = "";
//     for (const categoria of array) {
//       lugar.innerHTML += crearCheckbox(categoria);
//     }
//     lugar.innerHTML = template;
// }

// let categoriasRepetidas = arrayEventos.map((e) => e.category);
// console.log(categoriasRepetidas, contenedorCheck);
// let setCategoriasSinRepetir = new Set (categoriasRepetidas)
// console.log(setCategoriasSinRepetir)
// let categoriasSinRepetir = Array.from(setCategoriasSinRepetir)
// console.log(categoriasSinRepetir)


