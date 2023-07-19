import { showCards, mostrarCheckbox, filtroCruzado, crearTarjeta2,} from "../scripts/module/functions.js";

let containerCards = document.getElementById("sectionCards");
let contenedorCheck = document.getElementById("checkContainer");
let search = document.getElementById("searchInput");

//Fetch
let eventosFuturos;
let eventos;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    eventos = data.events;
    let categoriasRepetidas = eventos.map((evento) => evento.category);
    let categoriasSinRepetir = Array.from(new Set(categoriasRepetidas));
    eventosFuturos = selectorEventos(eventos, data.currentDate);
    showCards(eventosFuturos, containerCards, crearTarjeta2);
    mostrarCheckbox(categoriasSinRepetir, contenedorCheck);
  })
.catch((error) => console.log(error));


//Escuchadores de eventos

contenedorCheck.addEventListener("change", () => {
  console.log("El usuario hizo click");
  const eventosFiltrados = filtroCruzado(
    eventosFuturos,
    containerCards,
    search.value
  );
  showCards(eventosFiltrados, containerCards, crearTarjeta2);
});

search.addEventListener("keyup", () => {
  console.log("El usuario escribe");
  const eventosFiltrados = filtroCruzado(
    eventosFuturos,
    containerCards,
    search.value
  );
  showCards(eventosFiltrados, containerCards, crearTarjeta2);
});

//Functions

function selectorEventos(eventos, currentDate) {
  let eventosFuturosSeleccionado = [];
  for (let evento of eventos) {
    if (evento.date > currentDate) {
      eventosFuturosSeleccionado.push(evento);
    }
  }
  return eventosFuturosSeleccionado;
}



//--------------------------------------
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
//   for (let event of events) {
//     containerCards.innerHTML += createCard(event);
//   }
// }

// function eventSelector(events, currentDate) {
//   let futureEvents = [];
//   for (let event of events) {
//     if (event.date > currentDate) {
//       futureEvents.push(event);
//     }
//   }
//   return futureEvents;
// }

// let futureEvents = eventSelector(data.events, data.currentDate);
// showCards(futureEvents, containerCards);
// console.log(futureEvents);