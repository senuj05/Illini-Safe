function initMap() {
    const map= L.map('map').setView([40.1020, -88.2272], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const topLocationCoords = [40.1105, -88.2139];//Mark 1401 W Green St
    L.marker(topLocationCoords).addTo(map)
        .bindPopup("<b>Top Location:</b> 1401 W Green St, Urbana<br><b>Incidents:</b> 8")
        .openPopup();
}

// Call functions on page load
window.onload = function() {
    initMap();
    //showPredictions();
};

// Placeholder for predictions
function showPredictions() {
    console.log("ML predictions will display here.");
}