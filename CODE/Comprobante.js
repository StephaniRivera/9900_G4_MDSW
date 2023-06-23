// Array para almacenar los productos agregados
var productosAgregados = [];

// Función para agregar un producto
function agregarProducto() {
  var nombreProducto = prompt("Ingrese el nombre del producto:");
  var precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

  var producto = {
    nombre: nombreProducto,
    precio: precioProducto
  };

  productosAgregados.push(producto);
  actualizarProductos();
}

// Función para mostrar los productos en la página
function actualizarProductos() {
  var productosDiv = document.getElementById("productos");
  productosDiv.innerHTML = "";

  for (var i = 0; i < productosAgregados.length; i++) {
    var producto = productosAgregados[i];
    var productoHTML = document.createElement("p");
    productoHTML.innerText = producto.nombre + " - $" + producto.precio.toFixed(2);
    productosDiv.appendChild(productoHTML);
  }
}

// Función para mostrar el carrito de compras
function mostrarCarrito() {
  var carritoDiv = document.getElementById("carrito");
  carritoDiv.style.display = "block";

  var carritoProductosDiv = document.getElementById("carritoProductos");
  carritoProductosDiv.innerHTML = "";

  for (var i = 0; i < productosAgregados.length; i++) {
    var producto = productosAgregados[i];
    var productoRow = document.createElement("tr");

    var nombreProductoCell = document.createElement("td");
    nombreProductoCell.innerText = producto.nombre;
    productoRow.appendChild(nombreProductoCell);

    var precioProductoCell = document.createElement("td");
    precioProductoCell.innerText = "$" + producto.precio.toFixed(2);
    productoRow.appendChild(precioProductoCell);

    carritoProductosDiv.appendChild(productoRow);
  }
}

// Función para realizar la compra y mostrar el comprobante
function comprar() {
  var nombreUsuario = prompt("Ingrese su nombre:");
  var telefonoUsuario = prompt("Ingrese su número de teléfono:");

  var productoComprado = productosAgregados[0];
  var precioProducto = productoComprado.precio.toFixed(2);

  var comprobanteDiv = document.getElementById("comprobante");
  comprobanteDiv.style.display = "block";

  var comprobanteMensaje = document.getElementById("comprobanteMensaje");
  comprobanteMensaje.innerText = "¡Gracias por tu compra!";

  var nombreUsuarioSpan = document.getElementById("nombreUsuario");
  nombreUsuarioSpan.innerText = nombreUsuario;

  var telefonoUsuarioSpan = document.getElementById("telefonoUsuario");
  telefonoUsuarioSpan.innerText = telefonoUsuario;

  var productoCompradoSpan = document.getElementById("productoComprado");
  productoCompradoSpan.innerText = productoComprado.nombre;

  var precioProductoSpan = document.getElementById("precioProducto");
  precioProductoSpan.innerText = precioProducto;
}
