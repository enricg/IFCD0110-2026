// localStorage.usuari1="Enric";
// localStorage.clau1="CETPenedès";

const botoInici = document.getElementById("btnIniciSessio");
botoInici.addEventListener("click", () => {
  const missatge = document.getElementById("txtMissatge");
  let resposta = validaIniciSessio();
  if (resposta) {
    missatge.innerText="Enviament correcte";
    missatge.classList.add("alert-success");
    missatge.classList.remove("alert-danger");
  }else{
    missatge.innerText="Enviament incorrecte";
    missatge.classList.add("alert-danger");
    missatge.classList.remove("alert-success");
  }
});

const eTxtUsuari = document.getElementById("txtUsuari");
eTxtUsuari.addEventListener("blur", () => {
  validaCamp("txtUsuari", "mUsuari", /^[a-zñ0-9àèìòùáéíóú]+$/i);
});

const eTxtClauDePas = document.getElementById("txtClauDePas");
eTxtClauDePas.addEventListener("keyup", () => {
  validaClauDePas();
  // validaCamp("txtClauDePas","mClauDePas",/(\d)+([a-z])+([A-Z])+{8,}/);
});

/*****************************************************************************/
/*                        DEFINICIO DE FUNCIONS                              */
/*****************************************************************************/

function validaCamp(txt, etiquetaMissatge, patro) {
  const camp = document.getElementById(txt);
  const missatge = document.getElementById(etiquetaMissatge);

  let resultat = camp.value.match(patro);
  if (resultat) {
    missatge.innerText = "Dades correctes";
    camp.classList.remove("is-invalid");
    missatge.classList.add("alert-success");
    missatge.classList.remove("alert-danger");
  } else {
    missatge.innerText = "No compleix els requisits";
    camp.classList.add("is-invalid");
    missatge.classList.add("alert-danger");
    missatge.classList.remove("alert-success");
  }
}

function validaClauDePas() {
  const camp = document.getElementById("txtClauDePas");
  const missatge = document.getElementById("mClauDePas");
  let resultat = true;

  if (camp.value.length < 8) {
    missatge.innerHTML = "Falten " + (8 - camp.value.length) + " caracters";
    resultat = false;
  } else {
    missatge.innerHTML = "";
  }

  if (!camp.value.match(/\d+/)) {
    resultat = false;
    missatge.innerHTML += ", afegir un número";
  }

  if (!camp.value.match(/[a-z]+/)) {
    resultat = false;
    missatge.innerHTML += ", una lletra minúscula";
  }
  if (!camp.value.match(/[A-Z]+/)) {
    resultat = false;
    missatge.innerHTML += ", una lletra majúscula";
  }
  if (!camp.value.match(/[^a-z0-9]+/i)) {
    resultat = false;
    missatge.innerHTML += ", un caracter especial";
  }

  if (missatge.innerText.length == 0) {
    missatge.classList.remove("alert-danger");
    camp.classList.remove("is-invalid");
  } else {
    resultat = false;
    missatge.classList.add("alert-danger");
    camp.classList.add("is-invalid");
  }

  return resultat;
}

function validaIniciSessio() {
  let resultat = true;
  // const usuari = document.getElementById("txtUsuari").value;
  // console.log(usuari);
  // const clauDePas = document.getElementById("txtClauDePas").value;
  // console.log(clauDePas);
  // const missatge = document.getElementById("txtMissatge");

  // let patro = /^[a-zA-Z0-9]+$/;
  // let resultat = usuari.match(patro);
  // if (resultat) {
  //   missatge.classList.remove("alert-danger");
  // } else {
  //   missatge.classList.add("alert-danger");
  // }

  if (!validaClauDePas()) {
    resultat = false;
  }
  return resultat;
  // if (!usuari.trim() || !clauDePas.trim()) {
  //   return "Algun dels dos camps està buit";
  // }
}
