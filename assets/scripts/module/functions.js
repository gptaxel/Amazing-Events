export function createCard(objeto) {
  return `
  <div class="col-12 col-md-6 col-xl-4 ">
  <div class="card">
      <img src=${objeto.image} class="card-img-top w-100 h-50" alt="food fair">
      <div class="card-body">
          <h5 class="card-title">${objeto.name}</h5>
          <p class="card-text">${objeto.description}.</p>
          <div class="d-flex justify-content-between">
              <p>Price:${objeto.price}</p>
              <a href="./assets/pages/details.html?parametros=${objeto._id}" class="btn btn-danger">Details</a>
          </div>
      </div>
  </div>
</div>`;
}

export function crearCheckbox(categoria) {
  return `<div class="row ps-3">
    <div class="form-check col-sm-6 col-xl">
        <input class="form-check-input" type="checkbox" value="${categoria}" id="${categoria}">
        <label class="form-check-label" for="${categoria}">
           ${categoria}
        </label>
    </div> `;
}

export function showCards(eventos,containerCards,createCard) {
  if (eventos.length == 0) {
    containerCards.innerHTML =
      "El evento buscado no se encuentra disponible";
  }

  for (let evento of eventos) {
    containerCards.innerHTML += createCard(evento);
  }
}

export function mostrarCheckbox(array, lugar) {
  for (const categoria of array) {
    lugar.innerHTML += crearCheckbox(categoria);
  }
  lugar.innerHTML = crearCheckbox(categoria);
}

export function filtrarPorCheck(array, contenedorHTML) {
  contenedorHTML.innerHTML = "";
  let categoriasElegida = [];
  let checkboxSeleccionado = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkboxSeleccionado.forEach((input) => {
    categoriasElegida.push(input.value);
  });
  let arrayFiltrado = array.filter(
    (evento) =>
      categoriasElegida.includes(evento.category) ||
      categoriasElegida.length == 0
  );
  return arrayFiltrado;

}

export function filtrarPorTexto(array, textoUsuario) {
  let arrayText = array.filter((evento) =>
    evento.name.toLowerCase().includes(textoUsuario.toLowerCase())
  );
    return arrayText;
}

export function filtroCruzado(arrayEventos, categoriasElegida, textoUsuario) {
  const filtrarPorCheck2 = filtrarPorCheck(arrayEventos, categoriasElegida);
  console.log(filtrarPorCheck2);
  const filtrarPorTexto2 = filtrarPorTexto(filtrarPorCheck2, textoUsuario);
  console.log(filtrarPorTexto2);
  return filtrarPorTexto2;
}

export function imprimirEventosPorConsola(array) {
  for (evento of array) {
    console.log(evento.name);
  }
}

export function crearTarjeta2(objeto) {
  return `
  <div class="col-12 col-md-6 col-xl-4 ">
  <div class="card h-100">
      <img src=${objeto.image} class="card-img-top h-50" alt="food fair">
      <div class="card-body">
          <h5 class="card-title">${objeto.name}</h5>
          <p class="card-text">${objeto.description}.</p>
          <div class="d-flex justify-content-between">
              <p>Price:${objeto.price}</p>
              <a href="../pages/details.html?parametros=${objeto._id}" class="btn btn-danger">Details</a>
          </div>
      </div>
  </div>
</div>`;
}

export function crearTarjeta3(objeto) {
  return `
  <div class="col-12 col-md-6 col-xl-4 ">
  <div class="card h-100">
      <img src=${objeto.image} class="card-img-top h-50" alt="food fair">
      <div class="card-body">
          <h5 class="card-title">${objeto.name}</h5>
          <p class="card-text">${objeto.description}.</p>
          <div class="d-flex justify-content-between">
              <p>Price:${objeto.price}</p>
              <a href="../pages/details.html?parametros=${objeto._id}" class="btn btn-danger">Details</a>
          </div>
      </div>
  </div>
</div>`;
}