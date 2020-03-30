// Initialize and add the map
function initMap() {
    // The location of La Chouette Agence
    var chouette = {lat: 45.769741, lng: 4.830210};
    // The map, centered at La Chouette Agence
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: chouette});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: chouette, map: map});
}