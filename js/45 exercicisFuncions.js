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

function sumarRang(inicial, final) {
  let suma = 0;
  for (inicial; inicial <= final; inicial++) {
    suma = suma + inicial;
  }
  return suma;
}

// console.log(sumarRang(4,8));
// console.log(sumarRang(1,4));

// ## 9. Número de as (lletra "a")

// Escriure una funció anomenada `numeroDeAes` que rebi un string i retorni el nombre de vegades que apareix la lletra "a":

function numeroDeAes(cadena) {
  let numero = 0;
  for (i = 0; i < cadena.length; i++) {
    if (cadena[i].toLowerCase() == "a") {
      numero++;
    }
  }
  return "El número de aes és: " + numero;
}
// console.log(numeroDeAes("Hola que tal, avui és dimarts i encara falten tres dies per acabar la setmana"));

// ## 10. Nombre de caràcters

// Escriure una funció anomenada `numeroDeCaracters` que rebi un string i un caràcter (un string d'un caràcter). La funció ha de retornar el nombre de vegades que apareix el caràcter a l'string.

function numeroDeCaracters(cadena, lletra) {
  let comptador = 0;
  for (i = 0; i < cadena.length; i++) {
    if (lletra == cadena[i]) {
      comptador++;
    }
  }
  return 'El text "' + cadena + '" conté ' + comptador + " " + lletra;
}

// console.log(numeroDeCaracters("Hola Món", "o")) // 2
// console.log(numeroDeCaracters("MMMMM", "m")) // 0
// console.log(numeroDeCaracters("eeee", "e")) // 4
// console.log(numeroDeCaracters("Hola bon dia que tal va la vida","v"));

// ## 11. Sumar array

// Escriure una funció anomenada `sumarArray` que rebi un array de números i retorni la suma de tots els elements.

