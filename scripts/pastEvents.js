let containerCards = document.getElementById("sectionCards");

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
  for (let evento of events) {
    containerCards.innerHTML += createCard(evento);
  }
}

function eventSelector(events, currentDate) {
  let pastEvents = [];
  for (let evento of events) {
    if (evento.date < currentDate) {
      pastEvents.push(evento);
    }
  }
  return pastEvents;
}

let pastEvents = eventSelector(data.events, data.currentDate);
showCards(pastEvents, containerCards);
console.log(pastEvents);