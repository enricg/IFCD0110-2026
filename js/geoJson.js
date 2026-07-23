$(document).ready(function () {
  let dades = "";
  let map;
  let popup;

  // Inicialització
  // function inicialitzarMapa(longitud, latitud, zoom) {
  //   map = L.map("map").setView([longitud, latitud], zoom);

  // afegirCapaMapa();
  //   afegirElements();
  //   afegirPopupInicial();
  //   activarEvents();
  // }
  // carregarFitxersData();
  carregarOpcióSelect();
  // Afegim el mapa base
  function afegirCapaMapa() {
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  }

  // Afegim els diferents elements
  function afegirElements() {
    // Marcador
    const marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    // Cercle
    const circle = L.circle([51.508, -0.11], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(map);
    circle.bindPopup("I am a circle.");

    // Polígon
    const polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]).addTo(map);

    polygon.bindPopup("I am a polygon.");
  }

  // Popup inicial
  function afegirPopupInicial() {
    L.popup()
      .setLatLng([51.513, -0.09])
      .setContent("I am a standalone popup.")
      .openOn(map);
  }

  // Activem els esdeveniments
  function activarEvents() {
    popup = L.popup();
    map.on("click", onMapClick);
  }

  // Quan es fa clic al mapa
  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }

  /*************************************************************/
  /** LISTENERS ************************************************/
  /*************************************************************/

  //   window.addEventListener("load", function () {
  //   cercaCoordenades();
  // inicialitzarMapa(41.9793006, 2.8199439, 13);
  llegirCSV();
  //   });

  $("#tCiutat").change(function () {
    console.log($("#tCiutat").val());
    // ubicaMapa();
  });

  $("#select-fitxers").change(function () {
    const rutaFitxer = $("#select-fitxers").val();
    if (!rutaFitxer) return;
    let dades;
    try {
      const response = fetch(rutaFitxer);
      console.log(response);
      // const response = await fetch(rutaFitxer);
      // if (!response.ok) throw new Error('Error en carregar el fitxer');
      // Comprovem l'extensió de l'arxiu
      // if (rutaFitxer.endsWith('.csv')) {
      // 1. Llegim com a text pla
      // const textCSV = await response.text();
      // 2. Executem la funció de conversió
      // dades = csvToJson(textCSV);
      // console.log('Fitxer CSV convertit a JSON:', dades);
      // } else if (rutaFitxer.endsWith('.json') || rutaFitxer.endsWith('.geojson')) {
      // 1. Recuperem les dades directament a la variable
      // dades = await response.json();
      // console.log('Dades JSON recuperades:', dades);
      // }
      // A partir d'aquí pots fer servir la variable 'dades' (per exemple, per pintar al mapa)
      // processarDadesMapa(dades);
    } catch (e) {
      console.error("S'ha produït un error en processar l'arxiu:", e);
    }
  });

  /*************************************************************/
  /** FUNCIONS *************************************************/
  /*************************************************************/

  function csvToJson(csv) {
    const fila = csv.trim().split("\n");
    const capçalera = fila[0].split(",");

    const resultat = fila.slice(1).map((line) => {
      const values = line.split(",");
      let obj = {};
      capçalera.forEach((header, i) => {
        obj[header.trim()] = values[i] ? values[i].trim() : "";
      });
      return obj;
    });
    return resultat;
  }

  async function llegirCSV() {
    try {
      const resposta = await fetch(
        "./DATA/241021_censcomercialbcn_opendata_2024_v5.csv",
      );
      // const texto = await resposta.text();
    } catch (e) {
      alert(e);
    }
    // let resultat = csvToJson(texto);
    // console.log(resultat);
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

// Escoltar els canvis a l'input amb debounce (500ms)
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

// const inputCarpeta = document.getElementById("carpeta");
const selectFitxers = document.getElementById("llista-fitxers");

async function carregarOpcióSelect() {
  const selectFitxers = document.getElementById("select-fitxers");
  if (!selectFitxers) return;

  try {
    // 1. Carreguem l'arxiu arxius.json
    const response = await fetch("./DATA/arxius.json"); // Canvia el camí si està a ./data/arxius.json

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
