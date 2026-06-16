/*
## 1. Contrasenya vàlida

Escriure una funció anomenada `contrasenyaValida` que rebi un string i retorni `true` si el string és igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". En cas contrari ha de retornar `false`).
*/
function contrasenyaValida(contrasenya) {
  if (contrasenya == "2Fj(jjbFsuj" || contrasenya == "eoZiugBf&g9") {
    return true;
  } else {
    return false;
  }
}

// codi de prova
// console.log(contrasenyaValida("2Fj(jjbFsuj")) // true
// console.log(contrasenyaValida("eoZiugBf&g9")) // true
// console.log(contrasenyaValida("hola")) // false
// console.log(contrasenyaValida("")) // false

/*
## 2. Calcular impostos

Escriure una funció anomenada `calcularImpostos` que rebi dos arguments numèrics: `edat` i `ingressos`. Si `edat` és igual o major a 18 i els ingressos són iguals o majors a 1000 ha de retornar `ingressos` * 40%. En cas contrari retornar 0.
*/

function calcularImpostos(edat, ingressos) {
  if (edat >= 18 && ingressos >= 1000) {
    return ingressos * 0.4;
  } else {
    return 0;
  }
}

// codi de prova
// console.log(calcularImpostos(18, 1000)) // 400
// console.log(calcularImpostos(40, 10000)) // 4000
// console.log(calcularImpostos(17, 5000)) // 0
// console.log(calcularImpostos(30, 500)) // 0

/*
## 3. IMC (índex de massa corporal)

L'índex de massa corporal (IMC), o BMI per les sigles en anglès, és un valor que determina la quantitat de greix d'una persona.

El BMI es calcula amb la fórmula següent: `pes / altura^2`

Escriure una funció anomenada `bmi` que rebi dos arguments: pes i altura, i retorni un string amb les possibilitats següents:

* "Baix de pes" si el BMI < 18.5
* "Normal" si està entre 18.5 i 24.9
* "Sobrepès" si està entre 25 i 29.9
* "Obès" si és igual o major a 30
*/

function bmi(pes, altura) {
  let bmiN = pes / altura ** 2;
  if (bmiN < 18.5) {
    return "Baix de pes";
  } else {
    if (bmiN < 24.9) {
      return "Normal";
    } else {
      if (bmiN < 29.9) {
        return "Sobrepès";
      } else {
        return "Obès";
      }
    }
  }
}

// codi de prova
// console.log(bmi(65, 1.8)) // "Normal"
// console.log(bmi(72, 1.6)) // "Sobrepes"
// console.log(bmi(52, 1.75)) //  "Baix de pes"
// console.log(bmi(135, 1.7)) // "Obès"

// ## 4. Imprimir un array

// Escriure una funció anomenada `imprimirArray` que rebi un array i imprimeixi cada element en una línia a part

function imprimirArray(llista) {
  // Recòrrer una col·lecció d'elements
  for (const elementDeLlista of llista) {
    console.log(elementDeLlista);
  }
  // Recòrrer a partir d'un índex
  console.log("Intentem fer el recorregut utilitzant un índex");
  for (i = 0; i < llista.length; i++) {
    console.log(llista[i]);
  }
}

// imprimirArray([1, "Hola", 2, "Món"]);

// ## 5. Número de Likes

// Escriu una funció anomenada `likes` que rebi un número i retorni un string utilitzant el format de K per a milers i M per a milions.

// Per exemple:

// * 1400 es converteix en 1K
// * 34,567 es converteix en 34K
// * 7,456,345 es converteix en 7M.

// Si el nombre és menor a 1000, s'ha de tornar el mateix nombre com un string.

function likes(numero) {
  if (numero < 1000) {
    console.log(numero); //imprimir el número
  } else {
    if (numero < 1000000) {
      console.log((numero / 1000).toPrecision(2) + "K"); // imprimir en K mantenint decimals
      // console.log(Math.trunc(numero/1000)+"K"); // imprimir en K
    } else {
      console.log(Math.trunc(numero / 1000000).toPrecision(2) + "M"); // imprimir en M
    }
  }
}

// likes(523);
// likes(2796);
// likes(1205325);

// ## 6. FizzBuzz

// Escriure una funció anomenada `fizzBuzz` que rebi un número i retorni un string d'acord amb el següent:

