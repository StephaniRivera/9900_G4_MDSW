const carritoDeCompras = {
  nombre: "",
  apellido: "",
  telefono: "",
  correo: "",
  items: []
};

function agregarProductoAlCarrito(nombreProducto, precio) {
  const producto = { nombre: nombreProducto, precio: precio };
  carritoDeCompras.items.push(producto);
}

function mostrarCarritoDeCompras() {
  console.log("Carrito de Compras:");
  console.log("Nombre: " + carritoDeCompras.nombre + " " + carritoDeCompras.apellido);
  console.log("Teléfono: " + carritoDeCompras.telefono);
  console.log("Correo: " + carritoDeCompras.correo);

  if (carritoDeCompras.items.length === 0) {
    console.log("El carrito está vacío.");
  } else {
    console.log("Productos:");
    let total = 0;

    for (let i = 0; i < carritoDeCompras.items.length; i++) {
      const producto = carritoDeCompras.items[i];
      console.log(i + 1 + ". " + producto.nombre + " - $" + producto.precio);
      total += producto.precio;
    }

    console.log("Total de la compra: $" + total);
  }
}

// Ejemplo de uso:
carritoDeCompras.nombre = "Juan";
carritoDeCompras.apellido = "Pérez";
carritoDeCompras.telefono = "1234567890";
carritoDeCompras.correo = "juan@example.com";

agregarProductoAlCarrito("Camiseta", 20);
agregarProductoAlCarrito("Pantalón", 30);
agregarProductoAlCarrito("Zapatos", 50);

mostrarCarritoDeCompras();
const carritoDeCompras = {
  nombre: "",
  apellido: "",
  telefono: "",
  correo: "",
  items: []
};

function agregarProductoAlCarrito(nombreProducto, precio) {
  const producto = { nombre: nombreProducto, precio: precio };
  carritoDeCompras.items.push(producto);
}

function mostrarCarritoDeCompras() {
  console.log("Carrito de Compras:");
  console.log("Nombre: " + carritoDeCompras.nombre + " " + carritoDeCompras.apellido);
  console.log("Teléfono: " + carritoDeCompras.telefono);
  console.log("Correo: " + carritoDeCompras.correo);

  if (carritoDeCompras.items.length === 0) {
    console.log("El carrito está vacío.");
  } else {
    console.log("Productos:");
    let total = 0;

    for (let i = 0; i < carritoDeCompras.items.length; i++) {
      const producto = carritoDeCompras.items[i];
      console.log(i + 1 + ". " + producto.nombre + " - $" + producto.precio);
      total += producto.precio;
    }

    console.log("Total de la compra: $" + total);
  }
}

// Ejemplo de uso:
carritoDeCompras.nombre = "Juan";
carritoDeCompras.apellido = "Pérez";
carritoDeCompras.telefono = "1234567890";
carritoDeCompras.correo = "juan@example.com";

agregarProductoAlCarrito("Camiseta", 20);
agregarProductoAlCarrito("Pantalón", 30);
agregarProductoAlCarrito("Zapatos", 50);

mostrarCarritoDeCompras();
const carritoDeCompras = {
  nombre: "",
  apellido: "",
  telefono: "",
  correo: "",
  items: []
};

function agregarProductoAlCarrito(nombreProducto, precio) {
  const producto = { nombre: nombreProducto, precio: precio };
  carritoDeCompras.items.push(producto);
}

function mostrarCarritoDeCompras() {
  console.log("Carrito de Compras:");
  console.log("Nombre: " + carritoDeCompras.nombre + " " + carritoDeCompras.apellido);
  console.log("Teléfono: " + carritoDeCompras.telefono);
  console.log("Correo: " + carritoDeCompras.correo);

  if (carritoDeCompras.items.length === 0) {
    console.log("El carrito está vacío.");
  } else {
    console.log("Productos:");
    let total = 0;

    for (let i = 0; i < carritoDeCompras.items.length; i++) {
      const producto = carritoDeCompras.items[i];
      console.log(i + 1 + ". " + producto.nombre + " - $" + producto.precio);
      total += producto.precio;
    }

    console.log("Total de la compra: $" + total);
  }
}

// Ejemplo de uso:
carritoDeCompras.nombre = "Juan";
carritoDeCompras.apellido = "Pérez";
carritoDeCompras.telefono = "1234567890";
carritoDeCompras.correo = "juan@example.com";

agregarProductoAlCarrito("Camiseta", 20);
agregarProductoAlCarrito("Pantalón", 30);
agregarProductoAlCarrito("Zapatos", 50);

mostrarCarritoDeCompras();
const carritoDeCompras = {
  nombre: "",
  apellido: "",
  telefono: "",
  correo: "",
  items: []
};

function agregarProductoAlCarrito(nombreProducto, precio) {
  const producto = { nombre: nombreProducto, precio: precio };
  carritoDeCompras.items.push(producto);
}

function mostrarCarritoDeCompras() {
  console.log("Carrito de Compras:");
  console.log("Nombre: " + carritoDeCompras.nombre + " " + carritoDeCompras.apellido);
  console.log("Teléfono: " + carritoDeCompras.telefono);
  console.log("Correo: " + carritoDeCompras.correo);

  if (carritoDeCompras.items.length === 0) {
    console.log("El carrito está vacío.");
  } else {
    console.log("Productos:");
    let total = 0;

    for (let i = 0; i < carritoDeCompras.items.length; i++) {
      const producto = carritoDeCompras.items[i];
      console.log(i + 1 + ". " + producto.nombre + " - $" + producto.precio);
      total += producto.precio;
    }

    console.log("Total de la compra: $" + total);
  }
}

// Ejemplo de uso:
carritoDeCompras.nombre = "Juan";
carritoDeCompras.apellido = "Pérez";
carritoDeCompras.telefono = "1234567890";
carritoDeCompras.correo = "juan@example.com";

agregarProductoAlCarrito("Camiseta", 20);
agregarProductoAlCarrito("Pantalón", 30);
agregarProductoAlCarrito("Zapatos", 50);

mostrarCarritoDeCompras();
