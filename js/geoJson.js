$(document).ready(function () {
  let dades = "";
  let map;
  let popup;

  carregarOpcióSelect();

  /*************************************************************/
  /** LISTENERS ************************************************/
  /*************************************************************/

  // Per cercar l'arxiu de dades a mostrar al mapa
  $("#select-fitxers").change(async function () {
    const rutaFitxer = $("#select-fitxers").val();
    if (!rutaFitxer) return;
    // 1. Recuperem les dades directament a la variable
    dades = await llegirArxiu(rutaFitxer);
    // A partir d'aquí pots fer servir la variable 'dades' (per exemple, per pintar al mapa)
    processarDadesMapa(dades);
  });

  /*************************************************************/
  /** FUNCIONS *************************************************/
  /*************************************************************/

  function processarDadesMapa(dades) {
    // console.log(dades);
    for (element of dades) {
      afegirElement(element);
    }
  }

  function afegirElement(element) {
    console.log(element.Longitud);
    // const marker = L.marker([element.Latitud, element.Longitud]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    // const marker = L.marker([51.5, -0.09]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  }

  function csvToJson(csv) {
    const fila = csv.trim().split("\n");
    const capçalera = fila[0].split(",");

    const resultat = fila.slice(1).map((linia) => {
      const values = linia.split(",");
      let obj = {};
      capçalera.forEach((header, i) => {
        obj[header.trim()] = values[i] ? values[i].trim() : "";
      });
      return obj;
    });
    return resultat;
  }

  async function llegirArxiu(arxiu) {
    let resultat = "";
    try {
      const resposta = await fetch(arxiu);
      const texto = await resposta.text();
      // Comprovem l'extensió de l'arxiu
      if (arxiu.endsWith(".csv")) {
        resultat = csvToJson(texto);
      } else {
        resultat = texto;
        // resultat = await resposta.json();
      }
      return resultat;
    } catch (e) {
      alert(e);
    }
  }
});

const inputCiutat = document.getElementById("ciutat");
const divResultat = document.getElementById("resultat");
let temporitzador;
let marker; // Guardarà la referència del marcador

// 3. Inicialitzar el mapa (centrat en una vista global per defecte)
const map = L.map("map").setView([20, 0], 2);

// Carregar la capa de rajoles (tiles) d'OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Revisa els canvis a l'input amb un retard (500ms)
inputCiutat.addEventListener("input", () => {
  const nomCiutat = inputCiutat.value.trim();
  clearTimeout(temporitzador);

  if (nomCiutat.length < 2) {
    divResultat.innerHTML =
      "Escriu una ciutat per veure les coordenades i el mapa.";
    return;
  }

  temporitzador = setTimeout(() => {
    cercaCoordenades(nomCiutat);
  }, 500);
});

// A partir d'un nom de ciutat recupera les seves coordenades i ho mostra al mapa
async function cercaCoordenades(ciutat) {
  divResultat.innerHTML = "Cercant coordenades...";

  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(ciutat)}`;
    const resposta = await fetch(url);
    const dades = await resposta.json();

    if (dades.length > 0) {
      const lat = parseFloat(dades[0].lat);
      const lon = parseFloat(dades[0].lon);
      const nomComplet = dades[0].display_name;

      // Mostrar informació en text
      divResultat.innerHTML = `
            <strong>${nomComplet}</strong><br><br>
            📍 <strong>Latitud:</strong> ${lat}
            📍 <strong>Longitud:</strong> ${lon}
          `;

      // 4. Moure el mapa a la nova posició amb zoom 12
      map.setView([lat, lon], 12);

      // 5. Moure o crear el marcador
      if (marker) {
        marker.setLatLng([lat, lon]);
      } else {
        marker = L.marker([lat, lon]).addTo(map);
      }

      // Afegir una finestra emergent (popup) al marcador
      marker.bindPopup(`<b>${nomComplet}</b>`).openPopup();
    } else {
      divResultat.innerHTML = "❌ No s'ha trobat cap ciutat amb aquest nom.";
    }
  } catch (error) {
    divResultat.innerHTML =
      "⚠️ Error en connectar amb el servei de geolocalització.";
    console.error(error);
  }
}

// Omple el selector per escollir l'arxiu de dades a mostrar
async function carregarOpcióSelect() {
  const selectFitxers = document.getElementById("select-fitxers");
  if (!selectFitxers) return;
  try {
    // 1. Carreguem l'arxiu arxius.json
    const response = await fetch("./DATA/arxius.json"); // json que conté llista d'arxius
    if (!response.ok) {
      throw new Error("No s'ha pogut carregar l'arxiu arxius.json");
    }
    // 2. Convertim la resposta a JSON
    const llistaFitxers = await response.json();
    // 3. Netejem el select
    selectFitxers.innerHTML =
      '<option value="">-- Selecciona un arxiu --</option>';
    // 4. Afegim cada element al select

    llistaFitxers.forEach((fitxer) => {
      const option = document.createElement("option");
      option.value = `./data/${fitxer}`; // RUTA on es troba el fitxer real
      option.textContent = fitxer; // Text visible al menú
      selectFitxers.appendChild(option);
    });
  } catch (error) {
    console.error("Error carregant el JSON d'arxius:", error);
    selectFitxers.innerHTML =
      '<option value="">Error en carregar els arxius</option>';
  }
}
