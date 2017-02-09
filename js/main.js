$(document).ready(function() {
    $("#id-show-menu").on("click", function() {
        $("#id-content").toggleClass(function() {
            return "col-lg-10 col-lg-offset-2"
        }, function() {
            return "col-lg-12"
        });
        $("#id-map-wrapper").toggleClass(function() {
            return "col-lg-10 col-lg-offset-2"
        }, function() {
            return "col-lg-12"
        });
    });
});

var blueWater = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];

function initMap() {


    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.449241, lng: 30.516643 },
        zoom: 6,
        styles: blueWater

    });

}
