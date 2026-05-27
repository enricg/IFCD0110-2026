async function carregarComponent(id, fitxer) {
  const resposta = await fetch(fitxer);
  const contingut = await resposta.text();
  document.getElementById(id).innerHTML = contingut;
}

// carregarComponent("previa","./components/previa.html");
carregarComponent("header","./components/header.html");
carregarComponent("nav","./components/nav.html");
carregarComponent("footer","./components/footer.html");