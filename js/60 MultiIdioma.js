let dadesIdiomes = null;

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

// Canvia l'idioma de la pàgina segons l'idioma seleccionat
function canviarIdioma(idioma) {
  const dades = dadesIdiomes.idiomes.find((item) => item.idioma === idioma);

  if (!dades) return;

  document.getElementById("titol").innerHTML = dades.titol;

  for (let i = 0; i < dades.menu.length; i++) {
    document.getElementById("menu" + i).innerHTML = dades.menu[i];
  }

  document.getElementById("peu").innerHTML = dades.peu;
}

// Espera a que la pàgina estigui carregada abans de carregar el fitxer JSON i establir l'idioma inicial
window.onload = async function () {
  await carregaJSON();
  canviarIdioma("ca"); // català inicial
};

const seleccionaIdioma = document.getElementById("idiomes");
// Afegim un event listener per canviar l'idioma quan l'usuari selecciona un idioma diferent
idiomes.addEventListener("change", function () {
  const idiomaSeleccionat = this.value;
  canviarIdioma(idiomaSeleccionat);
});

// Funció per canviar l'idioma de la pàgina
function canviarIdioma(idioma) {
  const dades = dadesIdiomes.idiomes.find((item) => item.idioma === idioma);

  if (!dades) return;

  document.getElementById("titol").innerHTML = dades.titol;

  const menu = document.querySelectorAll("li");

  menu.forEach((element, index) => {
    element.innerHTML = dades.menu[index];
  });

  document.getElementById("peu").innerHTML = dades.peu;
}
