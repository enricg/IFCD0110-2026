// localStorage.usuari1="Enric";
// localStorage.clau1="CETPenedès";

const botoInici = document.getElementById("btnIniciSessio");
botoInici.addEventListener("click", () => {
  const missatge = document.getElementById("txtMissatge");
  missatge.innerText = validaIniciSessio();
});

const eTxtUsuari = document.getElementById("txtUsuari");
eTxtUsuari.addEventListener("blur", () => {
  validaCamp("txtUsuari","mUsuari",/^[a-zñ0-9àèìòùáéíóú]+$/i);
});

const eTxtClauDePas=document.getElementById("txtClauDePas");
eTxtClauDePas.addEventListener("keyup",()=>{
    validaClauDePas();
    // validaCamp("txtClauDePas","mClauDePas",/(\d)+([a-z])+([A-Z])+{8,}/);
})

/*****************************************************************************/
/*                        DEFINICIO DE FUNCIONS                              */
/*****************************************************************************/

function validaCamp(txt,etiquetaMissatge, patro) {
  const camp = document.getElementById(txt).value;
  const missatge = document.getElementById(etiquetaMissatge);

  let resultat = camp.match(patro);
  if (resultat) {
      missatge.innerText = "Dades correctes";
      missatge.classList.add("alert-success");
      missatge.classList.remove("alert-danger");
    } else {
      missatge.innerText = "No compleix els requisits";
    missatge.classList.add("alert-danger");
    missatge.classList.remove("alert-success");
  }
}

function validaClauDePas(){
    const camp=document.getElementById("txtClauDePas").value;
    const missatge=document.getElementById("mClauDePas");
    console.log(camp.length);
    console.log(camp);
    if(camp.length<8){
        missatge.innerHTML="Falten "+(8-camp.length)+ " caracters<br>";
    }else{
        missatge.innerHTML="";
    }

    if(!camp.match(/\d+/)){
        missatge.innerHTML+="Falta afegir un número<br>";
    };
    
    if(!camp.match(/[a-z]+/)){
        missatge.innerHTML+="Falta afegir una lletra minúscula<br>";
    };
    if(!camp.match(/[A-Z]+/)){
        missatge.innerHTML+="Falta afegir una lletra majúscula<br>";
    };
    if(!camp.match(/[^a-z0-9]+/i)){
        missatge.innerHTML+="Falta afegir un caracter especial<br>";
    };

}

// function validaIniciSessio() {
//   const usuari = document.getElementById("txtUsuari").value;
//   console.log(usuari);
//   const clauDePas = document.getElementById("txtClauDePas").value;
//   console.log(clauDePas);
//   const missatge = document.getElementById("txtMissatge");

//   let patro = /^[a-zA-Z0-9]+$/;
//   let resultat = usuari.match(patro);
//   if (resultat) {
//     missatge.classList.remove("alert-danger");
//   } else {
//     missatge.classList.add("alert-danger");
//   }

//   if (!usuari.trim() || !clauDePas.trim()) {
//     return "Algun dels dos camps està buit";
//   }
// }
