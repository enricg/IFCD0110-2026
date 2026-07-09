const principal = document.getElementById("principal");
// principal.innerHTML =
//   "Window:<br>Alçada: " +
//   window.innerHeight +
//   " px<br>Amplada: " +
//   window.innerWidth +
//   " px.<br>Screen:<br>Alçada: " +
//   screen.height +
//   "<br>Amplada: " +
//   screen.width +
//   "<br>Profunditat de color: " +
//   screen.colorDepth +
//   ". Es a dir: " +
//   2 ** screen.colorDepth +
//   " colors.<hr>Location<br>location.href: " +
//   window.location.href.replace("%20", " ") +
//   "<br>Hostname: " +
//   window.location.hostname+"<br>Pathname: "+window.location.pathname+"<br>Protocol: "+window.location.protocol+"<br>Port: "+window.location.port;

//window.close();
//window.open("https://www.google.com");
// const obre=window.open("https://www.google.com","","height=800,width=500");
//obre.moveTo(1500,1000);
//window.location.assign("https://www.google.com");

// function tornaEnrera(){
//     window.history.back();
// }

// function tornaEndavant(){
//     window.history.forward();
// }

// principal.innerHTML="cookies activades: "+navigator.cookieEnabled+"<br>Language: "+navigator.language+"<br>Està el navegador en linia? "+navigator.onLine+"<br>Navegador: "+navigator.appName+"<br>Agent: "+navigator.userAgent;

//alert("Ja falta poc per marxar");

// if(confirm("Voleu marxar ja?")){
//     alert("Deseu-ho tot i marxeu");
// }else{
//     alert("Teniu 10 minuts més per marxar");
// }

// alert("Hola, bon dia");

// if(confirm("Estàs segur que vols desar les dades?")){
//     // fa algunes accions
//     console.log("Ha triat Acceptar");
// }else{
//     // fa altres accions
//     console.log("Ha triat Cancelar");
// }

// let resposta=prompt("Quin és el teu color preferit?","Negre");
// console.log(resposta);
// if(resposta){
//     console.log("Has entrat "+resposta);
// }else{
//     console.log("no has entrat res");
// }
// let resposta=prompt("Quin és el teu color preferit?","Negre");
// while(!resposta){
//     console.log("entra algo!!!!");
//     resposta=prompt("Quin és el teu color preferit?","Negre");
// }
// console.log(resposta);
// alert("Hola\nBon dia a tothom");

// function mostraMissatge(){
//     alert("Bon dia amb alegria");
// }

// let comptaEnrera=setInterval(temps,1000);
// let horaActual=setInterval(temps2,1000);
// let comptador=10;
// function temps2(){
//     const d = new Date();
//     document.getElementById("hora").innerHTML="L'hora actual és: "+d.toLocaleTimeString();
// }
// function temps(){
//     document.getElementById("comptaEnrera").innerHTML="Queden  "+comptador+" segons";
//     comptador--;
//     if(comptador==0){
//         clearInterval(comptaEnrera);
//     }
// }

document.cookie="usuari1=Enric Giner";
document.cookie="usuari2=Pepito Grillo;expires=Thu,9 Jul 2026 11:00:00 UTC";
// principal.innerHTML=document.cookie;
// document.cookie="usuari2=Manolo Gafotas";
// console.log(document.cookie);
// let llista = document.cookie.split(";");
// console.log(llista);
// let galeta=getCookie("usuari1");
// console.log(galeta);