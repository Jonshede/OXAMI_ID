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

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Flytta kartans fokus till användaren och zooma in lite grann
            map.setView([lat, lng], 13);

            // Rita ut den blå GPS-punkten för användaren
            L.circleMarker([lat, lng], {
                color: '#ffffff',       // Vit skarp kantlinje
                weight: 2,              // Tjocklek på kantlinjen
                fillColor: '#007bff',   // Klassisk blå GPS-färg
                fillOpacity: 0.9,
                radius: 9
            }).addTo(map).bindPopup("<b>Din position</b>");

            // Uppdatera texten i rutan längst upp med koordinaterna (avrundat till 5 decimaler)
            const coordBox = document.getElementById('coordinate-box');
            if (coordBox) {
                coordBox.innerHTML = `Lat: ${lat.toFixed(5)} &nbsp;|&nbsp; Lng: ${lng.toFixed(5)}`;
            }

        }, (error) => {
            console.warn("GPS-åtkomst nekad eller misslyckades:", error);
            const coordBox = document.getElementById('coordinate-box');
            if (coordBox) coordBox.innerText = "GPS-position ej tillgänglig";
        });
    } else {
        const coordBox = document.getElementById('coordinate-box');
        if (coordBox) coordBox.innerText = "Enheten saknar GPS-stöd";
    }
};


