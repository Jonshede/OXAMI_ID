indow.initMap = (riskZones) => {
    const boras = { lat: 57.721, lng: 12.940 }; // Startpunkt: Borås

    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 13,
        center: boras,
        disableDefaultUI: true, // Renare myndighetsvy
        zoomControl: true,
        styles: [
            { "featureType": "poi", "stylers": [{ "visibility": "off" }] } // Dölj onödiga platser
        ]
    });

    // Rita ut riskområden från din JSON
    riskZones.forEach(zone => {
        const color = zone.severity === "High" ? "#FF0000" : "#FFA500";

        new google.maps.Circle({
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35,
            map: map,
            center: { lat: zone.latitude, lng: zone.longitude },
            radius: 500 // Radie i meter
        });

        // Lägg till en enkel informationsruta
        const infoWindow = new google.maps.InfoWindow({
            content: `<strong>${zone.title}</strong><br>${zone.description}`
        });

        const marker = new google.maps.Marker({
            position: { lat: zone.latitude, lng: zone.longitude },
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 0 // Osynlig markör, vi använder cirkeln
            }
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
};