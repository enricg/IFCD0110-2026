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
console.log(contrasenyaValida("2Fj(jjbFsuj")) // true
console.log(contrasenyaValida("eoZiugBf&g9")) // true
console.log(contrasenyaValida("hola")) // false
console.log(contrasenyaValida("")) // false

/*
## 2. Calcular impostos

Escriure una funció anomenada `calcularImpostos` que rebi dos arguments numèrics: `edat` i `ingressos`. Si `edat` és igual o major a 18 i els ingressos són iguals o majors a 1000 ha de retornar `ingressos` * 40%. En cas contrari retornar 0.
*/

function calcularImpostos(edat,ingressos){
    if(edat>=18 && ingressos>=1000){
        return ingressos*.4;
    }else{
        return 0;
    }
}

// codi de prova
console.log(calcularImpostos(18, 1000)) // 400
console.log(calcularImpostos(40, 10000)) // 4000
console.log(calcularImpostos(17, 5000)) // 0
console.log(calcularImpostos(30, 500)) // 0

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

function bmi(pes, altura){
  let bmiN=pes/altura**2;
  if(bmiN<18.5){
    return "Baix de pes";
  }else{
    if(bmiN<24.9){
      return "Normal";
    }else{
      if(bmiN<29.9){
        return "Sobrepès";
      }else{
        return "Obès";
      }
    }
  }
}

// codi de prova
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepes"
console.log(bmi(52, 1.75)) //  "Baix de pes"
console.log(bmi(135, 1.7)) // "Obès"