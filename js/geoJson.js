$(document).ready(function () {
  let dades = "";
  let map;
  let popup;

  // Inicialització
  function inicialitzarMapa(longitud, latitud, zoom) {
    map = L.map("map").setView([longitud, latitud], zoom);
    //   map = L.map("map").setView([41.9793006, 2.8199439], 13);

    afegirCapaMapa();
    //   afegirElements();
    //   afegirPopupInicial();
    //   activarEvents();
  }

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
    inicialitzarMapa(41.9793006, 2.8199439, 13);    
    llegirCSV();
//   });

  $("#tCiutat").change(function () {
    console.log($("#tCiutat").val());
    // ubicaMapa();
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
      const texto = await resposta.text();
    } catch (e) {
      alert(e);
    }
    let resultat = csvToJson(texto);
    console.log(resultat);
  }

  // async function cercaCoordenades(lloc) {
  //   try {
  //     let resposta = await fetch(
  //       "https://nominatim.openstreetmap.org/search?city=" +
  //         lloc +
  //         "&format=json",
  //     );
  //     let texto = await resposta.text();
  //     console.log(texto);
  //   } catch (e) {
  //     alert(e);
  //   }
  // }
});
