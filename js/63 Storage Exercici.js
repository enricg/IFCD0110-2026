// event quan es carrega la pàgina, recupera el mode
window.addEventListener("load",function(){
    if(localStorage.mode){
        console.log(localStorage.mode);
        canviaAparença(localStorage.mode);
    }
})

// event clic a botó de mode clar/obscur
const bMode = document.getElementById("btnMode");
bMode.addEventListener("click",function(){
    if(localStorage.mode=="clar"){
        localStorage.mode="fosc";
        bMode.innerText="Mode Clar";
    }else{
        localStorage.mode="clar";
        bMode.innerText="Mode Obscur";
    }
    canviaAparença(localStorage.mode);
    console.log(localStorage.mode);
})

function canviaAparença(mode){
    const cap=document.getElementById("idHeader");
    if(mode=="clar"){
        cap.classList.remove("fosc");
        cap.classList.add("clar");
    }else{
        cap.classList.remove("clar");
        cap.classList.add("fosc");
    }
}