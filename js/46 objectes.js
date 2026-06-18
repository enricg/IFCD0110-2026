const cotxe={
    marca: "Mercedes",
    model: "A18",
    color: "Negre",
    direccioAssistida: false,
    hibrid: false,
    preu: 60000,
    numPortes: 5/*,
    modeliMarca: function(){
        return this.model + " " + this.marca;
    }*/
};

//console.log(cotxe.marca);
//document.write(cotxe.marca);
document.getElementById("marca").innerText="Marca: "+cotxe.marca;
document.getElementById("model").innerText="Model: "+cotxe.model;
document.getElementById("model").innerHTML+="<br>Color: "+cotxe.color;
document.getElementById("model").innerHTML+="<br>Direcció assistida: "+(cotxe.direccioAssistida?"Sí":"No");
document.getElementById("model").innerHTML+="<br>És híbrid: "+(cotxe.hibrid?"Sí":"No");
document.getElementById("preu").innerHTML="Status: "+
(cotxe.preu<15000?"Utilitari":(cotxe.preu<50000?"SUV":"Luxury"));

cotxe.color="Blanc"; // modifiquem el valor
document.getElementById("nouColor").innerHTML="Color nou: "+cotxe.color;

cotxe.tipusCombustible="Diesel";
document.getElementById("nouColor").innerHTML+="<br>Tipus de combustible: "+cotxe.tipusCombustible;

document.getElementById("nouColor").innerHTML+="<br>Preu del vehicle: "+cotxe["preu"];

// document.getElementById("nouColor").innerHTML+="<br>El model i marca: "+cotxe.modeliMarca();

delete cotxe.model; // Podem eliminar atributs d'un objecte
console.log(cotxe.model);

let result = ("sabor" in cotxe);
console.log(result);

let caracteristiques= "";
for(let posicioAtribut in cotxe){
    caracteristiques+=cotxe[posicioAtribut]+", ";
};

document.getElementById("totalCaracteristiques").innerHTML=caracteristiques;

let cadena = JSON.stringify(cotxe);
console.log("Format JSON");
console.log(cotxe);
console.log("Format String");
console.log(cadena);

function Person(first, last, age, eye) {
  Person.firstName = first;
  Person.lastName = last;
  Person.age = age;
  Person.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

console.log(myFather);