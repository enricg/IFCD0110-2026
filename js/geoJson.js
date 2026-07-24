$(document).ready(function () {
  /*************************************************************/
  /** ESTAT GLOBAL DEL MÒDUL ************************************/
  /*************************************************************/

  let dades = "";
  let marker; // marcador de la cerca de ciutat
  let temporitzador;

  const inputCiutat = document.getElementById("ciutat");
  const divResultat = document.getElementById("resultat");

  // 1. Inicialitzem el mapa UNA sola vegada (centrat en una vista global)
  //    preferCanvas: dibuixa tots els marcadors en un únic <canvas> en lloc
  //    de crear un element SVG per cadascun -> molt més ràpid amb molts punts
  const map = L.map("map", { preferCanvas: true }).setView([20, 0], 2);

  // Capa base OpenStreetMap
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // 2. Grup de capes amb CLUSTERING per als marcadors carregats des dels fitxers
  const capaDades = L.markerClusterGroup({
    chunkedLoading: true,
    chunkInterval: 200, // ms de marge que es dona al navegador entre lots
    chunkDelay: 50,
    spiderfyOnMaxZoom: false, // amb 70k punts, "desplegar" tots a un clic pot ser molt pesat
  }).addTo(map);

  carregarOpcióSelect();

  /*************************************************************/
  /** LISTENERS ***************************************************/
  /*************************************************************/

  // Cerca de ciutat amb un petit retard (debounce) mentre l'usuari escriu
  if (inputCiutat) {
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
  }

  // Selector de l'arxiu de dades a mostrar al mapa
  $("#select-fitxers").change(async function () {
    const rutaFitxer = $(this).val();
    if (!rutaFitxer) {
      capaDades.clearLayers();
      return;
    }

    dades = await llegirArxiu(rutaFitxer);
    processarDadesMapa(dades);
  });

  /*************************************************************/
  /** FUNCIONS ******************************************************/
  /*************************************************************/

  // Cerca les coordenades d'una ciutat i les mostra al mapa
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
        divResultat.innerHTML = `
          <strong>${nomComplet}</strong><br><br>
          📍 <strong>Latitud:</strong> ${lat}<br>
          📍 <strong>Longitud:</strong> ${lon}
        `;

        map.setView([lat, lon], 12);

        if (marker) {
          marker.setLatLng([lat, lon]);
        } else {
          marker = L.marker([lat, lon]).addTo(map);
        }

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

  // Omple el selector amb la llista d'arxius disponible a DATA/arxius.json
  async function carregarOpcióSelect() {
    const selectFitxers = document.getElementById("select-fitxers");
    if (!selectFitxers) return;

    try {
      const response = await fetch("./DATA/arxius.json");
      if (!response.ok) {
        throw new Error("No s'ha pogut carregar l'arxiu arxius.json");
      }

      const llistaFitxers = await response.json();

      selectFitxers.innerHTML =
        '<option value="">-- Selecciona un arxiu --</option>';

      llistaFitxers.forEach((fitxer) => {
        const option = document.createElement("option");
        option.value = `./DATA/${fitxer.arxiu}`;
        option.textContent = fitxer.arxiu;
        selectFitxers.appendChild(option);
      });
    } catch (error) {
      console.error("Error carregant el JSON d'arxius:", error);
      selectFitxers.innerHTML =
        '<option value="">Error en carregar els arxius</option>';
    }
  }

  // Llegeix un arxiu (CSV o JSON) i el retorna com a array d'objectes
  async function llegirArxiu(arxiu) {
    try {
      const resposta = await fetch(arxiu);
      if (!resposta.ok) {
        throw new Error(`No s'ha pogut carregar l'arxiu: ${arxiu}`);
      }

      const text = await resposta.text();

      if (arxiu.endsWith(".csv")) {
        return csvToJson(text);
      }
      return JSON.parse(text);
    } catch (e) {
      alert(e);
      return [];
    }
  }

  // Converteix un CSV en array d'objectes {capçalera: valor}
  function csvToJson(csv) {
    const files = csv.trim().split("\n");
    if (files.length < 2) return [];

    const capçalera = files[0].split(",").map((h) => h.trim());

    return files.slice(1).map((linia) => {
      const valors = linia.split(",");
      const obj = {};
      capçalera.forEach((header, i) => {
        obj[header] = valors[i] ? valors[i].trim() : "";
      });
      return obj;
    });
  }

  // Recorre les dades carregades i afegeix un marcador per cadascuna
  function processarDadesMapa(dades) {
    capaDades.clearLayers(); // netegem els marcadors del fitxer anterior

    if (!Array.isArray(dades) || dades.length === 0) return;

    const marcadors = [];
    let minLat = Infinity, maxLat = -Infinity;
    let minLon = Infinity, maxLon = -Infinity;

    for (const element of dades) {
      const lat = parseFloat(element.Latitud);
      const lon = parseFloat(element.Longitud);

      if (Number.isNaN(lat) || Number.isNaN(lon)) continue;

      marcadors.push(crearMarcador(lat, lon, element));

      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
    }

    if (marcadors.length === 0) return;

    // Ajustem la vista immediatament amb els límits calculats,
    // sense esperar que el clustering acabi d'afegir els marcadors
    map.fitBounds(
      [
        [minLat, minLon],
        [maxLat, maxLon],
      ],
      { padding: [30, 30] }
    );

    // addLayers (plural) afegeix tots els marcadors d'un cop de manera
    // molt més eficient que cridar addLayer un per un dins d'un bucle
    capaDades.addLayers(marcadors);
  }

  // Crea un marcador (sense afegir-lo encara al mapa) a partir d'unes coordenades
  function crearMarcador(lat, lon, element) {
    const marcador = L.circleMarker([lat, lon], {
      radius: 6,
      weight: 1,
      color: "#2563eb",
      fillColor: "#3b82f6",
      fillOpacity: 0.8,
    });

    // Generem el contingut del popup NOMÉS quan l'usuari fa clic,
    marcador.bindPopup("");
    marcador.on("popupopen", () => {
      const contingutPopup = Object.entries(element)
        .map(([clau, valor]) => `<strong>${clau}:</strong> ${valor}`)
        .join("<br>");
        marcador.setPopupContent(contingutPopup);
        log(contingutPopup);
    });

    return marcador;
  }
});