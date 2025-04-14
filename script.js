// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
        
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 4.3,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(23.5937, 77.9629), // India

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#d9a441"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    const markers = [
        {
            position: new google.maps.LatLng(20.593684, 78.96288), // India
            map: map,
            title: 'Hijra'
        },
        {
            position: new google.maps.LatLng(30.375321, 69.345116), // Pakistan
            map: map,
            title: 'Khwajasara'
        },
        {
            position: new google.maps.LatLng(20.237556, 84.270018), // India
            map: map,
            title: 'Hinjida'
        },
        {
            position: new google.maps.LatLng(11.127123, 78.656894), // India
            map: map,
            title: 'Aravanni/Thirunar'
        },
        {
            position: new google.maps.LatLng(27.570589, 80.098187), // India
            map: map,
            title: 'Kothi'
        },
        {
            position: new google.maps.LatLng(22.574354, 88.362873), // India
            map: map,
            title: 'Durani'
        },
        {
            position: new google.maps.LatLng(28.490733, 65.095779), // India
            map: map,
            title: 'Zenana'
        },
        {
            position: new google.maps.LatLng(9.931233, 76.267304), // India
            map: map,
            title: 'Menaka'
        },
        {
            position: new google.maps.LatLng(28.394857, 84.124008), // India
            map: map,
            title: 'Meti'
        },
        {
            position: new google.maps.LatLng(23.684994, 90.356331), // India
            map: map,
            title: 'Hijra'
        },
        {
            position: new google.maps.LatLng(33.93911, 67.709953), // Pakistan
            map: map,
            title: 'Khwajasara'
        }
    ]
    markers.forEach(({ position, title }) => {
        new google.maps.Marker({
            position,
            map,
            title
        });
    });
}