// Creem els exercicis amb el títol i l'enunciat
function creaExercicis() {
  let comptador = 1;

  // Recorrem l'array d'exercicis i creem els elements HTML corresponents
  exercicis.forEach((exercici) => {
    const nouExercici = document.createElement("div");
    nouExercici.classList.add("exercici");

    const titol = document.createElement("div");
    titol.classList.add("titol");
    titol.textContent = comptador + ". " + exercici.titol;
    nouExercici.appendChild(titol);

    const enunciat = document.createElement("div");
    enunciat.classList.add("enunciat");
    enunciat.textContent = exercici.enunciat;
    nouExercici.appendChild(enunciat);

    const entrada = document.createElement("input");
    entrada.type = "text";
    entrada.id = "txt" + comptador;
    nouExercici.appendChild(entrada);

    const boto = document.createElement("button");
    boto.id = "btn" + comptador;
    boto.textContent = "Executa";
    nouExercici.appendChild(boto);

    const solucio = document.createElement("div");
    solucio.id = "sol" + comptador;
    solucio.classList.add("missatgeOK");
    nouExercici.appendChild(solucio);

    document.getElementById("principal").appendChild(nouExercici);
    comptador++; // Incrementem el comptador per al següent exercici
  });
}

// Funció per validar exercici
function exercici(numExercici, txtPatro) {
  const solucio = document.getElementById("sol" + numExercici);
  let text = document.getElementById("txt" + numExercici).value;
  let resultat = text.match(txtPatro);

  switch (exercicis[numExercici - 1].tipusResposta) {
    case "boolea":
      resultat = txtPatro.test(text);
      break;
    case "llista":
      resultat = text.match(txtPatro);
      break;
    case "cadena":
      resultat = resultat ? resultat[0] : null;
      break;
    default:
      resultat = null;
  }

  if (resultat) {
    solucio.classList.replace("missatgeNOK", "missatgeOK");
    solucio.innerText = resultat;
  } else {
    solucio.classList.replace("missatgeOK", "missatgeNOK");
    solucio.innerText = false;
  }
}

// Listeners
// Esperem que el document estigui carregat abans de crear les etiquetes dels exercicis
document
  .getElementById("principal")
  .addEventListener("DOMContentLoaded", creaExercicis());

// Exercici 1
document.getElementById("btn1").addEventListener("click", function () {
  exercici(1, /\w+@\w+\.\w{2,6}/);
});

// Exercici 2
document.getElementById("btn2").addEventListener("click", function () {
  exercici(2, /\(\d{3}\)\d{3}-\d{4}/g);
});
