function initMap() {
    console.log("ini")

    const map= L.map('map').setView([40.1020, -88.2272], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const topLocationCoords = [40.1105, -88.2139];//Mark 1401 W Green St
    L.marker(topLocationCoords).addTo(map)
        .bindPopup("<b>Top Location:</b> 1401 W Green St, Urbana<br><b>Incidents:</b> 8")
        .openPopup();

    const incidentData=[
        [40.1105, -88.2139, 0.8], 
        [40.1098, -88.2289, 0.6], 
        [40.1042, -88.2271, 0.5],  
        [40.1075, -88.2269, 0.4], 
        [40.1019, -88.2352, 0.3]
    ]

    L.heatLayer(incidentData,{
        radius:25,
        blur:15,
        maxZoom:17,
        gradient:{
            0.4:'blue',
            0.65:'lime',
            1:'red'
        }
    }).addTo(map);
    console.log("Mp")
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