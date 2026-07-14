window.addEventListener("load", function () {
  // Recuperem el valor de la variable de la Local Storage
  const primerNom = document.getElementById("pantallaLocal");
  if (localStorage.nom) {
    primerNom.innerHTML += localStorage.getItem("nom");
  } else {
    primerNom.innerHTML = "No hi ha cap nom emmagatzemat al local storage";
  }
  // Recuperem el valor de la variable de la Session Storage
  const segonNom = document.getElementById("pantallaSessio");
  if (sessionStorage.cognom) {
    segonNom.innerHTML += sessionStorage.getItem("cognom");
  } else {
    segonNom.innerHTML = "No hi ha cap nom emmagatzemat al session storage";
  }
});

// afegir listener del clic del botó
const botoLocal = document.getElementById("btnGuardarLocal");
botoLocal.addEventListener("click", function () {
  console.log("He fet click al botó");
  const eNom = document.getElementById("nom");
  if (eNom.value.trim()) {
    localStorage.setItem("nom", eNom.value.trim());
  }
});

const botoClick = document.getElementById("btnClick");
botoClick.addEventListener("click", function () {
  if (localStorage.comptadorClicks) {
    localStorage.comptadorClicks++;
  } else {
    localStorage.comptadorClicks = 1;
  }
  const textComptador = document.getElementById("txtClick");
  textComptador.innerText =
    "Comptador de clicks: " + localStorage.comptadorClicks;
  console.log(localStorage.comptadorClicks);
});

const botoNeteja = document.getElementById("btnNeteja");
botoNeteja.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

const botoSessio = document.getElementById("btnGuardarSessio");
botoSessio.addEventListener("click", function () {
  console.log("He fet click al botó de Session Storage");
  const eCognom = document.getElementById("cognom");
  if (eCognom.value.trim()) {
    sessionStorage.setItem("cognom", eCognom.value.trim());
  }
});
