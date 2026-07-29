// const menus=document.getElementById("menu");

// menus.addEventListener("click",function(e){
//     console.log(e);
//     document.getElementById("resultat").innerText=e.target.innerText;
// })

// const opcionsMenu=document.querySelectorAll("li");
// for(element of opcionsMenu){
//     element.addEventListener("click",function(e){
//         console.log(e);
//     }
// )};

const cos=document.getElementsByTagName("body");
console.log(cos[0]);
cos[0].addEventListener("click",function(e){
    document.getElementById("resultat").innerText=e.target.nodeName;
})