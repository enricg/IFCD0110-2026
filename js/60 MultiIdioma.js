let dadesIdiomes = null;

//-------------------------------------------------
// --------------- LISTENERS ----------------------
//-------------------------------------------------
// Espera a que la pàgina estigui carregada abans de carregar el fitxer JSON i establir l'idioma inicial
window.onload = async function () {
  await carregaJSON();
  canviarIdioma(navigator.language.substring(0,2)); // català inicial
};

// Afegim un event listener per canviar l'idioma quan l'usuari selecciona un idioma diferent
const seleccionaIdioma = document.getElementById("idiomes");
seleccionaIdioma.addEventListener("change", function () {
  const idiomaSeleccionat = this.value;
  canviarIdioma(idiomaSeleccionat);
});

//-------------------------------------------------
// --------------- FUNCIONS -----------------------
//-------------------------------------------------
// Carrega el fitxer JSON amb les dades dels idiomes
async function carregaJSON() {
  try {
    const resposta = await fetch("./JSON/60 MultiIdioma Dades.json");
    if (!resposta.ok) {
      throw new Error("No s'ha pogut carregar el fitxer JSON.");
    }
    dadesIdiomes = await resposta.json();
  } catch (error) {
    console.error(error);
  }
}

// Funció per canviar l'idioma de la pàgina
function canviarIdioma(idioma) {
  // Trobar el número de registre de l'idioma
  const index = dadesIdiomes.idiomes.findIndex(
    (item) => item.idioma === idioma,
  );

  document.getElementById("titol").innerHTML = dadesIdiomes.idiomes[index].titol; // idioma títol

  // Canvia idioma d'opcions de menú
  const menu = document.querySelectorAll("li");
  menu.forEach((element, posicio) => {
    element.innerHTML = dadesIdiomes.idiomes[index].menu[posicio];
  });

  document.getElementById("peu").innerHTML = dadesIdiomes.idiomes[index].peu; // idioma peu
}
