// Datos de contacto de la empresa
const empresaContacto = {
  nombre: "",
  telefono: "",
  correo: ""
};

// Función para guardar los datos de contacto
function guardarContacto(nombre, telefono, correo) {
  if (nombre && telefono && correo) {
    empresaContacto.nombre = nombre;
    empresaContacto.telefono = telefono;
    empresaContacto.correo = correo;
    console.log("Datos de contacto guardados correctamente.");
  } else {
    console.log("Todos los campos son obligatorios.");
  }
}

// Función para mostrar la sección de contacto
function mostrarSeccionContacto() {
  console.log("Nombre de la empresa: " + empresaContacto.nombre);
  console.log("Teléfono: " + empresaContacto.telefono);
  console.log("Correo electrónico: " + empresaContacto.correo);
}

// Ejemplo de uso:
guardarContacto("Mi Empresa", "123-456-7890", "contacto@miempresa.com");
mostrarSeccionContacto();
// Datos de contacto de la empresa
const empresaContacto = {
  nombre: "",
  telefono: "",
  correo: ""
};

// Función para guardar los datos de contacto
function guardarContacto(nombre, telefono, correo) {
  if (nombre && telefono && correo) {
    empresaContacto.nombre = nombre;
    empresaContacto.telefono = telefono;
    empresaContacto.correo = correo;
    console.log("Datos de contacto guardados correctamente.");
  } else {
    console.log("Todos los campos son obligatorios.");
  }
}

// Función para mostrar la sección de contacto
function mostrarSeccionContacto() {
  console.log("Nombre de la empresa: " + empresaContacto.nombre);
  console.log("Teléfono: " + empresaContacto.telefono);
  console.log("Correo electrónico: " + empresaContacto.correo);
}

// Ejemplo de uso:
guardarContacto("Mi Empresa", "123-456-7890", "contacto@miempresa.com");
mostrarSeccionContacto();
