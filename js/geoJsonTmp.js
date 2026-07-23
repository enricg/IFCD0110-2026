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
      .setContent("Has fet clic a " + e.latlng.toString())
      .openOn(map);
  }