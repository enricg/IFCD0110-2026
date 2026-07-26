window.addEventListener("load", function () {
  novaSeccio("Inici");
  novaSeccio("Serveis");
  novaSeccio("Projectes");
  novaSeccio("Contacte");
});

function novaSeccio(nomSeccio) {
  const contenidor = document.getElementById("container");
  // Menú mode normal
  const enllaç = document.createElement("a");
  enllaç.classList.add("list-group-item");
  enllaç.href = "#" + nomSeccio;
  enllaç.innerText = nomSeccio;
  contenidor.appendChild(enllaç);
  // Menú mode responsiu
  const responsiu = document.getElementById("responsive");
  const enllaçResp = document.createElement("a");
  enllaçResp.classList.add("list-group-item");
  enllaçResp.href = "#" + nomSeccio;
  enllaçResp.innerText = nomSeccio;
  enllaçResp.setAttribute("data-bs-dismiss", "offcanvas");
  responsiu.appendChild(enllaçResp);
  // Color aleatori
  const color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  // Pàgina
  const pagina = document.getElementById("principal");
  const seccio = document.createElement("section");
  const titol = document.createElement("h2");
  titol.innerText = nomSeccio;
  seccio.id = nomSeccio;
  seccio.style.background = color;
  seccio.appendChild(titol);
  pagina.appendChild(seccio);
}
