let detailsContent = document.getElementById("detailsConteiner");
//let contenedorDetalles = document.getElementById("detailsConteiner");
let parametro = location.search;
let parametroEvento = new URLSearchParams(parametro);
const idEvento = parametroEvento.get("parametros");

// Fetch
let eventos = [];
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    eventos = data.events;
    let eventoTarjeta = eventos.find((evento) => evento._id == idEvento);
    showCards( detailsContent, eventoTarjeta);
 
  })
  .catch((error) => console.log(error));

// Funciones
function showCards(elementoHTML, evento) {
  elementoHTML.innerHTML = `            <div class="card mb-3 p-3 bg-danger text-light">
    <div class="row g-0">
        <div class="col-md-4 d-sm-flex justify-content-sm-center" >
            <img src="${evento.image}" class="img-fluid rounded-start " alt="food">
        </div>
        <div class="col-md-8 d-flex align-items-center">
            <div class="card-body">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text">${evento.description}</p>
                <p>Date: ${evento.date}</p>
                <p>Category:${evento.category}</p>
                <p>Place: ${evento.place}</p>
                <p>Capacity: ${evento.capacity}</p>
                <p>Assistance:${evento.assitance}</p>
                <p>Price: ${evento.price}</p>
            </div>
        </div>
    </div>
</div> `;
}
