/* Exercici 1*/
const enllac = document.getElementById("aGoogle");
enllac.addEventListener("click", function (e) {
  e.preventDefault();
  alert("La navegació ha estat bloquejada");
});

/* Exercici 2*/
const formulari2 = document.getElementById("formulari2");
formulari2.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("No s'ha enviat el formulari");
});

/* Exercici 2*/
const formulari3 = document.getElementById("formulari3");
const input3 = document.getElementById("inom3");
formulari3.addEventListener("submit", (e) => {
  // if(input3.value.trim().length<2){
  if (input3.value.trim() === "") {
    e.preventDefault();
    alert("Escriu algun nom!!!");
  }
});

/* Exercici 4*/
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("No utilitzis el botó secundari, capsigrany!");
});

/* Exercici 5*/
const input5 = document.getElementById("inom5");
input5.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    e.preventDefault();
    alert("No escriguis la tecla a maleida!!!");
  }
});

/* Exercici 6*/
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
});
