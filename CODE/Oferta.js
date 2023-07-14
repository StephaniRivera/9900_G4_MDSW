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

function mostrarOfertaAnterior() {
  if (indiceOfertaActual === 0) {
    indiceOfertaActual = ofertas.length - 4;
  } else {
    indiceOfertaActual--;
  }

  mostrarOferta(indiceOfertaActual, MostrarOfertaAnterior());
}

mostrarOferta(indiceOfertaActual);
