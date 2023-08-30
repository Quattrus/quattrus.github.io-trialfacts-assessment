// Initialize the map
var map = L.map('map').setView([-33.88162, 151.04883], 15); // Cumberland Campus coordinates and zoom level

// Add a base layer (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for the address
var marker = L.marker([-33.88162, 151.04883]).addTo(map);
marker.bindPopup("Cumberland Campus, The University of Sydney, 75 East St. Lidcombe, NSW");