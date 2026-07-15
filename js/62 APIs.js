const areaExercicis = document.getElementById("principal");
const APIUsuariRandom = "https://randomuser.me/api/?results=";

window.onload = async function () {
  // await carregaDades(APIUsuariRandom);
  await areaExercicis.appendChild(
    creaExercici(
      1,
      "Usuaris aleatoris",
      "randomUser",
      "API que crea usuaris aleatoris amb les seves característiques",
      // carregaDades,
      // esborraDades,
    ),
  );
};

// Carrega dades
async function carregaDades() {
  const divUsuariRandom = document.getElementById("solucio1");
  const iteracions = document.getElementById("selEx1");
  // const API = "https://randomuser.me/api/?results=3";
  try {
    const resposta = await fetch(APIUsuariRandom + iteracions.value);
    const dades = await resposta.json();
    console.log(dades);
    // Aquí va el codi
    for (i = 0; i < dades.results.length; i++) {
      divUsuariRandom.appendChild(
        creaCarta(
          dades.results[i].name.first,
          "títol",
          "text",
          dades.results[i].picture.large,
        ),
      );
    }
  } catch (e) {
    console.error("Error de càrrega ", e);
  }
}

async function esborraDades() {
  const divUsuariRandom = document.getElementById("solucio1");
  divUsuariRandom.replaceChildren();
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
  // Afegir ruta imatge
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

function creaExercici(
  numeroExercici,
  titol,
  nomAPI,
  descripcio,
  botons = "funcioCarrega funcioNeteja",
  // funcioCarrega,
  // funcioNeteja
) {
  const exercici = creaElement("div", "container text-center");
  const fila = creaElement("div", "row");
  const esq = creaElement("div", "col-4");
  const dre = creaElement("div", "col-8");
  dre.style.display = "flex";
  dre.style.flexWrap = "wrap";
  dre.id = "solucio" + numeroExercici;
  const tarjeta = creaElement("div", "card");
  const titolTarjeta = creaElement("h5", "card-header");
  titolTarjeta.innerText = titol;
  tarjeta.appendChild(titolTarjeta);
  const cos = creaElement("div", "card-body");
  tarjeta.appendChild(cos);
  const titolCos = creaElement("h5", "card-title");
  titolCos.innerText = nomAPI;
  const textCos = creaElement("p", "card-text");
  textCos.innerText = descripcio;

  cos.appendChild(titolCos);
  cos.appendChild(textCos);

  // Afegim desplegable
  const quantitat = creaElement("select", "form-select form-select-lg mb-3");
  for (let comptador = 1; comptador < 5; comptador++) {
    const opcio = creaElement("option", "", comptador);
    quantitat.appendChild(opcio);
  }
  quantitat.id = "selEx" + numeroExercici;
  cos.appendChild(quantitat);

  // Afegim botons
  const btns = botons.split(" ");
  for (btn of btns) {
    const boto = creaElement("button", "btn btn-primary");
    boto.id = "btnEx" + numeroExercici + btn;
    switch (btn) {
      case "funcioCarrega":
        boto.innerText = "Carrega";
        boto.addEventListener("click", carregaDades);
        break;
      case "funcioNeteja":
        boto.innerText = "Neteja";
        boto.addEventListener("click", esborraDades);
        break;
    }
    cos.appendChild(boto);
  }

  // const botoCarrega = creaElement("button", "btn btn-primary");
  // botoCarrega.innerText = "Carrega";
  // botoCarrega.id = "btnEx" + numeroExercici + "C";
  // botoCarrega.addEventListener("click", funcioCarrega);
  // const botoNeteja = creaElement("button", "btn btn-primary");
  // botoNeteja.innerText = "Neteja";
  // botoNeteja.id = "btnEx" + numeroExercici + "N";
  // botoNeteja.addEventListener("click", funcioNeteja);

  // cos.appendChild(botoCarrega);
  // cos.appendChild(botoNeteja);
  esq.appendChild(tarjeta);
  fila.appendChild(esq);
  fila.appendChild(dre);
  exercici.appendChild(fila);

  return exercici;
}
