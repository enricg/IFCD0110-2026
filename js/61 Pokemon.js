const cataleg = document.getElementById("principal");

window.onload = async function () {
  await carregaDades();
  
};

// Versió amb async/await
async function carregaDades() {
  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/ability/");
    const pokemons = await resposta.json();
    console.log(pokemons);
    //recorrer el camps per a la capçalera
    pokemons.results.forEach(element => {
        cataleg.appendChild(creaElement(element));
    });
  } catch (e) {
    console.error("Error de càrrega ", e);
  }
}

function creaElement(element, etiqueta = "div") {
    const camp = document.createElement(etiqueta);
    camp.innerText = element.name;
  return camp;
}

// crea carta
const carta=document.createElement("div");
carta.classList.add("card");
carta.classList.add("border-primary");
carta.classList.add("mb-3");
carta.style.maxWidth="18rem";
// afegim elements de la carta
const titolCarta=document.createElement("div");
titolCarta.innerHTML="Sóc el titol de la carta";
titolCarta.classList.add("card-header")
carta.appendChild(titolCarta);
// ageim titol del cos
// afegim el body de la carta
const cosCarta=document.createElement("div");
const titolCos=document.createElement("h5");
titolCos.classList.add("card-title");
titolCos.innerText="Primary card title";
cosCarta.appendChild(titolCos);

cosCarta.classList.add("card-body");
cosCarta.classList.add("text-primary");
carta.appendChild(cosCarta);


cataleg.appendChild(carta);
