class cotxe {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  edad() {
    const anyActual = new Date();
    return anyActual.getFullYear() - this.year;
  }
}

const cotxePersonal = new cotxe("SEAT", 2024);
const cotxeOscar = new cotxe("Audi", 2016);

// console.log(cotxe);
// console.log(cotxePersonal);
// console.log(cotxeOscar);
// document.getElementById("edad").innerHTML =
//   "l'edad del cotxe amb marca " +
//   cotxeOscar.name +
//   " és de " +
//   cotxeOscar.edad() +
//   " anys";

class animal {
  constructor(nom,pes,velocitat,color,edat,esperançaDeVida,especie,esPerillos,queMenjo,quiEmMenja,habitat) {
    // atributs
    this.nom = nom;
    this.pes = pes;
    this.velocitat = velocitat;
    this.color = color;
    this.edat = edat;
    this.esperançaDeVida = esperançaDeVida;
    this.especie = especie;
    this.esPerillos = esPerillos;
    this.queMenjo = queMenjo;
    this.quiEmMenja = quiEmMenja;
    this.habitat = habitat;
  }
  // mètodes
  correr() {
    return "La meva velocitat punta és " + this.velocitat * 4;
  }
  caminar() {
    return "Camino a " + this.velocitat + " km/h";
  }
  menjar() {
    let plats = "";
    for (let plat of this.queMenjo) {
      plats += plat + ", ";
    }
    return "Menjo " + plats;
  }
  amagarse() {
    return "Amb aquesta frase no saps quin animal sóc";
  }
  lluitar() {
    let enemics = "";
    for (let i=0;i<this.quiEmMenja.length;i++) {
      enemics += this.quiEmMenja[i];
      if(i<this.quiEmMenja.length-1){
        enemics+=", ";
      }
    }
    return "Em barallo amb els meus depredadors, que són: " + enemics;
  }
}

const cervol = new animal(
  "cèrvol",
  200,
  15,
  "marró",
  10,
  15,
  "mamífer",
  false,
  ["herves", "fruites", "insectes"],
  ["cocodril", "lleó", "pantera", "voltor"],
  "sabana",
);

console.log(cervol);
console.log(cervol.menjar());
console.log(cervol.amagarse());
console.log(cervol.lluitar());
