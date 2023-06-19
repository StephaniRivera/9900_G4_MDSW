var productos = [];
var maxProductos = 5;

function agregarProducto() {
  if (productos.length < maxProductos) {
    var producto = prompt('Ingrese el nombre del producto:');
    if (producto) {
      productos.push({ nombre: producto, cantidad: 0 });
      actualizarListaProductos();
    }
  } else {
    alert('Ya no es posible agregar más productos. Se ha alcanzado el límite máximo (5).');
  }
}

function agregarCantidad(index) {
  if (productos[index].cantidad < 10) {
    productos[index].cantidad++;
    actualizarListaProductos();
  } else {
    alert('Ya no es posible agregar más cantidad. Se ha alcanzado el límite máximo (10).');
  }
}

function quitarCantidad(index) {
  if (productos[index].cantidad > 0) {
    productos[index].cantidad--;
    actualizarListaProductos();
  }
}

function actualizarListaProductos() {
  var listaProductos = document.getElementById('listaProductos');
  listaProductos.innerHTML = '';
  for (var i = 0; i < productos.length; i++) {
    var li = document.createElement('li');
    li.textContent = productos[i].nombre + ' - Cantidad: ' + productos[i].cantidad;
    var btnAgregarCantidad = document.createElement('button');
    btnAgregarCantidad.textContent = '+';
    btnAgregarCantidad.addEventListener('click', (function(index) {
      return function() {
        agregarCantidad(index);
      };
    })(i));
    var btnQuitarCantidad = document.createElement('button');
    btnQuitarCantidad.textContent = '-';
    btnQuitarCantidad.addEventListener('click', (function(index) {
      return function() {
        quitarCantidad(index);
      };
    })(i));
    li.appendChild(btnAgregarCantidad);
    li.appendChild(btnQuitarCantidad);
    listaProductos.appendChild(li);
  }
}

document.getElementById('btnAgregarProducto').addEventListener('click', agregarProducto);
