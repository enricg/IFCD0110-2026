$(document).ready(function () {
  /*************************************************************/
  /** ESTAT GLOBAL DEL MÒDUL ************************************/
  /*************************************************************/

  let dades = null;
  let marker = null; // marcador de la cerca de ciutat
  let temporitzador = null;
  let cercaController = null; // Per cancel·lar peticions HTTP pendents

  // 1. Inicialitzem les seccions del DOM de cop (millor rendiment)
  crearSeccions(["Mapes", "Serveis", "Projectes", "Contacte", "Hola"]);
  $("#Mapes").append(seccioMapa());

  const inputCiutat = document.getElementById("ciutat");
  const divResultat = document.getElementById("resultat");

  // 2. Inicialitzem el mapa UNA sola vegada
  const map = L.map("map", { preferCanvas: true }).setView([20, 0], 2);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // 3. Grup de capes amb CLUSTERING
  const capaDades = L.markerClusterGroup({
    chunkedLoading: true,
    chunkInterval: 200,
    chunkDelay: 50,
    spiderfyOnMaxZoom: false,
  }).addTo(map);

  carregarOpcionsSelect();

  /*************************************************************/
  /** LISTENERS ***************************************************/
  /*************************************************************/

  // Cerca de ciutat amb debounce i cancel·lació de peticions antigues
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
      }, 400);
    });
  }

  // Selector de l'arxiu de dades a mostrar al mapa
  $("#select-fitxers").on("change", async function () {
    const rutaFitxer = $(this).val();
    capaDades.clearLayers();

    if (!rutaFitxer) return;

    dades = await llegirArxiu(rutaFitxer);
    processarDadesMapa(dades);
  });

  /*************************************************************/
  /** FUNCIONS DE DOM ******************************************/
  /*************************************************************/

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

  // Crea el contingut de la secció Mapa
  function seccioMapa() {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="camps-inline">
        <div class="field-group">
          <label for="ciutat">Escriu una ciutat:</label>
          <input type="text" id="ciutat" placeholder="Ex: Barcelona, Tòquio, Nova York..." />
        </div>
        <div class="field-group">
          <label for="select-fitxers">Tria un arxiu:</label>
          <select id="select-fitxers">
            <option value="">-- Carregant arxius... --</option>
          </select>
        </div>
      </div>
      <div class="resultat" id="resultat">Escriu una ciutat per veure-la al mapa.</div>
      <div id="map"></div>
    `;
    return card;
  }

  /*************************************************************/
  /** FUNCIONS DE DADES I MAPA ********************************/
  /*************************************************************/

  // Cerca les coordenades d'una ciutat amb AbortController
  async function cercaCoordenades(ciutat) {
    // Si hi ha una cerca anterior en curs, la cancel·lem
    if (cercaController) cercaController.abort();
    cercaController = new AbortController();

    divResultat.innerHTML = "Cercant coordenades...";

    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(ciutat)}`;
      const resposta = await fetch(url, { signal: cercaController.signal }); // si l'usuari escriu de pressa, es cancel·len les peticions HTTP pendents a Nominatim, reduint el tràfic de xarxa.
      const dadesGeo = await resposta.json();

      if (dadesGeo.length > 0) {
        const {
          lat: rawLat,
          lon: rawLon,
          display_name: nomComplet,
        } = dadesGeo[0];
        const lat = parseFloat(rawLat);
        const lon = parseFloat(rawLon);

        divResultat.innerHTML = `
          <strong>${nomComplet}</strong><br><br>
          📍 <strong>Latitud:</strong> ${lat} 📍 <strong>Longitud:</strong> ${lon}
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
      if (error.name !== "AbortError") {
        divResultat.innerHTML =
          "⚠️ Error en connectar amb el servei de geolocalització.";
        console.error(error);
      }
    }
  }

  // Carrega la llista de fitxers al dropdown
  async function carregarOpcionsSelect() {
    const selectFitxers = document.getElementById("select-fitxers");
    if (!selectFitxers) return;

    try {
      const response = await fetch("./DATA/arxius.json");
      if (!response.ok) throw new Error("No s'ha pogut carregar arxius.json");

      const llistaFitxers = await response.json();
      const fragment = document.createDocumentFragment();

      const defaultOpt = document.createElement("option");
      defaultOpt.value = "";
      defaultOpt.textContent = "-- Selecciona un arxiu --";
      fragment.appendChild(defaultOpt);

      llistaFitxers.forEach((fitxer) => {
        const option = document.createElement("option");
        option.value = `./DATA/${fitxer.arxiu}`;
        option.textContent = fitxer.arxiu;
        fragment.appendChild(option);
      });

      selectFitxers.innerHTML = "";
      selectFitxers.appendChild(fragment);
    } catch (error) {
      console.error("Error carregant el JSON d'arxius:", error);
      selectFitxers.innerHTML =
        '<option value="">Error en carregar els arxius</option>';
    }
  }

  // Llegeix arxiu (CSV o JSON)
  async function llegirArxiu(arxiu) {
    try {
      const resposta = await fetch(arxiu);
      if (!resposta.ok)
        throw new Error(`No s'ha pogut carregar l'arxiu: ${arxiu}`);

      const text = await resposta.text();

      if (arxiu.toLowerCase().endsWith(".csv")) {
        return { tipus: "csv", dades: csvToJson(text) };
      }

      const json = JSON.parse(text);
      const isGeoJSON =
        json.type === "FeatureCollection" || json.type === "Feature";

      return {
        tipus: isGeoJSON ? "geojson" : "json",
        dades: json,
      };
    } catch (e) {
      console.error("Error en llegir l'arxiu:", e);
      return { tipus: "desconegut", dades: [] };
    }
  }

  // Bucle d'alt rendiment per a CSVs
  function csvToJson(csv) {
    const linies = csv.trim().split(/\r?\n/);
    if (linies.length < 2) return [];

    const capçalera = linies[0].split(",").map((h) => h.trim());
    const totalLinies = linies.length;
    const resultat = new Array(totalLinies - 1);

    for (let i = 1; i < totalLinies; i++) {
      const valors = linies[i].split(",");
      const obj = {};
      for (let j = 0; j < capçalera.length; j++) {
        obj[capçalera[j]] = valors[j] ? valors[j].trim() : "";
      }
      resultat[i - 1] = obj;
    }

    return resultat;
  }

  // Processa les dades i afegeix els marcadors
  function processarDadesMapa(descarregat) {
    capaDades.clearLayers();

    if (!descarregat || !descarregat.dades) return;

    if (descarregat.tipus === "geojson") {
      processarGeoJSON(descarregat.dades);
      return;
    }

    const marcadors = [];
    const coordenades = [];

    for (let i = 0; i < descarregat.dades.length; i++) {
      const element = descarregat.dades[i];
      const lat = parseFloat(element.Latitud);
      const lon = parseFloat(element.Longitud);

      if (isNaN(lat) || isNaN(lon)) continue;

      marcadors.push(crearMarcador(lat, lon, element));
      coordenades.push([lat, lon]);
    }

    if (marcadors.length === 0) return;

    capaDades.addLayers(marcadors);
    map.fitBounds(coordenades, { padding: [30, 30] });
  }

  // Processa dades en format GeoJSON
  function processarGeoJSON(geojson) {
    if (
      !geojson ||
      (geojson.type !== "FeatureCollection" && geojson.type !== "Feature")
    )
      return;

    const capaGeoJSON = L.geoJSON(geojson, {
      pointToLayer: (feature, latlng) =>
        crearMarcador(latlng.lat, latlng.lng, feature.properties),
      onEachFeature: (feature, layer) => {
        if (feature.properties?.nom) {
          layer.bindPopup(feature.properties.nom);
        }
      },
    });

    const capesInternes = capaGeoJSON.getLayers();
    if (capesInternes.length === 0) return;

    // Afegeix les capes individuals al MarkerClusterGroup perquè el clustering funcioni correctament
    capaDades.addLayers(capesInternes);
    map.fitBounds(capaGeoJSON.getBounds(), { padding: [30, 30] });
  }

  // Crea un cercle marcador amb popups 'lazy'
  function crearMarcador(lat, lon, element) {
    const marcador = L.circleMarker([lat, lon], {
      radius: 6,
      weight: 1,
      color: "#2563eb",
      fillColor: "#3b82f6",
      fillOpacity: 0.8,
    });

    marcador.bindPopup("");
    marcador.once("popupopen", () => {
      const contingutPopup = Object.entries(element)
        .map(([clau, valor]) => `<strong>${clau}:</strong> ${valor}`)
        .join("<br>");
      marcador.setPopupContent(contingutPopup);
    });

    return marcador;
  }
});
