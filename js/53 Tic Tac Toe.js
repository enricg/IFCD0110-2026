const tauler= [["b","b","b"],["b","b","b"],["b","b","b"]];
let torn=0;

function inicialitza(){
    for(let i=0;i<=2;i++){
        for(let j=0;j<=2;j++){
            tauler[i][j]="b";
        }
    }
    torn=0;
}

inicialitza();

function tirada(coordenada){
    let fila=coordenada.charAt(0); // let fila=coordenada.substring(0,1);
    let columna=coordenada.charAt(1); // let columna=coordenada.substring(1,2);
    torn++;
    if(torn%2==0){
        tauler[fila][columna]="x";
        document.getElementById("p00").className+= " vermell";
    }else{
        tauler[fila][columna]="o";
        document.getElementById("p00").className+= " verd";
    }
    console.log(torn);
    console.log(tauler);
}