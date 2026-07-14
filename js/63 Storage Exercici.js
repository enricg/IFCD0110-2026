let colors;

async function carregarColors(tema) {
  const dades = localStorage.getItem("colors");
  if (dades) {
    colors = JSON.parse(dades);
  } else {
    try {
      const resposta = await fetch("./json/colors.json");
      if (!resposta.ok) {
        throw new Error("No s'ha pogut carregar el JSON");
      }
      colors = await resposta.json();
      localStorage.setItem("colors", JSON.stringify(colors));
    } catch (e) {
        console.error(e);
    }finally{
        aplicarTema(tema);
    }
  }
}

// Canvia el color de les variables
function aplicarTema(tema) {
  const t = colors[tema];
   aplicarVariables(colors[tema]);

//   document.documentElement.style.setProperty("--capcalera-fons", t.capcalera.fons);
//   document.documentElement.style.setProperty("--fons", t.fons);
//   document.documentElement.style.setProperty(
//     "--text-principal",
//     t.text.principal,
//   );
//   document.documentElement.style.setProperty(
//     "--text-secundari",
//     t.text.secundari,
//   );
//   document.documentElement.style.setProperty(
//     "--color-primari",
//     t.primari["500"],
//   );
//   document.documentElement.style.setProperty("--boto-primari", t.boto.primari);
}

function aplicarVariables(objecte, prefix = "") {

    for (const [clau, valor] of Object.entries(objecte)) {

        // Si és un altre objecte, continuem baixant un nivell
        if (typeof valor === "object" && valor !== null) {

            const nouPrefix = prefix
                ? `${prefix}-${clau}`
                : clau;

            aplicarVariables(valor, nouPrefix);

        } else {

            // Si és un valor (string, número, etc.), creem la variable CSS
            document.documentElement.style.setProperty(
                `--${prefix}-${clau}`,
                valor
            );

        }
    }
}

// Event que respon al clic del botó per canviar el mode clar/fosc
document.getElementById("btnMode").addEventListener("click", () => {
  const txtBoto = document.getElementById("btnMode");
  if (localStorage.mode === "clar") {
    localStorage.mode = "fosc";
    txtBoto.innerText = "Canviar a mode clar";
  } else {
    localStorage.mode = "clar";
    txtBoto.innerText = "Canviar a mode obscur";
  }
  aplicarTema(localStorage.mode);
});

// Event que s'executa al carregar la pàgina
window.addEventListener("load", () => {
  console.log(localStorage.mode);
  if (!localStorage.mode) {
    localStorage.mode = "clar";
  }
  carregarColors(localStorage.mode);
});
