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
// let frase = prompt("Escriu una frase");
// let comptaVocals=0;
// for (i = 0; i < frase.length; i++) {
//   if (frase[i].toLowerCase() == "a" || frase[i].toLowerCase() == "e" || frase[i].toLowerCase() == "i" || frase[i].toLowerCase() == "o" || frase[i].toLowerCase() == "u") {
//     comptaVocals+=1;
//   }
// }
// console.log("La frase és: \"" +frase+ "\". Hi ha "+comptaVocals+" vocals.");
//12. Escriviu un programa que demani una frase i escrigui quantes vegades apareixen cada una de les vocals.
// let frase = prompt("Escriu una frase");
// let teA=0; let teE=0; let teI=0; let teO=0; let teU=0;
// for (i = 0; i < frase.length; i++) {
//   if (frase[i].toLowerCase() == "a"){
//     teA+=1; // teA=teA+1;
//   }
//   if (frase[i].toLowerCase() == "e") {
//     teE+=1; // teE=teE+1;
//   }
//   if (frase[i].toLowerCase() == "i") {
//     teI+=1; // teI=teI+1;
//   }
//   if (frase[i].toLowerCase() == "o") {
//     teO+=1; // teO=teO+1;
//   }
//   if (frase[i].toLowerCase() == "u") {
//     teU+=1; // teU=teU+1;
//   }
// }
// document.getElementById("ex12").innerHTML="A la frase: \""+frase+"\"<br>"+"Hi ha:<br>a: "+teA+"<br>e: "+teE+"<br>i: "+teI+"<br>o: "+teO+"<br>u: "+teU;

//13. Escriviu un programa que demani un número i ens digui si és divisible per 2, 3, 5 o 7 (només cal comprobar si ho és per un dels quatre).

// let numero=parseInt(prompt("Escriu un número per veure si és divisible per 2, 3, 5, o 7"));
// if(numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0){
//   document.getElementById("ex13").innerText="El número "+numero+" és divisible per 2, 3, 5, o 7";
// }else{
//   document.getElementById("ex13").innerText="El número "+numero+" NO és divisible per 2, 3, 5, ni 7";
// }

//14. Afegir a l'exercici anterior que ens digui quin dels quatre és divisible (s'han de dir tots pels que és divisible).
// let numero=parseInt(prompt("Escriu un número per veure si és divisible per 2, 3, 5, o 7"));
// let resposta="El número és: "+numero;
// if(numero%2==0){  resposta+="<br>És divisible per 2.";}
// if(numero%3==0){  resposta+="<br>És divisible per 3.";}
// if(numero%5==0){  resposta+="<br>És divisible per 5.";}
// if(numero%7==0){  resposta+="<br>És divisible per 7.";}
// document.getElementById("ex14").innerHTML=resposta;

//15. Escriviu un programa que mostri per pantalla els divisors d'un número donat.

// let numero=parseInt(prompt("Escriu un número i et diré els seus divisors"));
// let divisors="";
// for(i=1;i<=numero;i++){
//   if(numero%i==0){
//     divisors+=i+"<br>"
//   }
// }
// document.getElementById("ex15").innerHTML="Els divisors del número "+numero+" són: <br>"+divisors;

//16 Escriviu un programa que mostri per pantalla els divisors comuns de dos números donats.

// let numero1=parseInt(prompt("Escriu un número"));
// let numero2=parseInt(prompt("Escriu un segon número"));
// let divisorsComuns="";
// // busquem el número menor perquè aquest serà el potencial major comú
// let numeroMenor=0;
// if(numero1>numero2){  numeroMenor=numero2;}else{  numeroMenor=numero1;}
// for(i=1;i<=numeroMenor;i++){
//   if(numero1%i==0 && numero2%i==0){    divisorsComuns+=i+"<br>";  }
// }
// document.getElementById("ex16").innerHTML="Els divisors comuns entre el "+numero1+" i el "+numero2+" són:<br>"+divisorsComuns;

//17. Escriure un programa que ens digui si un número donat és primer (no és divisible per ningun altre número que no sigui ell mateix o la unitat).

// let numero=parseInt(prompt("Escriu el número que vols comprovar"));
// let esPrimer=true;
// for(let i=2;i<numero;i++){
//   if(numero%i==0){
//     esPrimer=false;
//   }
// }
// if(esPrimer==true){ // if(esPrimer==true){
//   document.getElementById("ex17").innerText="El número és primer";
// }else{
//   document.getElementById("ex17").innerText="El número NO és primer";
// }
