let cadena = "";

function afegir(caracter) {
  if (isFinite(caracter) || isFinite(cadena[cadena.length - 1])) {
    cadena += caracter;
  } else {
    cadena = cadena.substring(0, cadena.length - 1);
    cadena += caracter;
  }
  document.getElementById("display").value = cadena;
}

// function calcular(){
//     try{
//         let cadena = sessionStorage.getItem("resultat");
//     document.getElementById("display").value=eval(cadena);
//     }catch(e){
//         alert("Alguna cosa no ha anat bé");
//     }
// }

alerta = (missatge) => alert(missatge);

calcular = () => {
  try {
    document.getElementById("display").value = eval(cadena);
  } catch (e) {
    //alert("Alguna cosa no ha anat bé");
    alerta("Hola bon dia");
  }
};

function netejar(opcio) {
  switch (opcio) {
    case "C":
      esborraTot();
      break;
    case "CE":
      //console.log("CE");
      esborraOperador();
      break;
    case "<":
      //console.log("<");
      esborraCaracter();
      break;
  }
}

function esborraTot() {
    console.log("Valor de la cadena abans de esborrar: "+cadena);
  cadena = "";
  console.log("Valor de la cadena després de esborrar: "+cadena);
  document.getElementById("display").value = "";
}

function esborraCaracter() {
  let cadena = sessionStorage.getItem("resultat");
  console.log("valor de la cadena abans del if: "+cadena);
  if (cadena.length > 0) {
    cadena=cadena.substring(0, cadena.length - 1);
    document.getElementById("display").value = cadena;
  } else {
    alert("No hi ha més digits per esborrar!");
  }
}
