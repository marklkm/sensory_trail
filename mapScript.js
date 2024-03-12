// Initialize the map
// Provost's Garden 53.34360 / -6.25778
var map = L.map("map").setView([53.312263396, -6.25992187], 20);

// Add a tile layer (OpenStreetMap)
L.tileLayer(
  "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=fa39f1df414d4dc1ab5bf1323d4b6d09",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>',
    maxZoom: 19,
  }
).addTo(map);

// Function to create detailed popups with paragraphs
function createPopup(descriptionArray, photo, audio) {
  var descriptionHTML = descriptionArray
    .map((desc) => `<p>${desc}<\/p>`)
    .join("");
  return `
        <div style="max-width: 300px;">
            <h4><\/h4>
            ${descriptionHTML}
            <img src='${photo}' width='280px' style="margin-top: 10px;"><br>
        <\/div>`;
}

function onMarkerHover(e) {
  var latLng = e.target.getLatLng();
  var tooltipContent = `Lat: ${latLng.lat.toFixed(
    4
  )}, Lng: ${latLng.lng.toFixed(4)}`;
  e.target.bindTooltip(tooltipContent).openTooltip();
}

/* MAP ICONS */

// Function to create icons dynamically
function createIcon(iconUrl, iconSize = [80, 80]) {
  return L.icon({
    iconUrl: iconUrl,
    iconSize: iconSize,
    shadowUrl: "",
  });
}

// Dynamic icon creation
const oneIcon = createIcon("images/one.png");
const twoIcon = createIcon("images/two.png");
const threeIcon = createIcon("images/three.png");
const fourIcon = createIcon("images/four.png");
const fiveIcon = createIcon("images/five.png");
const sixIcon = createIcon("images/six.png");
const sevenIcon = createIcon("images/seven.png");
const eightIcon = createIcon("images/eight.png");
const nineIcon = createIcon("images/nine.png");
const tenIcon = createIcon("images/ten.png");
const elevenIcon = createIcon("images/eleven.png");
const twelveIcon = createIcon("images/twelve.png");
const thirteenIcon = createIcon("images/thirteen.png");
const fourteenIcon = createIcon("images/fourteen.png");
const fifteenIcon = createIcon("images/fifteen.png");
const sixteenIcon = createIcon("images/sixteen.png");
const seventeenIcon = createIcon("images/seventeen.png");
const eighteenIcon = createIcon("images/eighteen.png");
const nineteenIcon = createIcon("images/nineteen.png");
const flowerIcon = createIcon("images/quiet_space.png");
const officeIcon = createIcon("images/office.png");
const busIcon = createIcon("images/140_bus.png");
const cowperIcon = createIcon("images/cowper_luas.png");
const greenhouseIcon = createIcon("images/greenhouse.png");
const phsIconIcon = createIcon("images/phsicon.png");
const botanicIcon = createIcon("images/botanic_gardens.png");
const trinityhallIconIcon = createIcon("images/trinity_hall.png");
const trinitycollegeIcon = createIcon("images/trinity_college.png");

/* END OF MAP ICONS */

/* MAP DESCRIPTIONS */

/* #1 DESCRIPTIONS */

var descriptions1 = ["<h6>Sensory Stop 1: Lavender</h6>"];