// * "fizz" si el nombre és múltiple de 3.
// * "buzz" si el nombre és múltiple de 5.
// * "fizzbuzz" si el nombre és múltiple tant de 3 com de 5.
// * Si no compleix cap de les condicions anteriors ha de retornar el mateix número.

function fizzBuzz(numero) {
  // let cadena="";
  // if(numero%3==0){
  //   cadena+="fizz";
  // }
  // if(numero%5==0){
  //   cadena+="Buzz";
  // }
  // if(cadena==""){return numero}
  // return cadena;

  // Mètode David 1
  // if(numero%3==0 && numero%5==0){return "fizzBuzz"}
  // if(numero%3==0){return "fizz"}
  // if(numero%5==0){return "buzz"}
  // return numero;

  let resultat = "";
  if (numero % 3 == 0) {
    resultat = "fizz";
  }
  if (numero % 5 == 0) {
    resultat = "buzz";
  }
  if (numero % 3 == 0 && numero % 5 == 0) {
    resultat = "fizzbuzz";
  }
  if (numero % 3 != 0 && numero % 5 != 0) {
    resultat = numero;
  }
  return resultat;
}

// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

// ## 7. Comptar rang de números

// Escriure una funció anomenada `comptarRang` que rebi dos números i retorni quants n'hi ha entre ells (excloent-los):

function comptarRang(numeroInferior, numeroSuperior) {
  let comptador = 0;
  // manera recorrent els números que hi ha entre dos números
  for (numeroInferior++; numeroInferior < numeroSuperior; numeroInferior++) {
    comptador++;
  }
  return comptador;
}
// console.log(comptarRang(5, 12));

// ## 8. Sumar rang de números

// Escriure una funció anomenada `sumarRang` que rebi dos arguments: nombre inicial i nombre final. La funció ha de retornar la suma dels nombres en aquest rang (incloent-los).

function sumarRang(inicial,final){
  let suma=0;
  for(inicial;inicial<=final;inicial++){
    suma=suma+inicial;
  }
  return suma;
}

// console.log(sumarRang(4,8));
// console.log(sumarRang(1,4));

// ## 9. Número de as (lletra "a")

// Escriure una funció anomenada `numeroDeAes` que rebi un string i retorni el nombre de vegades que apareix la lletra "a":

function numeroDeAes(cadena){
  let numero=0;
  for(i=0;i<cadena.length;i++){
    if(cadena[i].toLowerCase()=="a"){
      numero++;
    }
  }
  return "El número de aes és: " + numero;
}
// console.log(numeroDeAes("Hola que tal, avui és dimarts i encara falten tres dies per acabar la setmana"));

// ## 10. Nombre de caràcters

// Escriure una funció anomenada `numeroDeCaracters` que rebi un string i un caràcter (un string d'un caràcter). La funció ha de retornar el nombre de vegades que apareix el caràcter a l'string.

function numeroDeCaracters(cadena,lletra){
  let comptador=0;
  for(i=0;i<cadena.length;i++){
    if(lletra==cadena[i]){
      comptador++;
    }
  }
  return "El text \""+cadena+"\" conté "+comptador+" "+lletra;
}

// console.log(numeroDeCaracters("Hola Món", "o")) // 2
// console.log(numeroDeCaracters("MMMMM", "m")) // 0
// console.log(numeroDeCaracters("eeee", "e")) // 4
// console.log(numeroDeCaracters("Hola bon dia que tal va la vida","v"));

// ## 11. Sumar array

// Escriure una funció anomenada `sumarArray` que rebi un array de números i retorni la suma de tots els elements.

function sumarArray(llista){
  let resultat=0;
  for(const numero of llista){ //manera A
    resultat+=numero; 
    // resultat=resultat+numero;
  }
  // for(i=0;i<llista.length;i++){ //manera B
  //   resultat+=llista[i]; 
  // }
  return resultat;
}

// console.log(sumarArray([3, 1, 2])) // 6
// console.log(sumarArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArray([])) // 0

// ## 12. Multiplicar array

// Escriure una funció anomenada `multiplicarArray` que rebi un arranjament de números i retorni la multiplicació de tots els elements.

function multiplicarArray(llista){
  let resultat=1;
  for(const numero of llista){
    resultat*=numero; 
  }
  return resultat;
}

// console.log(multiplicarArray([4, 1, 2, 3])) // 24
// console.log(multiplicarArray([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArray([])) // 1

// ## 13. Treure zeros

// Escriure una funció anomenada `treureZeros` que rebi un array de números i retorni un nou array excloent els zeros (0).

