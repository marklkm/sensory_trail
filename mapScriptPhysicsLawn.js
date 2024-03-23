// Initialize the main map here
// Provost's Garden 53.34360 / -6.25778
// Physiology Square 53.34330 / -6.25247

var map = L.map("map").setView([53.3433, -6.25247], 20);

// Add a tile layer (OpenStreetMap)
L.tileLayer(
  "https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=fa39f1df414d4dc1ab5bf1323d4b6d09",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>',
    maxZoom: 20,
  }
).addTo(map);

// Function to create detailed popups with paragraphs
function createPopup(descriptionArray, photo, audio) {
  var descriptionHTML = descriptionArray
    .map((desc) => `<p>${desc}<\/p>`)
    .join("");
  return `
        <div style="max-width: 500px;">
            <h4><\/h4>
            ${descriptionHTML}
            <img src='${photo}' width='250px' style="margin-top: 10px;"><br>
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
const oneIcon = createIcon("images/arboretumicon.png");
const twoIcon = createIcon("images/arboretumicon.png");
const threeIcon = createIcon("images/arboretumicon.png");
const fourIcon = createIcon("images/arboretumicon.png");
const fiveIcon = createIcon("images/arboretumicon.png");
const sixIcon = createIcon("images/arboretumicon.png");
const sevenIcon = createIcon("images/arboretumicon.png");
const eightIcon = createIcon("images/arboretumicon.png");
const nineIcon = createIcon("images/arboretumicon.png");
const tenIcon = createIcon("images/arboretumicon.png");
const elevenIcon = createIcon("images/arboretumicon.png");
const twelveIcon = createIcon("images/arboretumicon.png");
const thirteenIcon = createIcon("images/arboretumicon.png");
const fourteenIcon = createIcon("images/arboretumicon.png");
const fivteenIcon = createIcon("images/arboretumicon.png");
const sixteenIcon = createIcon("images/arboretumicon.png");
const seventeenIcon = createIcon("images/arboretumicon.png");
const eighteenIcon = createIcon("images/arboretumicon.png");
const nineteenIcon = createIcon("images/arboretumicon.png");
const twentyIcon = createIcon("images/arboretumicon.png");
const twentyoneIcon = createIcon("images/arboretumicon.png");
const physicslawnIcon = createIcon("images/physicslawnicon.png");

/* END OF MAP ICONS */

/* MAP DESCRIPTIONS */

/* # 1 Tree */

var description1 = ["<h6>Tree Number 0: Sequoiadendron giganteum</h6>"];

var marker1 = L.marker([53.34348, -6.252478], { icon: oneIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description1,
      "images/giant_redwood.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 2 Tree */

var description2 = ["<h6>Tree Number 192: Malus</h6>"];

var marker2 = L.marker([53.34348, -6.2524], { icon: twoIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description2,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 3 Tree */

var description3 = ["<h6>Tree Number 193: Malus</h6>"];

var marker3 = L.marker([53.34344, -6.252381], { icon: threeIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description3,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 4 Tree */

var description4 = ["<h6>Tree Number 194: Malus</h6>"];

var marker4 = L.marker([53.34347, -6.252336], { icon: fourIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description4,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 5 Tree */

var description5 = ["<h6>Tree Number 195: Tilia platyphyllos</h6>"];

var marker5 = L.marker([53.34347, -6.252192], { icon: fiveIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description5,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 6 Tree */

var description6 = ["<h6>Tree Number 531: Ilex aquifolium</h6>"];

var marker6 = L.marker([53.34349, -6.251964], { icon: sixIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description6,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 7 Tree */

var description7 = ["<h6>Tree Number 532: Ilex aquifolium</h6>"];

var marker7 = L.marker([53.34347, -6.251925], { icon: sevenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description7,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 8 Tree */

var description8 = ["<h6>Tree Number 196: Quercus robur Purpurea</h6>"];

var marker8 = L.marker([53.34345, -6.251997], { icon: eightIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description8,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 9 Tree */

var description9 = ["<h6>Tree Number 197: Halesia monticola</h6>"];

var marker9 = L.marker([53.34342, -6.251936], { icon: nineIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description9,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 10 Tree */

var description10 = ["<h6>Tree Number 37: Prunus subhertella autumnalis</h6>"];

var marker10 = L.marker([53.34339, -6.251947], { icon: tenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description10,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 11 Tree */

var description11 = ["<h6>Tree Number 78: Fraxinus ornus</h6>"];

var marker11 = L.marker([53.34334, -6.251947], { icon: elevenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description11,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 12 Tree */

var description12 = ["<h6>Tree Number 198: Acer platanoides-Crimson King</h6>"];

var marker12 = L.marker([53.34328, -6.251958], { icon: twelveIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description12,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 13 Tree */

var description13 = ["<h6>Tree Number 199: Prunus avium-plena</h6>"];

var marker13 = L.marker([53.34319, -6.251942], { icon: thirteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description13,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 14 Tree */

var description14 = [
  "<h6>Tree Number 206: Fraxinus angustifolia subsp-Oxycarpa</h6>",
];

var marker14 = L.marker([53.34319, -6.251942], { icon: fourteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description14,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 15 Tree */

var description15 = ["<h6>Tree Number 207: Tilia tomentosa</h6>"];

var marker15 = L.marker([53.34323, -6.252369], { icon: fivteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description15,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 16 Tree */

var description16 = ["<h6>Tree Number 208: Sorbus aria</h6>"];

var marker16 = L.marker([53.34319, -6.252453], { icon: sixteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description16,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 17 Tree */

var description17 = ["<h6>Tree Number 209: Fraxinus excelsior</h6>"];

var marker17 = L.marker([53.34319, -6.252453], { icon: seventeenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description17,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 18 Tree */

var description18 = ["<h6>Tree Number 534: Acer japonicum-Aconitifolium</h6>"];

var marker18 = L.marker([53.3432, -6.252514], { icon: eighteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description18,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 19 Tree */

var description19 = ["<h6>Tree Number 210: Betula papyrifera</h6>"];

var marker19 = L.marker([53.3432, -6.252514], { icon: nineteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description19,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # 20 Tree */

var description20 = ["<h6>Tree Number 191: Aesculus carnea</h6>"];

var marker20 = L.marker([53.34335, -6.252525], { icon: twentyIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description20,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # Tree Number 82: Morus */

var description21 = ["<h6>Tree Number 82: Morus</h6>"];

var marker21 = L.marker([53.34341, -6.252514], { icon: twentyoneIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description21,
      "images/arboretum.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

/* # Physics Lawn Icon */

var description22 = [
  "<h5>Physics Lawn</h5><p>This is the Physics Lawn area.</p>",
];
var marker22 = L.marker([53.34335, -6.25231], { icon: physicslawnIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      description22,
      "images/physics_lawn_east.jpeg",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  )

  .on("mouseout", function (e) {
    e.target.closeTooltip();
  });

// Initialize the main map here
// Provost's Garden 53.34360 / -6.25778
// Physiology Square 53.34330 / -6.25247
var map = L.map("map").setView([53.312263396, -6.25992187], 20);

// Add a tile layer (OpenStreetMap)
L.tileLayer(
  "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=fa39f1df414d4dc1ab5bf1323d4b6d09",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>',
    maxZoom: 20,
  }
).addTo(map);

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
/*const oneIcon = createIcon("images/arboretum.png");


/* END OF MAP ICONS */

//////////////////////////////////////

// Simplified popup creation function
/*function createPopup(title, description, photo, audio) {
  const descriptionHTML = description.map((desc) => `<p>${desc}</p>`).join("");
  return `<div style="max-width: 300px;">
            <h4>${title}</h4>
            ${descriptionHTML}
            <img src='${photo}' width='280px' style="margin-top: 10px;"><br>
            <audio controls src='${audio}'></audio>
          </div>`;
}

// Applying event listeners in a loop
/*[marker1].forEach((marker) => {
  marker
    .on("mouseover", onMarkerHover)
    .on("mouseout", (e) => e.target.closeTooltip());
});

// Use of let/const for variable declarations
/*let descriptions1 = ["Tree Number 0 - Sequoiadendron gigantium"];
let marker1 = L.marker([53.34348, -6.252478], { icon: oneIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 0 - Sequoiadendron gigantium",
      descriptions1,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );
  
/* 
/*
let description2 = ["Tree Number 192: Malus"];
let marker2 = L.marker([53.34348, -6.2524], { icon: twoIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 192: Malus",
      description2,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description3 = ["Tree Number 193: Malus"];
let marker3 = L.marker([53.31246, -6.25951], { icon: threeIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 193: Malus",
      description3,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description4 = ["Tree Number 194: Malus"];
let marker4 = L.marker([53.34347, -6.252336], { icon: fourIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 194: Malus",
      description4,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description5 = ["Tree Number 195: Tilia platyphyllos"];
let marker5 = L.marker([53.31246, -6.25951], { icon: fiveIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 194: Tilia platyphyllos",
      description5,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description6 = ["Tree Number 531: Ilex aquifolium"];
let marker6 = L.marker([53.31246, -6.25951], { icon: sixIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 531: Ilex aquifolium",
      description6,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description7 = ["Tree Number 532: Ilex aquifolium"];
let marker7 = L.marker([53.31246, -6.25951], { icon: sevenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 532: Ilex aquifolium",
      description7,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description8 = ["Tree Number 196: Quercus robur Purpurea"];
let marker8 = L.marker([53.31246, -6.25951], { icon: eightIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 196: Quercus robur Purpurea",
      description8,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description9 = ["Tree Number 197: Halesia monticola"];
let marker9 = L.marker([53.31246, -6.25951], { icon: nineIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 197: Halesia monticola",
      description9,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description10 = ["Tree Number 37: Prunus subhertella autumnalis"];
let marker10 = L.marker([53.31246, -6.25951], { icon: tenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 37: Prunus subhertella autumnalis",
      description10,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description11 = ["Tree Number 78: Fraxinus ornus"];
let marker11 = L.marker([53.31246, -6.25951], { icon: elevenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 78: Fraxinus ornus",
      description11,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description12 = ["Tree Number 198: Acer platanoides-Crimson King"];
let marker12 = L.marker([53.31246, -6.25951], { icon: twelveIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 198: Acer platanoides-Crimson King",
      description12,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description13 = ["Tree Number 199: Prunus avium-plena"];
let marker13 = L.marker([53.31246, -6.25951], { icon: thirteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 199: Prunus avium-plena",
      description13,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description14 = ["Tree Number 206: Fraxinus angustifolia subsp-Oxycarpa"];
let marker14 = L.marker([53.31246, -6.25951], { icon: fourteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 206: Fraxinus angustifolia subsp-Oxycarpa",
      description14,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description15 = ["Tree Number 207: Tilia tomentosa"];
let marker15 = L.marker([53.31246, -6.25951], { icon: fifteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 207: Tilia tomentosa",
      description15,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description16 = ["Tree Number 208: Sorbus aria"];
let marker16 = L.marker([53.31246, -6.25951], { icon: sixteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 208: Sorbus aria",
      description16,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description17 = ["Tree Number 209: Fraxinus excelsior"];
let marker17 = L.marker([53.31246, -6.25951], { icon: seventeenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 209: Fraxinus excelsior",
      description17,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description18 = ["Tree Number 534: Acer japonicum-Aconitifolium"];
let marker18 = L.marker([53.31246, -6.25951], { icon: eighteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 534: Acer japonicum-Aconitifolium",
      description18,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description19 = ["Tree Number 210: Betula papyrifera"];
let marker19 = L.marker([53.31246, -6.25951], { icon: nineteenIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 210: Betula papyrifera",
      description19,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description20 = ["Tree Number 191: Aesculus carnea"];
let marker20 = L.marker([53.31246, -6.25951], { icon: twentyIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 191: Aesculus carnea",
      description20,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

let description21 = ["Tree Number 82: Morus"];
let marker21 = L.marker([53.31246, -6.25951], { icon: twentyoneIcon })
  .addTo(map)
  .bindPopup(
    createPopup(
      "Tree Number 82: Morus",
      description21,
      "images/arboretumicon.png",
      "audio/Sensory-Stop-1-Lavender.mp3"
    ),
    { className: "custom-popup" }
  );

  */
