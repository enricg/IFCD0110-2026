async function carregarComponent(id, fitxer) {
  const resposta = await fetch(fitxer);
  const contingut = await resposta.text();
  document.getElementById(id).innerHTML = contingut;
}

carregarComponent("accordionSidebar","./partials/menu.html");