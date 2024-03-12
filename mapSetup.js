// Initialize the Leaflet map
// Improved Initialize the Leaflet map function with configurable options

const initializeMap = (lat, lng, zoom, apiKey) => {
  const map = L.map("map").setView([lat, lng], zoom);
  L.tileLayer(
    `https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${apiKey}`,
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>',
      maxZoom: 19,
    }
  ).addTo(map);
  return map;
};

// Map marker data

// Consider this markers array could be fetched from an API
const markers = [
  {
    position: [53.31246, -6.25951],
    iconUrl: "images/one.png",
    title: "Sensory Stop 1: Lavender",
    description: "Location and details about Lavender.",
    imageUrl: "images/lavender.png",
  },
  // Add more marker configurations here
];

// Function to add markers to the map

// Function to add markers to the map with error handling
const addMarkersToMap = (map, markers) => {
  try {
    markers.forEach((marker) => {
      const customIcon = L.icon({
        iconUrl: marker.iconUrl,
        iconSize: [30, 30],
      });

      L.marker(marker.position, { icon: customIcon })
        .addTo(map)
        .bindPopup(generatePopupContent(marker));
    });
  } catch (error) {
    console.error("Failed to add markers to the map:", error);
  }
};

// Main function to setup the map with improved error handling and async loading
const setupMap = async () => {
  try {
    const map = initializeMap(
      53.312263396,
      -6.25992187,
      20,
      "your_api_key_here"
    );
    addMarkersToMap(map, markers);
  } catch (error) {
    console.error("Failed to initialize the map:", error);
  }
};

document.addEventListener("DOMContentLoaded", setupMap);
