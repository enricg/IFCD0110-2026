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

function tornaEnrera(){
    window.history.back();
}

function tornaEndavant(){
    window.history.forward();
}

principal.innerHTML="cookies activades: "+navigator.cookieEnabled+"<br>Language: "+navigator.language+"<br>Està el navegador en linia? "+navigator.onLine+"<br>Navegador: "+navigator.appName+"<br>Agent: "+navigator.userAgent;

//alert("Ja falta poc per marxar");

if(confirm("Voleu marxar ja?")){
    alert("Deseu-ho tot i marxeu");
}else{
    alert("Teniu 10 minuts més per marxar");
}