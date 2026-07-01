// Sessió 30/06/2026
//
//  let text = '{"empleats": ['+
// '{"nom":"Joan", "cognom":"Dau"},'+
// '{"nom":"Anna", "cognom":"Sentmenat"},'+
// '{"nom":"Pere", "cognom":"Jaume"}]}';

// console.log(text);
// const obj = JSON.parse(text);
// console.log(obj);

// document.getElementById("demo").innerHTML="Nom: <b>"+obj.empleats[1].nom+"</b> Cognom: "+obj.empleats[1].cognom;
const taula = document.getElementById("taula");
let capcalera = [];

async function carregaDades() {
  try {
    const resposta = await fetch("./JSON/2024_pad_imm_mdbas.json");
    const persones = await resposta.json();

    //recorrer el camps per a la capçalera
    // Object.keys(persones[0]).forEach((clau) => {
    //   capcalera.push(clau);
    // });

    // taula.innerHTML += "<tr>";
    // for (element of capcalera) {
    //   taula.innerHTML += `<th>${element}</th>`;
    // }
    // taula.innerHTML += "</tr>";

    //recorrem els elements del json
    persones.forEach((element) => {
        const registre = document.createElement("tr");
        const camp1=document.createElement("td").innerText=element.Nom_Districte;
        registre.appendChild(camp1);        
        camp2.innerText=element.Valor;
        registre.appendChild(camp1);
        taula.appendChild(registre);
    //   taula.innerHTML += "<tr>";
    //   taula.innerHTML +=
    //     "<td>" + element.Nom_Districte + "</td><td>" + element.Valor + "</td>";
      // taula.innerHTML+=`<td>${element.Nom_Districte}</td><td>${element.Valor}</td>`;
    //   taula.innerHTML += "</tr>";
    });
  } catch (e) {
    console.error("Error de càrrega ", e);
  }
}
function afegeixRegistre(){
    
}



carregaDades();
