const capçalera = document.getElementById("titol");

document.addEventListener(onload, carregaIdioma(navigator.language));

function tradueix(index) {
  const titol = document.getElementById("titol");
  titol.innerHTML = idiomes[index].titol;
}

function carregaIdioma(idioma) {
  switch (idioma) {
    case "ca-CA":
      tradueix(0);
      break;
    case "es-ES":
      tradueix(1);
      break;
    case "en-US":
      tradueix(2);
      break;
    default:
      tradueix(0);
  }
}