function sumarArray(llista) {
  let resultat = 0;
  for (const numero of llista) {
    //manera A
    resultat += numero;
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

function multiplicarArray(llista) {
  let resultat = 1;
  for (const numero of llista) {
    resultat *= numero;
  }
  return resultat;
}

// console.log(multiplicarArray([4, 1, 2, 3])) // 24
// console.log(multiplicarArray([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArray([])) // 1

// ## 13. Treure zeros

// Escriure una funció anomenada `treureZeros` que rebi un array de números i retorni un nou array excloent els zeros (0).

function treureZeros(llista) {
  const novaLlista = [];
  for (element of llista) {
    if (element != 0) {
      novaLlista.push(element);
    }
  }
  return novaLlista;
}

// console.log(treureZeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
// console.log(treureZeros([9, 3, 6, 4])) // [9, 3, 6, 4]
// console.log(treureZeros([0, 0, 0])) // []

// ## 14. Sumar array entre el rang

// Escriure una funció anomenada `sumarArray` que rebi tres arguments: un array de números, la posició inicial i la posició final. La funció ha de retornar la suma de tots els números dins del rang (la posició inicial i la posició final, incloent-les).

function sumarArray(llista, inicial, final) {
  let suma = 0;
  for (inicial; inicial <= final; inicial++) {
    suma += llista[inicial];
  }
  return suma;
}

// console.log(sumarArray([1, 2, 3], 1, 2)) // 5
// console.log(sumarArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
// console.log(sumarArray([7, 8, 9], 0, 0)) // 7

// ## 15. Transcriure ADN a ARN

// Escriure una funció anomenada `transcriure` que rebi un string (una cadena d'ADN) i retorni un altre string (el vostre complement ARN).

// Els complements són els següents:

// * G -> C
// * C -> G
// * T -> A
// * A -> U
function transcriure(cadena) {
  let cadenaSolucio = "";
  for (inicio = 0; inicio <= cadena.length; inicio++) {
    if (cadena[inicio] == "G") {
      cadenaSolucio += "C";
    }
    if (cadena[inicio] == "C") {
      cadenaSolucio += "G";
    }
    if (cadena[inicio] == "T") {
      cadenaSolucio += "A";
    }
    if ((cadena[inicio] = "A")) {
      cadenaSolucio += "U";
    }
  }
  return cadenaSolucio;
}

// console.log(transcriure("ACGT")) // "UGCA"
// console.log(transcriure("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

// ## 16. Capitalitzar primera paraula

// Escriure una funció anomenada `capitalitzar` que rebi un string i capitalitzi la primera lletra:

function capitalitzar(cadena) {
  if (cadena.length != 0) {
    return cadena[0].toUpperCase() + cadena.slice(1);
  }
  return " ";
}

// console.log(capitalitzar("pedro")) // "Pedro"
// console.log(capitalitzar("hola món")) // "Hola món"
// console.log(capitalitzar("")) // ""

// ## 17. Capitalitzar cada paraula

// Escriure una funció anomenada `capitalitzar` que rebi un string i capitalitzi la primera lletra **de cada paraula**:

function capitalitzar(cadena) {
  let cadenaSolucio = "";
  // for(i=0; i<cadena.length;i++){
  //   if(i==0 || cadena[i-1]==" "){
  //     cadenaSolucio+=cadena[i].toUpperCase();
  //   }else{
  //     cadenaSolucio+=cadena[i];
  //   }
  // }
  let llista = cadena.split(" ");
  if (cadena.length != 0) {
    for (element of llista) {
      cadenaSolucio += element[0].toUpperCase() + element.slice(1) + " ";
    }
  }
  return cadenaSolucio;
}

// console.log(capitalitzar("hola món")); // "Hola Món"
// console.log(capitalitzar("make it real")); // "Make It Real"
// console.log(capitalitzar("")); // ""

// ## 18. Trobar el número màxim

// Escriure una funció anomenada `max` que rebi un array de números i retorni el nombre màxim:
function max(llista) {
  let maxim = 0;
  for (element of llista) {
    if (maxim < element) {
      maxim = element;
    }
  }
  return maxim;
}

// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9

// ## 19. Trobar el número mínim

// Escriure una funció anomenada `min` que rebi un array de números i retorni el nombre mínim:

function min(llista) {
  let minim = llista[0];
  for (element of llista) {
    if (element < minim) {
      minim = element;
    }
  }
  return minim;
}

// console.log(min([3, 9, 6])); // 3
// console.log(min([67, 35, 54, 26])); // 26
// console.log(min([5, 9, 2, 4, 5, 7])); // 2

// ## 20. Generar contrasenya

// Escriure una funció anomenada `password` que rebi un string i retorni un nou string realitzant els canvis següents:

// * Les majúscules es reemplacen per minúscules.
// * S'eliminen els espais en blanc.
// * Reemplaça el caràcter “a” per “4”.
// * Reemplaça el caràcter “e” per “3”.
// * Reemplaça el caràcter “i” per “1”.
// * Reemplaça el carater “o” per “0”.

function password(cadena) {
  let novaCadena = "";
  cadena = cadena.toLowerCase();
  for (i = 0; i < cadena.length; i++) {
    if (cadena[i] == "a") {
      novaCadena += "4";
    } else {
      if (cadena[i] == "e") {
        novaCadena += "3";
      } else {
        if (cadena[i] == "i") {
          novaCadena += "1";
        } else {
          if (cadena[i] == "o") {
            novaCadena += "0";
          } else {
            if (cadena[i] != " ") {
              novaCadena += cadena[i];
            }
          }
        }
      }
    }
  }
  return novaCadena.toLowerCase();
}

function password2(cadena) {
  let novaCadena = "";
  for (i = 0; i < cadena.length; i++) {
    switch (cadena[i]) {
      case "a":
        novaCadena += "4";
        break;
      case "e":
        novaCadena += "3";
        break;
      case "i":
        novaCadena += "1";
        break;
      case "o":
        novaCadena += "0";
        break;
      case " ":
        break;
      default:
        novaCadena += cadena[i];
    }
  }
  return novaCadena;
}

// console.log(password2("hola")); // "h0l4"
// console.log(password2("Esta es una prueba")); // "3st43sun4pru3b4"
// console.log(password2("")); // ""

// ## 21. Trobar números parells en un array

// Escriure una funció anomenada `parells` que rebi un array de números i retorni un nou array amb els números parells únicament.

function parells(llista) {
  let numerosParells = [];
  for (element of llista) {
    if (element % 2 == 0) {
      numerosParells.push(element);
    }
  }
  return numerosParells;
}

// console.log(parells([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
// console.log(parells([])) // []

// ## 22. Trobeu posicions de números parells

// Escriviu una funció anomenada `posicions` que rebi un array de números i retorneu un nou array **a les posicions** on es troben números parells.

function posicions(numeros) {
  let posicionsParells = [];
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      posicionsParells.push(i);
    }
  }
  return posicionsParells;
}

