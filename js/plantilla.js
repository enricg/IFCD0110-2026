window.addEventListener("load", function () {
  crearSeccions(["Inici", "Serveis", "Projectes", "Contacte", "Hola"]);
});

// Crea les seccions, que es passen com una llista
function crearSeccions(llistaSeccions) {
  // En comptes d'utilitzar createElement, el mètode createDocumentFragment evita repintar el el DOM
  const fragContainer = document.createDocumentFragment();
  const fragResponsive = document.createDocumentFragment();
  const fragPrincipal = document.createDocumentFragment();

  llistaSeccions.forEach((nomSeccio) => {
    // Container
    const aContainer = document.createElement("a");
    aContainer.className = "list-group-item";
    aContainer.href = `#${nomSeccio}`;
    aContainer.textContent = nomSeccio;
    fragContainer.appendChild(aContainer);

    // Responsive
    const aResp = aContainer.cloneNode(true);
    aResp.setAttribute("data-bs-dismiss", "offcanvas");
    fragResponsive.appendChild(aResp);

    // Principal (secció)
    const color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    const section = document.createElement("section");
    section.id = nomSeccio;
    section.style.background = color;
    section.innerHTML = `<h2>${nomSeccio}</h2>`;
    fragPrincipal.appendChild(section);
  });

  document.getElementById("container").appendChild(fragContainer);
  document.getElementById("responsive").appendChild(fragResponsive);
  document.getElementById("principal").appendChild(fragPrincipal);
}
