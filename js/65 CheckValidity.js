// checkValidity()
 function valida1(){
    const in1=document.getElementById("ex1");
    console.log(in1.checkValidity());
    if(!in1.checkValidity()){
        document.getElementById("resposta1").innerText=in1.validationMessage;
    }else{document.getElementById("resposta1").innerText="";}
}

// rangeOverflow
function valida2(){
    const in2=document.getElementById("ex2");
    let text="Valor correcte";
    console.log(in2.validity.rangeOverflow);
    if(in2.validity.rangeOverflow){
        text="T'has passat del límit";
    }
    document.getElementById("resposta2").innerText=text;
}

// pattern
function valida3(){
    const in3=document.getElementById("ex3");
    console.log(in3.checkValidity());
    console.log(in3);
    in3.pattern="[A-Z]+";
    console.log(in3);
    console.log(in3.checkValidity());
}