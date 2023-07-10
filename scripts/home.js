let containerCards = document.getElementById("sectionCards");

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

showCards(data.events)