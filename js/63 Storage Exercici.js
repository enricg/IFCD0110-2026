let colors; // colors per treballar
let llista = []; // variables de colors utilitzades
let llistaresultat = [];

// Carrega els colors de la llista
async function carregarColors(tema) {
  const dades = localStorage.getItem("colors");
  if (dades) {
    // en el cas que la llista es trobi al localStorage
    colors = JSON.parse(dades);
  } else {
    // si no es troba al localStorage, la llegim de l'arxiu extern i la guardem al localStorage
    try {
      const resposta = await fetch("./json/colors.json");
      if (!resposta.ok) {
        throw new Error("No s'ha pogut carregar el JSON");
      }
      colors = await resposta.json();
      localStorage.setItem("colors", JSON.stringify(colors));
    } catch (e) {
      console.error(e);
    } finally {
      actualitzarValorVariables(colors[tema]);
    }
  }
}

// Canvia el color de les variables
// Recorre tots els elements del JSON guardat a colors, i crea/actualitza les variables del CSS
function actualitzarValorVariables(objecte, prefix = "") {
  for (const [clau, valor] of Object.entries(objecte)) {
    // Si és un altre objecte, continuem baixant un nivell
    if (typeof valor === "object" && valor !== null) {
      let nouPrefix;
      if (prefix) {
        nouPrefix = prefix & "-" & clau;
      } else {
        nouPrefix = clau;
      }
      actualitzarValorVariables(valor, nouPrefix);
    } else {
      // Si és un valor (string, número, etc.), actualitzem la variable CSS
      if (prefix) {
        if (llista.includes("--" + prefix + "-" + clau)) {
          document.documentElement.style.setProperty(
            "--" + prefix + "-" + clau,
            valor,
          );
          llistaresultat.push("--" + clau);
        }
      } else {
        if (llista.includes("--" + clau)) {
          document.documentElement.style.setProperty("--" + clau, valor);
          llistaresultat.push("--" + clau);
        }
      }
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
  actualitzarValorVariables(colors[localStorage.mode]);
});

// Event que s'executa al carregar la pàgina
window.addEventListener("load", () => {
  if (!localStorage.mode) {
    localStorage.mode = "clar";
  }
  cercaestils();
  carregarColors(localStorage.mode);
});

// Event click pel botó d'eliminació de la Local Storage
const botoNeteja = document.getElementById("btnDelLocalStorage");
botoNeteja.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

function cercaestils() {
  const declaration = document.styleSheets[0].cssRules[0].style;
  for (estil of declaration) {
    llista.push(estil);
  }
}
