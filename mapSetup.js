// Initialize the Leaflet map
const initializeMap = () => {
  const map = L.map("map").setView([53.312263396, -6.25992187], 20);
  L.tileLayer(
    "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=your_api_key_here",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>',
      maxZoom: 19,
    }
  ).addTo(map);
  return map;
};

// Sample marker data
const markers = [
  {
    position: [53.31246, -6.25951],
    iconUrl: "images/one.png",
    popupContent:
      "<h5>Sensory Stop 1: Lavender</h5><img src='images/lavender.png' width='280px'><p>Location and details about Lavender.</p>",
  },
  // Add more marker configurations here
];

// Function to add markers to the map
const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const customIcon = L.icon({
      iconUrl: marker.iconUrl,
      iconSize: [30, 30],
    });

    L.marker(marker.position, { icon: customIcon })
      .addTo(map)
      .bindPopup(marker.popupContent);
  });
};

// Main function to setup the map
const setupMap = () => {
  const map = initializeMap();
  addMarkersToMap(map, markers);
};

document.addEventListener("DOMContentLoaded", setupMap);
