const contenedorStats = document.getElementById("mayor");
const contenedorStats1 = document.getElementById("menor");
const contenedorStats2 = document.getElementById("largo");
const tableBodyPast = document.getElementById("tableCategoria");
const tableBodyFuture = document.getElementById("tableCategoria2");

//Fetch
let date;
let datosEvents;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    datosEvents = data.events;
    date = data.currentDate;

    const arrayOrdenado = Array.from(datosEvents).sort(function (a, b) {
      return b.capacity - a.capacity;
    });
    console.log(arrayOrdenado);
    let eventoMayorNombre = arrayOrdenado[0].name;
    let eventoMayorCapacidad = arrayOrdenado[0].capacity;
    let eventosPasados = datosEvents.filter((evento) => evento.date < date);
    let eventosFuturos = datosEvents.filter((evento) => evento.date > date);
    console.log(eventosPasados);
    eventosPasados.sort(
      (a, b) =>
        calcularPorcentajeAlto(a.assistance, a.capacity) -
        calcularPorcentajeAlto(b.assistance, b.capacity)
    );

    let eventoMenor = eventosPasados[0];
    let eventoMayor = eventosPasados[eventosPasados.length - 1];
    let porcentajeOne = calcularPorcentajeAlto(
      eventoMayor.assistance,
      eventoMayor.capacity
    ).toFixed(1);
    let porcentajeTwo = calcularPorcentajeAlto(
      eventoMenor.assistance,
      eventoMenor.capacity
    ).toFixed(1);

    primeraTabla(eventoMayor, contenedorStats, porcentajeOne);
    primeraTabla(eventoMenor, contenedorStats1, porcentajeTwo);
    segundaTabla(eventoMayorNombre, contenedorStats2, eventoMayorCapacidad);

    let categoriaPasado = eventosFuturos.map(
      (eventosFuturos) => eventosFuturos.category
    );
    let categoriaPasadaArray = Array.from(new Set(categoriaPasado));

    const estadisticasPas = categoriaPasadaArray.map((categoria) => {
      let eventosCategoriaPas = eventosPasados.filter(
        (evento) => evento.category == categoria
      );
      let gananciaCategoria = 0;
      eventosCategoriaPas.forEach((evento) => {
        let { price, assistance } = evento;
        let resultadoGanancia = price * assistance;
        gananciaCategoria = gananciaCategoria + resultadoGanancia;
      });
      let porcentajeAsistencia = 0;
      eventosCategoriaPas.forEach((evento) => {
        let { capacity, assistance } = evento;
        let resultadoPorcentaje = assistance / (capacity / 100);
        porcentajeAsistencia += resultadoPorcentaje;
      });
      let aux = {
        nombre: categoria,
        eventos: eventosCategoriaPas,
        ganancias: gananciaCategoria.toLocaleString(),
        porcentajeDeAsistencia: (
          porcentajeAsistencia / eventosCategoriaPas.length
        ).toFixed(),
      };
      return aux;
    });

    console.log(estadisticasPas);
    let categoriaFuturo = eventosFuturos.map(
      (eventosFuturos) => eventosFuturos.category
    );
    let categoriaFuturoArray = Array.from(new Set(categoriaFuturo));
    console.log(categoriaFuturoArray);

    const estadisticasFuturo = categoriaFuturoArray.map((categoria) => {
      let eventosCategoriaFuturo = eventosFuturos.filter(
        (evento) => evento.category == categoria
      );
      let gananciaCategoria = 0;
      eventosCategoriaFuturo.forEach((evento) => {
        let { price, estimate } = evento;
        let resultadoGanancia = price * estimate;
        gananciaCategoria = gananciaCategoria + resultadoGanancia;
      });
      let porcentajeAsistencia = 0;
      eventosCategoriaFuturo.forEach((evento) => {
        let { capacity, estimate } = evento;
        let resultadoPorcentaje = estimate / (capacity / 100);
        porcentajeAsistencia += resultadoPorcentaje;
      });
      let aux = {
        nombre: categoria,
        eventos: eventosCategoriaFuturo,
        ganancias: gananciaCategoria.toLocaleString(),
        porcentajeDeAsistencia: (
          porcentajeAsistencia / eventosCategoriaFuturo.length
        ).toFixed(),
      };
      return aux;
    });
    mostrarTabla(estadisticasPas, tableBodyPast);
    mostrarTabla(estadisticasFuturo, tableBodyFuture);
  })
.catch((error) => console.log(error));


//Functions

function calcularPorcentajeAlto(assistance, capacidad) {
  let porcentaje = (assistance / capacidad) * 100;
  return porcentaje;
}

function primeraTabla(evento, htmlContenedor, porcentaje) {
  htmlContenedor.innerHTML = `
    <td> ${evento.name} ${porcentaje} %</td> `;
}

function segundaTabla(evento, htmlContenedor, porcentaje) {
  htmlContenedor.innerHTML = `
    <td> ${evento} ${porcentaje}</td>`;
}

function crearTabla(aux) {
  return `<tr>
  <td colspan="1" class="p-3">
    ${aux.nombre}
  </td>
  <td colspan="1" class="p-3">
    ${aux.ganancias}
  </td>
  <td colspan="1" class="p-3">
    ${aux.porcentajeDeAsistencia} %
  </td>
</tr>
`;
}

function mostrarTabla(eventos, elementHTML) {
  let template = "";
  for (let evento of eventos) {
    template += crearTabla(evento);
  }
  elementHTML.innerHTML += template;
}
