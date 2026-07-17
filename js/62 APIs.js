const areaExercicis = document.getElementById("principal");
const APIUsuariRandom = "https://randomuser.me/api/?results=";

window.onload = async function () {
  // randomusers
  areaExercicis.appendChild(
    creaExercici(
      1,
      "Usuaris aleatoris",
      "randomUser",
      "API que crea usuaris aleatoris amb les seves característiques",
      // carregaDades,
      // esborraDades,
    ),
  );
  // areaExercicis.appendChild(
  //   creaExercici(2,)
  // )

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
    let persones = dades.results;
    // Aquí va el codi
    for (i = 0; i < persones.length; i++) {
      divUsuariRandom.appendChild(
        creaCarta(
          persones[i].name.title +
            " " +
            persones[i].name.first +
            " " +
            persones[i].name.last,
          persones[i].email +
            "<br>" +
            persones[i].phone +
            " / " +
            persones[i].cell,
          "<b>Adreça: </b>" +
            persones[i].location.street.name +
            ", " +
            persones[i].location.street.number +
            "<br>" +
            persones[i].location.city +
            ", " +
            persones[i].location.state +
            ", " +
            persones[i].location.country,
          persones[i].picture.large,
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
  // rutaImatge = "",
) {
  const camp = document.createElement(etiqueta);
  // Afegir classes
  if (classes) {
    let llistaClasses = classes.split(" ");
    for (cl of llistaClasses) {
      camp.classList.add(cl);
    }
  }
  //  Afegir text o Afegir ruta imatge
  if (etiqueta=="img") {
    camp.src = text;
  }else{
    camp.innerHTML = text;
  }
  return camp;
}

// crea carta
function creaCarta(titolCapçalera, titol, text, url) {
  const carta = creaElement("div", "card");
  carta.style.maxWidth = "18rem";

  const foto = creaElement("img", "card-img-top", url);
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

  // cos.appendChild(botoCarrega);
  // cos.appendChild(botoNeteja);
  esq.appendChild(tarjeta);
  fila.appendChild(esq);
  fila.appendChild(dre);
  exercici.appendChild(fila);

  return exercici;
}
// ****************************************************************************************************************
// const ACCESS_TOKEN = "JZxR7PuTOq8tYjdHKP0aPO2Nqyi06pALFKGFwUXo4Kc0Zwdne5XwjLDr0vDlDUjm";

// async function searchSong(query) {
//   const url = `https://api.genius.com/search?q=${encodeURIComponent(query)}`;

//   const response = await fetch(url, {
//     headers: {
//       Authorization: `Bearer ${ACCESS_TOKEN}`,
//       Accept: "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`Error ${response.status}: ${response.statusText}`);
//   }

//   const data = await response.json();

//   return data.response.hits;
// }

// (async () => {
//   try {
//     const results = await searchSong("Bohemian Rhapsody");

//     results.forEach((hit, index) => {
//       const song = hit.result;

//       console.log(`${index + 1}. ${song.full_title}`);
//       console.log(`   Artista: ${song.artist_names}`);
//       console.log(`   URL: ${song.url}`);
//       console.log(`   ID: ${song.id}`);
//       console.log("");
//     });
//   } catch (err) {
//     console.error(err);
//   }
// })();

// // const ACCESS_TOKEN = "JZxR7PuTOq8tYjdHKP0aPO2Nqyi06pALFKGFwUXo4Kc0Zwdne5XwjLDr0vDlDUjm";

// async function getSong(songId) {
//   const response = await fetch(`https://api.genius.com/songs/${songId}`, {
//     headers: {
//       Authorization: `Bearer ${ACCESS_TOKEN}`,
//       Accept: "application/json",
//     },
//   });

//   const data = await response.json();
//   return data.response.song;
// }

// (async () => {
//   const song = await getSong(378195);

//   console.log({
//     title: song.title,
//     artist: song.primary_artist.name,
//     releaseDate: song.release_date,
//     page: song.url,
//   });
// })();

// const songs = await searchSong("Imagine");
// console.log(songs);