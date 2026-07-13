const divUsuariRandom = document.getElementById("randomUser");
const APIUsuariRandom = "https://randomuser.me/api/";

window.onload = async function () {
  await carregaDades(APIUsuariRandom);
};

// Versió amb async/await
async function carregaDades(API) {
  try {
    const resposta = await fetch(API);
    const dades = await resposta.json();
    console.log(dades.results[0]);
    // Aquí va el codi
    divUsuariRandom.appendChild(creaCarta(dades.results[0].name.first,"títol","text",dades.results[0].picture.large));
  } catch (e) {
    console.error("Error de càrrega ", e);
  }
}

function creaElement(
  etiqueta = "div",
  classes = "",
  text = "",
  rutaImatge = "",
) {

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
    camp.src = rutaImatge;
  }
  return camp;
}

// crea carta
function creaCarta(titolCapçalera, titol, text, url) {
  const carta = creaElement("div", "card");
  carta.style.maxWidth = "18rem";

  const foto = creaElement("img", "card-img-top", titol, url);
  const body = creaElement("div", "card-body");
  const titolBody = creaElement("h5", "card-title", titolCapçalera);
  const textBody = creaElement("p", "card-text", text);

  body.append(titolBody, textBody);
  carta.append(foto);
  carta.append(body);

  return carta;
}
