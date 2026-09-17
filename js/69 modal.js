function obrirModal(){
    const finestra = document.getElementById("dialogo");
    // finestra.style.width="600px";
    // finestra.style.height="600px";
    // finestra.open=true;
    finestra.showModal();
    const cos =document.getElementById("cos");
    // cos.classList.add("enfosquir");
    
}

function tancarModal(){
    const finestra = document.getElementById("dialogo");
    // finestra.open=false;
    finestra.close();
    const cos =document.getElementById("cos");
    cos.classList.remove("enfosquir");

}