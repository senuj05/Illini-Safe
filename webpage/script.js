function initMap() {
    const map= L.map('map').setView([40.1020, -88.2272], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const incidents = [
        { coords: [40.1020, -88.2272], type: "Theft" },
        { coords: [40.1042, -88.2271], type: "Vandalism" },
        { coords: [40.1075, -88.2269], type: "Assault" }
    ];
    incidents.forEach(incident => {
        L.marker(incident.coords).addTo(map)
            .bindPopup(`<b>Incident:</b> ${incident.type}`);
    });
}

// Placeholder for predictions
function showPredictions() {
    console.log("ML predictions will display here.");
}

// Call functions on page load
window.onload = function() {
    initMap();
    showPredictions();
};
