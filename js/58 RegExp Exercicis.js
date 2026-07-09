// Creem els exercicis amb el títol i l'enunciat
function creaExercicis() {
  let comptador = 1;

  // Recorrem l'array d'exercicis i creem els elements HTML corresponents
  exercicis.forEach((exercici) => {
    // Creem un div per a cada exercici i li afegim la classe "exercici"
    const nouExercici = document.createElement("div");
    nouExercici.classList.add("exercici");

    // Creem el títol i l'afegim a l'exercici
    const titol = document.createElement("div");
    titol.classList.add("titol");
    titol.textContent = comptador + ". " + exercici.titol;
    nouExercici.appendChild(titol);

    // Creem l'enunciat i l'afegim a l'exercici
    const enunciat = document.createElement("div");
    enunciat.classList.add("enunciat");
    enunciat.innerHTML = exercici.enunciat;
    nouExercici.appendChild(enunciat);

    // Creem l'input de text i l'afegim a l'exercici
    const entrada = document.createElement("input");
    entrada.classList.add("form-control");
    entrada.type = "text";
    entrada.id = "txt" + comptador;
    nouExercici.appendChild(entrada);

    // Creem un paràgraf per mostrar missatges addicionals i l'afegim a l'exercici
    const extra = document.createElement("p");
    extra.classList.add("d-inline-flex");
    extra.classList.add("gap-1");
    nouExercici.appendChild(extra);

    // Creem el botó d'execució i l'afegim a l'exercici
    const boto = document.createElement("button");
    boto.id = "btn" + comptador;
    boto.classList.add("btn");
    boto.classList.add("btn-primary");
    boto.textContent = "Executa";
    extra.appendChild(boto);

    // Creem un botó addicional dins del paràgraf per a funcionalitats extra i l'afegim al paràgraf
    const botoExtra = document.createElement("button");
    botoExtra.classList.add("btn");
    botoExtra.classList.add("btn-primary");
    botoExtra.setAttribute("data-bs-toggle", "collapse");
    botoExtra.setAttribute("data-bs-target", "#collapseExample" + comptador);
    botoExtra.setAttribute("aria-expanded", "false");
    botoExtra.setAttribute("aria-controls", "collapseExample");
    botoExtra.textContent = "+info";
    extra.appendChild(botoExtra);

    const textExtra = document.createElement("div");
    textExtra.id = "collapseExample" + comptador;
    textExtra.classList.add("collapse");
    nouExercici.appendChild(textExtra);

    const tarjetaExtra = document.createElement("div");
    // tarjetaExtra.classList.add("card");
    // tarjetaExtra.classList.add("card-body");
    
    // Afegim la pista i les proves (si n'hia ha) dins del div de text addicional
    let pista = exercicis[comptador - 1].pista
      ? "Pista:<br>" + exercicis[comptador - 1].pista
      : "";
    let proves = exercicis[comptador - 1].proves
      ? "<br>Proves:<br>" + exercicis[comptador - 1].proves
      : "";
    tarjetaExtra.innerHTML = pista + proves;
    textExtra.appendChild(tarjetaExtra);

    // Creem el div per mostrar la solució i l'afegim a l'exercici
    const solucio = document.createElement("div");
    solucio.id = "sol" + comptador;
    solucio.classList.add("alert");
    solucio.classList.add("alert-light");
    nouExercici.appendChild(solucio);

    // Afegim l'exercici complet al div principal
    document.getElementById("principal").appendChild(nouExercici);
    comptador++; // Incrementem el comptador per al següent exercici
  });
}

// Funció per validar exercici
function exercici(numExercici, txtPatro) {
  const solucio = document.getElementById("sol" + numExercici);
  let text = document.getElementById("txt" + numExercici).value;

  switch (exercicis[numExercici - 1].tipusResposta) {
    case "boolea":
      resultat = txtPatro.test(text);
      break;
    case "llista":
      resultat = text.match(txtPatro);
      break;
    case "cadena":
      resultat = text.match(txtPatro);
      resultat = resultat ? resultat[0] : null;
      break;
    default:
      resultat = null;
  }

  if (resultat) {
    solucio.classList.replace("alert-danger", "alert-light");
    solucio.innerText = resultat;
  } else {
    solucio.classList.replace("alert-light", "alert-danger");
    solucio.innerText = false;
  }
}

// Listeners
// Esperem que el document estigui carregat abans de crear les etiquetes dels exercicis
document
  .getElementById("principal")
  .addEventListener("DOMContentLoaded", creaExercicis());

// Exercici 1
// test@example.com // true
// test.example.com // false
document.getElementById("btn1").addEventListener("click", function () {
  exercici(1, /\w+@\w+\.\w{2,}/);
});

// Exercici 2
document.getElementById("btn2").addEventListener("click", function () {
  exercici(2, /\(\d{3}\)\s?\d{3}-\d{4}/g);
});

// Exercici 3
document.getElementById("btn3").addEventListener("click", function () {
  exercici(3, /^\d{5}$/);
});

// Exercici 4
document.getElementById("btn4").addEventListener("click", function () {
  exercici(4, /(?<=\w+@)\w+\.\w+/);
});

// Exercici 5
document.getElementById("btn5").addEventListener("click", function () {
  exercici(5, /^(\d{16}|\d{4}\s\d{4}\s\d{4}\s\d{4})$/);
});

// Exercici 6
document.getElementById("btn6").addEventListener("click", function () {
  exercici(6, /#\w+/g);
});

// Exercici 7
document.getElementById("btn7").addEventListener("click", function () {
  exercici(7, /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/);
});

// Exercici 8
document.getElementById("btn8").addEventListener("click", function () {
  exercici(8, /^[\w,\s-]+\.[A-Za-z]{3}$/);
});

// Exercici 9
document.getElementById("btn9").addEventListener("click", function () {
  exercici(9, /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g);
});

