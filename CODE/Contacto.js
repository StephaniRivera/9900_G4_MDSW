// Información de la empresa
const companyName = "Dolce Peccato";
const contactMessage = "Contacta con nosotros";
const email = "anahi_suquillom@outlook.com";
const instagramMessage = "Encuéntranos en Instagram como: amsdolce_peccato";

// Función para mostrar la información
function showCompanyInfo() {
  console.log("Nombre de la empresa: " + companyName);
  console.log(contactMessage);
  console.log("Gmail: " + email);
  console.log(instagramMessage);
}

// Función para redireccionar a Instagram
function redirectToInstagram() {
  // Reemplaza el enlace con tu URL de Instagram
  window.location.href = "https://www.instagram.com/amsdolce_peccato/";
}

// Mostrar la información de la empresa al cargar la página
showCompanyInfo();
