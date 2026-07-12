const API = "https://pokeapi.co/api/v2";
const rutaFoto =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const cataleg = document.getElementById("principal");

const PAGE_SIZE = 12; // ajusta al teu límit
let offset = 0; // ajusta si ja tens una variable pròpia

const btnPrev = document.getElementById("previ");
const btnSeg = document.getElementById("seguent");

btnPrev.addEventListener("click", () => {
  if (offset > 0) {
    offset = Math.max(0, offset - PAGE_SIZE);
    carregaDades(offset); // crida la teva funció que ja carrega el llistat
  }
});

btnSeg.addEventListener("click", () => {
  offset += PAGE_SIZE;
  carregaDades(offset);
});

window.onload = async function () {
  await carregaDades(offset);
};

// Versió amb async/await
async function carregaDades(offset) {
  document.getElementById("pagina").innerText="Pàgina "+offset%11;
  try {
    const resposta = await fetch(
      API + "/pokemon?limit=" + PAGE_SIZE + "&offset=" + offset,
    );
    const pokemons = await resposta.json();
    console.log(pokemons.results);
    // Eliminem tots els fills del catàleg
    cataleg.replaceChildren();
    //recorrer el camps per a la capçalera
    pokemons.results.forEach((element) => {
      cataleg.appendChild(creaCarta(element.name, element.url, "hola",element.url));
    });
  } catch (e) {
    console.error("Error de càrrega ", e);
  }
}

function creaElement(
  etiqueta = "div",
  classes = "",
  text = "",
  rutaImatge = ""
) {
  const patro = /\/(\d+)\/$/;
  let numero = text.match(patro);
  
  const camp = document.createElement(etiqueta);
  // Afegir classes
  if (classes) {
    let llistaClasses = classes.split(" ");
    for (cl of llistaClasses) {
      camp.classList.add(cl);
    }
  }
  //  Afegir text
  if (text) {
    camp.textContent = text;
  }
  if (rutaImatge) {
    camp.src = rutaFoto+numero[1]+".png";
  }

  return camp;
}

// crea carta
function creaCarta(titolCapçalera, titol, text, url) {
  const carta = creaElement("div", "card border-primary mb-3");
  carta.style.maxWidth = "18rem";

  const header = creaElement("div", "card-header", titolCapçalera);
  const foto = creaElement("img", "card-img-top",titol,url);
  const body = creaElement("div", "card-body text-primary");
  const titolBody = creaElement("h5", "card-title", titol);
  const textBody = creaElement("p", "card-text", text);

  body.append(titolBody, textBody);
  carta.append(header, foto);
  carta.append(header, body);

  return carta;
}
