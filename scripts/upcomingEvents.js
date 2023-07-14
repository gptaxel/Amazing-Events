let containerCards = document.getElementById("sectionCards");
let contenedorCheck = document.getElementById("checkContainer");
let search = document.getElementById("searchInput");
const arrayEventos = data.events;

function createCard(objeto) {
  return `
  <div class="col-12 col-md-6 col-xl-4 ">
  <div class="card h-100">
      <img src=${objeto.image} class="card-img-top h-50" alt="food fair">
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

function showCards(events, containerCards) {
  for (let event of events) {
    containerCards.innerHTML += createCard(event);
  }
}

function eventSelector(events, currentDate) {
  let futureEvents = [];
  for (let event of events) {
    if (event.date > currentDate) {
      futureEvents.push(event);
    }
  }
  return futureEvents;
}

let futureEvents = eventSelector(data.events, data.currentDate);
showCards(futureEvents, containerCards);
console.log(futureEvents);