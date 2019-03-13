const mapDiv = document.querySelector('#map');

// initialize and add map
function initMap() {
    // location
    const location = { lat:-20.204 , lng:28.549 };

    // centered map on location
    const map = new google.maps.Map(mapDiv, { zoom: 14, center: location });

    // marker positioned at location
    const marker = new google.maps.Marker({ position: location, map: map })
    
}
