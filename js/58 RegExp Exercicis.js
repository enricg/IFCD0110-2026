// Funció per validar exercici
function exerciciBool(pSolucio, pText, pPatro, pMissatgeOK, pMissatgeNOK) {
  const solucio = document.getElementById(pSolucio);
  let text = document.getElementById(pText).value;

  let textpatro = pPatro;
  const patro = new RegExp(textpatro);
  let resultat = text.match(patro);

  if (resultat) {
    solucio.innerText = missatgeOK;
    solucio.classList.replace("missatgeNOK", "missatgeOK");
  } else {
    solucio.innerText = missatgeNOK;
    solucio.classList.replace("missatgeOK", "missatgeNOK");
  }
}

function exerciciValors(pSolucio, pText, pPatro) {
  const solucio = document.getElementById(pSolucio);
  let text = document.getElementById(pText).value;

  let textpatro = pPatro;
  const patro = new RegExp(textpatro);
  let resultat = text.match(patro);

  solucio.innerText = resultat;
}

creaElement(titol,enunciat){
    // const exercici= document.getElementById("principal");
    const nouExercici=document.createElement("div");
    nouExercici.classList.add("exercici");
    const titol=document.createElement("div");
    titol.classList.add("titol");
    titol.textContent=titol;
    const enunciat=document.createElement("div");
    enunciat.classList.add("enunciat");
    enunciat.textContent=enunciat;
    // const entrada=document.createElement("input");
    // const executa=document.createElement("button");
    // const solucio=document.createElement("div");
    nouExercici.appendChild(titol);
    nouExercici.appendChild(enunciat);
}

// Exercici 1
document.getElementById("btn1").addEventListener("click", function () {
  exerciciBool("sol1","txt1","\\w+@\\w+\\.\\w{2,6}","email vàlid","email NO vàlid");
});

// Exercici 2
document.getElementById("btn2").addEventListener("click", function () {
  exerciciValors("sol2", "txt2", "(\\d{3})\\d{3}-\\d{4}");
});
