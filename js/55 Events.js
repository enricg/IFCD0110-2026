const contenidor = document.getElementById("principal");

function creaFigura(){
//    contenidor.innerHTML+=
//    "<br><div style='background-color:#555555; width:100px; height:100px;'></div>";
// "<br><div class='figura'></div>"
    const figura = document.createElement("div");
    figura.classList.add("figura");
    contenidor.appendChild(figura);
}

function destruirFigura(){
    const llista=document.querySelectorAll(".figura");

    for(element of llista){
        contenidor.removeChild(element);
        
    }
}

const boto3=document.getElementById("boto3");
boto3.addEventListener("click",creaFigura);