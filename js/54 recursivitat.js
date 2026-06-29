function comptaEnrera(numero){
    if(numero<0){
        return;
    }
    console.log(numero);
    comptaEnrera(numero-1)
}

//comptaEnrera(5);

let resultat=1;
function permuta(numero){
    if(numero<1){
        return;
    }
    resultat*=numero;
    console.log(resultat);
    permuta(numero-1);
}

//permuta(4);

function suma(num1,num2=10){
    return num1+num2;
}

console.log(suma(5,2));
console.log(suma(4));

function alumne(nom,cognom,ciutat="Vilafranca"){
    return "L'alumne és: "+nom+", de cognom: "+cognom+", i és resident a: "+ciutat;
}

console.log(alumne("Joan","Petit", "Badalona"));

console.log(alumne("Pep", "Jiménez"));