// console.log(posicions([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
// console.log(posicions([])) // []

// ## 23. Duplicar elements d'un array

// Escriu una funció anomenada `duplicar` que rep un array de números i retorna un nou array on cada número estigui multiplicat per dos (2).

function duplicar(llista) {
  let duplicats = [];
  // for (nomquevulguis of llista) {
  for(i=0;i<llista.length;i++){
    // duplicats.push(nomquevulguis * 2);
    duplicats.push(llista[i] * 2);
  }
  return(duplicats);
}

// console.log(duplicar([1, 2, 3])); // [2, 4, 6]
// console.log(duplicar([])); // []

// ## 24. Trobeu paraules que comencin per "a"
// Escriu una funció anomenada `comencenPerA` que rebi un array d'strings i retorna un nou array amb totes les paraules que comencin per "a" (majúscula o minúscula).

function comencenPerA(llista){
  let paraulesAmbA=[];
  for(paraula of llista){
    if(paraula[0].toLowerCase()=="a"){
      paraulesAmbA.push(paraula);
    }
  }
  return paraulesAmbA;
}

// console.log(comencenPerA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
// console.log(comencenPerA(["beta", "delta", "gama"])) // []
// console.log(comencenPerA([])) // []

// ## 25. Trobeu paraules que acabin en "s"

// Escriu una funció anomenada `acabenAmbS` que rep un array d'strings i retorna un nou array amb totes les paraules que acaben amb "s" (majúscula o minúscula).
function acabenAmbS(paraules){
  let novaLlista=[];
  for(paraula of paraules){
    //if(paraula.at(-1).toLowerCase()=="s"){
    if(paraula[paraula.length-1].toLowerCase()=="s"){
      novaLlista.push(paraula);
    }
  }
  return novaLlista;
}

console.log(acabenAmbS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(acabenAmbS(["beta", "delta", "gama"])) // []
console.log(acabenAmbS([])) // []

// ## 26. Imprimir una matriu

// Escriu una funció anomenada `imprimirMatriu` que rep una matriu (un array d'arrays) i imprimeixi tots els elements de l'array.

// console.log(imprimirMatriu([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]))

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// ## 27. Traduir números a paraules

// Escriu una funció llamada `numerosAParaules` que rep un array de números (cada número en el rang de 0 a 9) i retorna un nou array convertint cada número a la seva versió en paraules.

// console.log(numerosAParaules([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
// console.log(numerosAParaules([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

// ## 28. Traduir paraules a números

// Escriu una funció llamada `paraulesANumeros` que rep un array de strings i retorna un nou array traduïnt cada paraula a la seva versió numèrica (del 0 al 9). Si la paraula no és un nombre traduir a -1.

// console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
// console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]

// ## 29. Número d'asteriscs en un array

// Escriviu una funció de anomenada `numAsteriscs` que rep un array i retorneu el nombre d'asteriscs:

// console.log(numAsteriscs(['', '*', '', '*'])) // 2
// console.log(numAsteriscs(['*', '*', '*'])) // 3
// console.log(numAsteriscs([])) // 0

// ## 30. Número d'asteriscs en una matriu

// Escriviu una funció anomenada `numAsteriscs` que rep una matriz (un array de arrays) i retorneu el nombre d'asteriscs:

// console.log(numAsteriscs([
//   ['*', '', '*'],
//   ['', '*', ''],
//   ['*', '', '*']
// ])) // 5

// ## 31. Distància entre dos strings

// Escriviu una funció de anomenada `distància` que rebi dos strings i retorni el nombre de caràcters diferents (comparant la posició per posició).

// **Nota:** Podeu assumir que els strings sempre tenen la mateixa longitud. En canvi, si voleu afegir més dificultat podeu pensar cómo solucionar-ho si una cadena és més llarga que l'atra (la diferència entre les longituds s'afegiria al resultat).

// codi de prova
// console.log(distancia("hola", "hola")) // 0
// console.log(distancia("sol", "tol")) // 1
// console.log(distancia("carro", "correr")) // 3
