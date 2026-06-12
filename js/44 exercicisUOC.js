//1. Escriviu un programa d'una sola línia que faci que aparegui a la pantalla una alerta que digui “Hello World”.
// alert("Hello World");
//2. Escriviu un programa d'una sola línia que escrigui a la pantalla un text que digui “Hello World” (document.write).
// document.getElementById("ex02").innerText = "Hello World";
//3. Escriviu un programa d'una sola línia que escrigui a la pantalla el resultat de sumar 3 + 5.
// document.getElementById("ex03").innerText = 3 + 5;
//4. Escriviu un programa de dues línies que demani el nom de l'usuari amb un prompt i escrigui un text que digui “Hola //nomUsuari”.
// let nomUsuari = prompt("Escriu el teu nom?");
// document.getElementById("ex04").innerText = "Hola " + nomUsuari;
//5. Escriviu un programa de tres línies que demani un número, demani un altre número i escrigui el resultat de resum aquests dos números.
// let num1 = parseInt(prompt("Escriu el primer número"));
// let num2 = parseInt(prompt("Escriu el segon número"));
// document.getElementById("ex05").innerText = "El resultat és: " + (num1 + num2);

//6. Escriviu un programa que demani dos números i escrigui a la pantalla quin és el major.
// num1 = parseInt(prompt("Escriu el primer número"));
// num2 = parseInt(prompt("Escriu el segon número"));
// if (num1 > num2) {
//   document.getElementById("ex06").innerText = "El primer número és major";
// } else {
//   document.getElementById("ex06").innerText = "El segon número és major";
// }

//7. Escriviu un programa que demani 3 números i escrigui a la pantalla el major dels tres.
// let num1 = parseInt(prompt("Escriu el primer número"));
// let num2 = parseInt(prompt("Escriu el segon número"));
// let num3 = parseInt(prompt("Escriu el tercer número"));
// console.log("num1:"+num1+" num2: "+num2+" num3: "+num3);
// if (num1 > num2 && num1 > num3) {
//   document.getElementById("ex07").innerText = "El major és "+num1;
// }else{
//     if(num2>num1 && num2>num3){
//         document.getElementById("ex07").innerText = "El major és "+num2;
//     }else{
//         document.getElementById("ex07").innerText = "El major és "+num3;
//     }
// }

//8. Escriviu un programa que demani un número i digui si és divisible per 2.
// let numero = parseInt(prompt("Escriu el número"));
// if (numero % 2 == 0) {
//   document.getElementById("ex08").innerText =
//     "El numero " + numero + " és divisible per 2";
// } else {
//   document.getElementById("ex08").innerText =
//     "El numero " + numero + " NO és divisible per 2";
// }

//9. Escriviu un programa que demani una frase i escrigui quantes vegades apareix la lletra a.
// let frase = prompt("Escriu una frase");
// let nombreDeAs = 0;
// for (let index = 0; index < frase.length; index++) {
//   if (frase[index] == "a") {
//     nombreDeAs++;
//   }
// }
// document.getElementById("ex09").innerHTML =
//   "A la frase \"" + frase + "\" hi ha " + nombreDeAs + " a.<br>"+
//   'A la frase "' + frase + '" hi ha ' + nombreDeAs + " a.";

//10. Escriviu un programa que demani una frase i escrigui les vocals que apareixen.

// let frase = prompt("Escriu una frase");
// let vocals = "";
// let teA=false;
// let teE=false;
// let teI=false;
// let teO=false;
// let teU=false;
// for (i = 0; i < frase.length; i++) {
//   if (frase[i] == "a" && teA==false){
//     vocals += "a";
//     teA=true;
//   }
//   if (frase[i] == "e"&& teE==false) {
//     vocals += "e";
//     teE=true;
//   }
//   if (frase[i] == "i"&& teI==false) {
//     vocals += "i";
//     tei=true;
//   }
//   if (frase[i] == "o"&& teO==false) {
//     vocals += "o";
//     teO=true;
//   }
//   if (frase[i] == "u" && teU==false) {
//     vocals += "u";
//     teU=true;
//   }
// }
// console.log("La frase és: \"" +frase+ "\". I les vocals que apareixen són: "+vocals);

//11. Escriviu un programa que demani una frase i escrigui quantes lletres són vocals.
let frase = prompt("Escriu una frase");
let vocals = "";
let teA=false;
let teE=false;
let teI=false;
let teO=false;
let teU=false;
for (i = 0; i < frase.length; i++) {
  if (frase[i] == "a" && teA==false){
    vocals += "a";
    teA=true;
  }
  if (frase[i] == "e"&& teE==false) {
    vocals += "e";
    teE=true;
  }
  if (frase[i] == "i"&& teI==false) {
    vocals += "i";
    tei=true;
  }
  if (frase[i] == "o"&& teO==false) {
    vocals += "o";
    teO=true;
  }
  if (frase[i] == "u" && teU==false) {
    vocals += "u";
    teU=true;
  }
}
console.log("La frase és: \"" +frase+ "\". I les vocals que apareixen són: "+vocals);
//12. Escriviu un programa que demani una frase i escrigui quantes vegades apareixen cada una de les vocals.

//13. Escriviu un programa que demani un número i ens digui si és divisible per 2, 3, 5 o 7 (sólo cal comprobar si ho és per
// un //dels quatre).

//14. Afegir a l'exercici anterior que ens digui quin dels quatre és divisible (s'han de dir tots pels que és divisible).

//15. Escriviu un programa que mostri per pantalla els divisors d'un número donat.

//16 Escriviu un programa que mostri per pantalla els divisors comuns de dos números donats.

//17. Escriure un programa que ens digui si un número donat és primer (no és divisible per ningun altre número que no sigui ell mateix o la unitat).
