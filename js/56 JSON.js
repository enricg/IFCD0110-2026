// Sessió 30/06/2026
//
//  let text = '{"empleats": ['+
// '{"nom":"Joan", "cognom":"Dau"},'+
// '{"nom":"Anna", "cognom":"Sentmenat"},'+
// '{"nom":"Pere", "cognom":"Jaume"}]}';

// console.log(text);
// const obj = JSON.parse(text);
// console.log(obj);

window.addEventListener("load", function () {
  // carregaDades();
  carregaDades2();
});

const taula = document.getElementById("taula");
let capcalera = [];

// Versió amb async/await
async function carregaDades() {
  try {
    const resposta = await fetch("./JSON/2024_pad_imm_mdbas.json");
    const persones = await resposta.json();
    //recorrer el camps per a la capçalera
    Object.keys(persones[0]).forEach((clau) => {
      const camp = document.createElement("th");
      camp.innerText = clau;
      taula.appendChild(camp);
    });

    //recorrem els elements del json
    persones.forEach((element) => {
      taula.appendChild(afegeixRegistre(element));
    });
  } catch (e) {
    console.error("Error de càrrega ", e);
  }
}

// Versió amb promeses
function carregaDades2() {
  fetch("./JSON/2024_pad_imm_mdbas.json")
    .then((resposta) => resposta.json())
    .then((persones) => {
      //recorrer el camps per a la capçalera
      Object.keys(persones[0]).forEach((clau) => {
        const camp = document.createElement("th");
        camp.innerText = clau;
        taula.appendChild(camp);
      });

      //recorrem els elements del json
      persones.forEach((element) => {
        taula.appendChild(afegeixRegistre(element));
      });
    })
    .catch((e) => {
      console.error("Error de càrrega ", e);
    });
}

function afegeixRegistre(element, etiqueta = "td") {
  const registre = document.createElement("tr");

  Object.keys(element).forEach((clau) => {
    const camp = document.createElement(etiqueta);
    camp.innerText = element[clau];
    registre.appendChild(camp);
  });
  return registre;
}
