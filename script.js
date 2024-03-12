var map = L.map("map").setView([53.31214, -6.25954], 18);

var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 22,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var greenIcon = L.icon({
  iconUrl: "leaf-green.png",
  shadowUrl: "leaf-shadow.png",

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

L.marker([53.31214, -6.25954], { icon: greenIcon })
  .addTo(map)
  .bindPopup("<b>Hello world!</b><br />I am a popup.")
  .openPopup();

/*var circle = L.circle([53.31214, -6.25954], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(map).bindPopup('I am a circle.');*/

/*var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map).bindPopup('I am a polygon.');*/

var popup = L.popup()
  .setLatLng([53.31214, -6.25954])
  .setContent("I am a standalone popup.")
  .openOn(map);

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);

// Function to invalidate map size
function updateMapSize() {
  map.invalidateSize();
}

// Call updateMapSize when the window resizes
window.addEventListener("resize", updateMapSize);

// Initial call to ensure map size is correct on load
updateMapSize();

/* General scripts including the top of page button */

/* Scrool to top button */

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("backToTop");
  if (window.pageYOffset > 300) {
    // Show the button after 300px of scrolling
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
