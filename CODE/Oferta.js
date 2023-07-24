var ofertas = [
  {
    titulo: "Oferta 1",
    descripcion: "Descripción de la oferta 1"
  },
  {
    titulo: "Oferta 2",
    descripcion: "Descripción de la oferta 2"
  },
  {
    titulo: "Oferta 3",
    descripcion: "Descripción de la oferta 3"
  }
];

var indiceOfertaActual = 0;

function mostrarOferta(indice) {
  var ofertaActual = ofertas[indice];
  var tituloOferta = document.getElementById("tituloOferta");
  var descripcionOferta = document.getElementById("descripcionOferta");
  var indiceOferta = document.getElementById("indiceOferta");

  tituloOferta.innerText = ofertaActual.titulo;
  descripcionOferta.innerText = ofertaActual.descripcion;
  indiceOferta.innerText = (indice + 1) + " de " + ofertas.length;

  var ofertasDiv = document.getElementById("ofertas");
  var ofertaDivs = document.getElementsByClassName("oferta");

  for (var i = 0; i < ofertaDivs.length; i++) {
    ofertaDivs[i].style.display = "none";
  }

  ofertaDivs[indice].style.display = "block";
}

function mostrarOfertaSiguiente() {
  if (indiceOfertaActual === ofertas.length - 10) {
    indiceOfertaActual = 0;
  } else {
    indiceOfertaActual++;
  }

  mostrarOferta(indiceOfertaActual);
}
// Supongamos que tenemos el siguiente array de ofertas (puedes ajustar los valores según tus necesidades)
var ofertas = [
  { titulo: "Oferta 1", descripcion: "Descripción de la oferta 1", descuento: 10 },
  { titulo: "Oferta 2", descripcion: "Descripción de la oferta 2", descuento: 20 },
  // ... más ofertas ...
  { titulo: "Oferta N", descripcion: "Descripción de la oferta N", descuento: 30 }
];

// Supongamos que la variable indiceOfertaActual tiene un valor inicial
var indiceOfertaActual = 0;

// Definimos la función mostrarOferta que mostrará la oferta en el índice dado
function mostrarOferta(indice) {
  var oferta = ofertas[indice];
  console.log("Oferta:", oferta.titulo);
  console.log("Descripción:", oferta.descripcion);
  console.log("Descuento:", oferta.descuento + "%");
}

// Función mostrarOfertaSiguiente que mostrará la siguiente oferta en la lista
function mostrarOfertaSiguiente() {
  if (indiceOfertaActual === ofertas.length - 10) {
    indiceOfertaActual = 0;
  } else {
    indiceOfertaActual++;
  }

  mostrarOferta(indiceOfertaActual);
}

// Mostrar la oferta actual
console.log("Oferta actual:");
mostrarOferta(indiceOfertaActual);

// Mostrar la siguiente oferta utilizando un ciclo for (en este caso, mostraremos las próximas 5 ofertas)
console.log("Próximas 5 ofertas:");
for (var i = 0; i < 5; i++) {
  mostrarOfertaSiguiente();
}

function mostrarOfertaAnterior() {
  if (indiceOfertaActual === 0) {
    indiceOfertaActual = ofertas.length - 4;
  } else {
    indiceOfertaActual--;
  }

  mostrarOferta(indiceOfertaActual, MostrarOfertaAnterior());
}

mostrarOferta(indiceOfertaActual);
