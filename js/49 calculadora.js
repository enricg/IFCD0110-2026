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

function canviaSigne() {
  if (cadena.length > 0) {
    if (cadena[0] === "-") {
      cadena = cadena.substring(1);
    } else {
      cadena = "-" + cadena;
    }
    document.getElementById("display").value = cadena;
  }
}

alerta = (missatge) => alert(missatge);

function mostrarError(missatge) {
  const display = document.getElementById("display");

  display.value = missatge;
  display.classList.add("is-invalid");
  display.style.fontSize = "0.8rem";

  setTimeout(() => {
    display.value = "";
    display.classList.remove("is-invalid");
    display.style.fontSize = "";
  }, 2000);
}

calcular = () => {
  try {
    document.getElementById("display").value = eval(cadena);
  } catch (e) {
    mostrarError("Alguna cosa no ha anat bé");
    cadena="";
  }
};

function netejar(opcio) {
  switch (opcio) {
    case "C":
      esborraTot();
      break;
    case "CE":
      //console.log("CE");
      // esborraOperador();
      break;
    case "<":
      esborraCaracter();
      break;
  }
}

function esborraTot() {
  cadena = "";
  document.getElementById("display").value = "";
}

function esborraCaracter() {
  if (cadena.length > 0) {
    cadena = cadena.substring(0, cadena.length - 1);
    document.getElementById("display").value = cadena;
  } else {
    alert("No hi ha més digits per esborrar!");
  }
}
