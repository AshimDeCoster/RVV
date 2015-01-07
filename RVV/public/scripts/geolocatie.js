$(document).ready(function () {
    GetGeo();
});
function GetGeo() {    
    if (navigator.geolocation) {        
        navigator.geolocation.getCurrentPosition(function (position) {            
            var latitude = position.coords.latitude;                    
            var longitude = position.coords.longitude;                 
            var coords = new google.maps.LatLng(latitude, longitude); 
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            var mapOptions =  {
                zoom: 21,  
                center: coords, 
                mapTypeControl: true, 
                navigationControlOptions:
 {
                    style: google.maps.NavigationControlStyle.SMALL 
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP 
            };
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            directionsDisplay.setMap(map);
            var request = {
                origin: coords,
                destination: 'Markt 43, 9700 Oudenaarde',
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };
            
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        });
    }
}