let nom = "Enric";
let cognom = "Giner";
let edat = 22;
let tincMascota = false;
let diesSetmana =["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"];

// Dues maneres de mostrar el mateix resultat per consola
console.log("El meu nom és: " + nom);
console.log("Els dies de la setmana són:"+ diesSetmana);
console.log("Avui és:"+ diesSetmana[6]);

// Mostrem els valors amb una finestra emergent
//window.alert("El meu nom és: " + nom);

// Mostra els valors dins de la pàgina web
//document.write(nom);

// Mostra els valors inserint el contingut a l'etiqueta cercada
document.getElementById("dades").innerHTML =
  "<p>El meu nom és <b>" + nom + "</b> i el meu cognom és <b>" + cognom + "</b><br>Tinc <b>"+edat+"</b> anys.<br>A la pregunta de si tinc mascota o no, la resposta és: <b>"+tincMascota+"</b></p>";
