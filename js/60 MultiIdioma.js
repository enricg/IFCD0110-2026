let dadesIdiomes = null;

//-------------------------------------------------
// --------------- LISTENERS ----------------------
//-------------------------------------------------
// Espera a que la pàgina estigui carregada abans de carregar el fitxer JSON i establir l'idioma inicial
window.onload = async function () {
  await carregaJSON();
  canviarIdioma(navigator.language); // català inicial
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
  
  console.log(dadesIdiomes);
  let trobat=false;
  let index=-1;

  console.log(trobat);
  console.log(index);
  console.log(dadesIdiomes.idiomes.length);
  // while(index<=dadesIdiomes.idiomes.length){
  //   if(dadesIdiomes.idiomes.idioma===idioma){trobat=true;}
  //   index++;
  // console.log("hola");
  // }
  while(index<dadesIdiomes.idiomes.length){
    console.log(dadesIdiomes.idiomes[index]);
    index++;
  }

  // if (!dades) return;

  // document.getElementById("titol").innerHTML = dades.titol; // idioma títol

// Canvia idioma d'opcions de menú
  const menu = document.querySelectorAll("li");
  menu.forEach((element, index) => {
    // element.innerHTML = dades.menu[index];
  });

  // document.getElementById("peu").innerHTML = dades.peu; // idioma peu
}
