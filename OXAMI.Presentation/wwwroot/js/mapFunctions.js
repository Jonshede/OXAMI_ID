window.initMap = (riskAreas) => {
    const map = L.map('leaflet-map').setView([57.721, 12.940], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    if (riskAreas && riskAreas.length > 0) {
        riskAreas.forEach(area => {

            let zoneColor;

            if (area.severity === "Hög") {
                zoneColor = "#d9534f"; // Bootstrap Danger (Röd)
            } else if (area.severity === "Medel") {
                zoneColor = "#f0ad4e"; // Bootstrap Warning (Orange)
            } else if (area.severity === "Låg") {
                zoneColor = "#ffd100"; // Myndighets-gul (Custom)
            } else {
                zoneColor = "#5bc0de"; // Bootstrap Info (Blå - standard om okänt)
            }

            const circle = L.circle([area.latitude, area.longitude], {
                color: zoneColor,
                fillColor: zoneColor,
                fillOpacity: 0.4,
                radius: 600
            }).addTo(map);

            circle.bindPopup(`<b>${area.title}</b><br>${area.description}`);
        });
    }
};