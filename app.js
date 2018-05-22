//Angular code for list
var app = angular.module('countriesApp', ['countriesServices', 'keyProvider'])

app.controller('countryMapController', function($scope, $http, countriesServices, keyProvider) {

    //For Countries Table
    $scope.countries = countriesServices.countriesData;

    //Map code
    var map = AmCharts.makeChart("mapdiv", {
        "type": "map",
        "theme": "dark",

        "imagesSettings": {
            "rollOverColor": "#089282",
            "rollOverScale": 3,
            "selectedScale": 3,
            "selectedColor": "#089282",
            "color": "#13564e"
        },
        projection: "mercator",
        panEventsEnabled: true,
        backgroundColor: "#535364",
        backgroundAlpha: 1,
        zoomControl: {
            zoomControlEnabled: true
        },
        "dataProvider": {
            map: "worldHigh",
            getAreasFromMap: true,
            images: [],
            areas: countriesServices.countriesData
        },
        areasSettings: {
            autoZoom: true,

            selectedColor: "#9BABB2", //Countries visited
            outlineColor: "#000000", //Countries outlines

            color: "#F4F7F0", //Countries NOT Visited
            rollOverColor: "#F2EEE3", //Hover over countries NOT visited

            rollOverOutlineColor: "#000000", //Hover over countries outline NOT visited
            colorSolid: "#000000", //No Idea
        }
    })

    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    //Add cities to map
    _.forEach(countriesServices.countriesData, (country) => {
        _.forEach(country.cities, (cityData) => {
            var city = new AmCharts.MapImage();
            city.title = cityData.name;
            city.latitude = cityData.latitude;
            city.longitude = cityData.longitude;
            city.svgPath = targetSVG;
            city.zoomLevel = 5;
            city.scale = 0.5;
            city.chart = map;
            map.dataProvider.images.push(city);
        })
    })

    //// To get lat longs using Google Maps
    $scope.getLatLngData = () => {
        _.forEach(countriesServices.countriesData, (country) => {
            _.forEach(country.cities, (city) => {
                if (!city.latitude || !city.longitude) {
                    let link = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city.name + '&region=' + country.id + '&key=' + keyProvider.googleMapsApiKey
                    $http.get(link)
                        .then((data) => {
                            if (data.data.results.length > 0) {
                                city['latitude'] = data.data.results[0].geometry.location.lat
                                city['longitude'] = data.data.results[0].geometry.location.lng
                            }
                            console.log("city: ", JSON.stringify(city, null, "\t"));
                            //Add lat/lng to countries service.
                        })
                }
            })
        })
    }
    //Only works after adding a city to the countries services with null lat/long values
    $scope.getLatLngData();

});