var marker1 = L.marker([53.31246, -6.25951], { icon: oneIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions1,
      "images/lavender.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #2 DESCRIPTION */

var descriptions2 = ["<h6>Sensory Stop 2: Bees</h6>"];

var marker2 = L.marker([53.312252179, -6.259313009], { icon: twoIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions2,
      "images/bees.png",
      "audio/Sensory-Stop-2-Bees.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #5 DESCRIPTION */

var descriptions5 = [
  "<h5>140 Bus Stop </h5>",
  "The 140 bus runs every ten minutes from outside Trinity via Rathmines to Dartry. Stay on the bus until the very last stop and the Gardens are a three-minute walk away.",
];

/* coords for 140 Bus 53.3115217,-6.2625868 */
var marker5 = L.marker([53.312362, -6.26094], { icon: busIcon })
  .addTo(map)
  .bindPopup(
    createPopup(descriptions5, "images/140_bustop.png", "audio/140 Bus.mp3"),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #6 DESCRIPTION */

var descriptions6 = ["<h5>Cowper Luas Stop</h5>"];

var marker6 = L.marker([53.312769, -6.259642], { icon: cowperIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions6,
      "images/cowper_luas_stop.png",
      "audio/Cowper-Luas-Stop.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #12 DESCRIPTION */

var descriptions12 = ["<h5>Sensory Stop 3 - Ancient Plants</h5>"];

var marker12 = L.marker([53.312353136, -6.259895048], { icon: threeIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions12,
      "images/ancient_plants.png",
      "audio/Sensory-Stop-3-Ancient-Plants.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #13 DESCRIPTION */

var descriptions13 = ["<h5>Sensory Stop 4 - Local & Exotic Plants</h5>"];

var marker13 = L.marker([53.3124589, -6.260369799], { icon: fourIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions13,
      "images/local_exotic_plants.png",
      "audio/Sensory-Stop-4-Local-Exotic-Plants.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #14 DESCRIPTION */

var descriptions14 = ["<h5>Sensory Stop 5 - Aloe Vera</h5>"];

var marker14 = L.marker([53.31246531, -6.260120354], { icon: fiveIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions14,
      "images/aloe_vera.png",
      "audio/Sensory-Stop-5-Aloe-Vera.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #15 DESCRIPTION */

var descriptions15 = ["<h5>Sensory Stop 6 - Teas & Trees</h5>"];

var marker15 = L.marker([53.31230556, -6.259666667], { icon: sixIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions15,
      "images/teas_trees.png",
      "audio/Sensory-Stop-6-Teas-Trees.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #16 DESCRIPTION */

var descriptions16 = ["<h5>Sensory Stop 7 - Fiddleheads on Ferns</h5>"];

var marker16 = L.marker([53.312263396, -6.25992187], { icon: sevenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions16,
      "images/fiddleheads.png",
      "audio/Sensory-Stop-7-Fiddleheads-Ferns.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #17 DESCRIPTION */

var descriptions17 = ["<h5>Sensory Stop 8 - Catnip</h5>"];

var marker17 = L.marker([53.312401211, -6.260283968], { icon: eightIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions17,
      "images/catnip.png",
      "audio/Sensory-Stop-8-Catnip.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #18 DESCRIPTION */

var descriptions18 = ["<h5>Sensory Stop 9 - Wintersweeet</h5>"];

var marker18 = L.marker([53.312183272, -6.259795806], { icon: nineIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions18,
      "images/wintersweet.png",
      "audio/Sensory-Stop-9-Wintersweet.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #19 DESCRIPTION */

var descriptions19 = ["<h5>Sensory Stop 10 - Witch Hazel</h5>"];

var marker19 = L.marker([53.31239, -6.25963], { icon: tenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions19,
      "images/witch_hazel.png",
      "audio/Sensory-Stop-10-Witch-Hazel.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #20 DESCRIPTION */

var descriptions20 = ["<h5>Sensory Stop 11 - Frost on Grass</h5>"];

var marker20 = L.marker([53.31227778, -6.260277778], {
  icon: elevenIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions20,
      "images/frost_on_grass.png",
      "audio/Sensory-Stop-11-Frost-on-grass.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #21 DESCRIPTION */

var descriptions21 = ["<h5>Sensory Stop 12 - Summer Storms</h5>"];

var marker21 = L.marker([53.311998984, -6.259321055], {
  icon: twelveIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions21,
      "images/summer_storms.png",
      "audio/Sensory-Stop-12-Summer-Storms.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #22 DESCRIPTION */

var descriptions22 = ["<h5>Sensory Stop 13 - Tree Canopies</h5>"];

var marker22 = L.marker([53.31188889, -6.260222222], {
  icon: thirteenIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions22,
      "images/tree_canopy.png",
      "audio/Sensory Stop 13 Tree Canopies.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #23 DESCRIPTION */

var descriptions23 = ["<h5>Sensory Stop 14 - Wild Garlic</h5>"];

var marker23 = L.marker([53.31197222, -6.259722222], {
  icon: fourteenIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions23,
      "images/wild_garlic.png",
      "audio/Sensory Stop 14 Wild Garlic.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #24 DESCRIPTION */

var descriptions24 = ["<h5>Sensory Stop 15 - Fruit Trees</h5>"];

var marker24 = L.marker([53.31227778, -6.259416667], {
  icon: fifteenIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions24,
      "images/fruit_trees.png",
      "audio/Sensory Stop 15 Fruit Trees.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #25 DESCRIPTION */

var descriptions25 = ["<h5>Sensory Stop 16 - Baby's Tears</h5>"];

var marker25 = L.marker([53.31241667, -6.259361111], {
  icon: sixteenIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions25,
      "images/babys_tears.png",
      "audio/Sensory Stop 16 Baby’s Tears.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #26 DESCRIPTION */

var descriptions26 = ["<h5>Sensory Stop 17 - Snowdrops</h5>"];

53.3118889, -6.260222223;
var marker26 = L.marker([53.312, -6.2602224], {
  icon: seventeenIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions26,
      "images/snowdrops.png",
      "audio/Sensory Stop 17 Snowdrops.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #27 DESCRIPTION */

var descriptions27 = ["<h5>Sensory Stop 18 - The Long House Glasshouse</h5>"];

var marker27 = L.marker([53.31249, -6.25999], {
  icon: eighteenIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions27,
      "images/log_seat.png",
      "audio/Sensory Stop 18 Leaf color changes.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #29 DESCRIPTION */

var descriptions29 = [
  "<h5>Trinity College Botanic Garden</h5>",
  "Trinity College Botanic Garden at Trinity Hall, Dartry, Dublin 6.",
];

var marker29 = L.marker([53.312633, -6.259977], { icon: botanicIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions29,
      "images/main_office.png",
      "audio/Trinity Botanic Garden.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #30 DESCRIPTION */

var descriptions30 = [
  "<h5>Trinity Hall</h5>",
  "Trinity Hall is the main extramural hall of residence for students of Trinity College in Dublin.",
];

/*  Coords for Trinity Hall 53.3122576,-6.2627061 */
var marker30 = L.marker([53.312197, -6.261359], { icon: trinityhallIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions30,
      "images/trinityhall.jpeg",
      "audio/Trinity Hall.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #34 DESCRIPTION */

var descriptions34 = [
  "<h5>Trinity College Dublin</h5>",
  "Located in a beautiful campus in the heart of Dublin's city centre, Trinity College Dublin is Ireland's highest ranked university. ",
];

var marker34 = L.marker([53.312651, -6.259313], {
  icon: trinitycollegeIcon,
})
  .addTo(map)
  .bindPopup(
    createPopup(
      descriptions34,
      "images/trinity_college.jpg",
      "audio/Trinity College Dublin.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* #35 DESCRIPTION */

var descriptions35 = [
  "<h5>Log Seats in the Gardens</h5>",
  "<hr class='hr'/>",
  "There are two tree stumps / log seats in Walled Garden",
];
