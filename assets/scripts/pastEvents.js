import { showCards, mostrarCheckbox, filtroCruzado, crearTarjeta3 } from "../scripts/module/functions.js"
let containerCards = document.getElementById("sectionCards");
let contenedorCheck = document.getElementById("checkContainer");
let search = document.getElementById("searchInput");


// Fetch
let eventosPasados;
let eventos;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    eventos = data.events;
    let categoriasRepetidas = eventos.map((evento) => evento.category);
    let categoriasSinRepetir = Array.from(new Set(categoriasRepetidas));
    eventosPasados = selectorEventos(eventos, data.currentDate);
    showCards(eventosPasados, containerCards, crearTarjeta3);
    mostrarCheckbox(categoriasSinRepetir, contenedorCheck);
  })
  .catch((error) => console.log(error));


// Escuchadores de eventos
contenedorCheck.addEventListener("change", () => {
  console.log("El usuario hizo click");
  const eventosFiltrados = filtroCruzado(
    eventosPasados,
    containerCards,
    search.value
  );
  showCards(eventosFiltrados, containerCards, crearTarjeta3);
});

search.addEventListener("keyup", () => {
  console.log("El usuario escribe");
  const eventosFiltrados = filtroCruzado(
    eventosPasados,
    containerCards,
    search.value
  );
  showCards(eventosFiltrados, containerCards, crearTarjeta3);
});

// Functions
function selectorEventos(eventos, currentDate) {
  let eventosPasadosSeleccionado = [];
  for (let evento of eventos) {
    if (evento.date < currentDate) {
      eventosPasadosSeleccionado.push(evento);
    }
  }
  return eventosPasadosSeleccionado;
}


//------------------------------------
// function createCard(objeto) {
//   return `
//   <div class="col-12 col-md-6 col-xl-4 ">
//   <div class="card h-100">
//       <img src=${objeto.image} class="card-img-top h-50" alt="food fair">
//       <div class="card-body">
//           <h5 class="card-title">${objeto.name}</h5>
//           <p class="card-text">${objeto.description}.</p>
//           <div class="d-flex justify-content-between">
//               <p>Price:${objeto.price}</p>
//               <a href="./details.html" class="btn btn-danger">Details</a>
//           </div>
//       </div>
//   </div>
// </div>`;
// }

// function showCards(events, containerCards) {
//   for (let evento of events) {
//     containerCards.innerHTML += createCard(evento);
//   }
// }

// function eventSelector(events, currentDate) {
//   let pastEvents = [];
//   for (let evento of events) {
//     if (evento.date < currentDate) {
//       pastEvents.push(evento);
//     }
//   }
//   return pastEvents;
// }

// let pastEvents = eventSelector(data.events, data.currentDate);
// showCards(pastEvents, containerCards);
// console.log(pastEvents);

