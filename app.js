//Map code
var flagClass = "flag-icon flag-icon-"
var countriesData = [
    {   
        "id": "VE",
        "showAsSelected": true,
        name: "Venezuela", 
        year: "1981",
        cities: [
            { name: "Caja Seca", year: 1981 },
            { name: "Caracas", year: 1984 },
            { name: "Turmero", year: 1986 },
            { name: "Maracay", year: 1986 }
        ],
        countryCode: flagClass + "ve" 
    },
    {   
        "id": "CO",
        "showAsSelected": true,
        name: "Colombia", 
        year: 1981,
        cities: [
            { name: "Bogota", year: 1981 },
            { name: "Cartagena", year: 1994 },
            { name: "Barranquilla", year: 1994 }
        ],
        countryCode: flagClass + "co" 
    },
    {   
        "id": "US",
        "showAsSelected": true,
        name: "United States", 
        year: "1994",
        cities: [
            { name: "Los Angeles", year: 1994 },
            { name: "San Diego", year: 1995 },
            { name: "San Francisco", year: 1998 },
            { name: "Houston", year: 2000 },
            { name: "Chicago", year: 2011 },
            { name: "Seattle", year: 2013 },
            { name: "New York City", year: 2014 },
            { name: "Miami", year: 2016 },
            { name: "Cape Canaveral", year: 2016 },
            { name: "Austin", year: 2016 },
            { name: "Dallas", year: 2016 }
        ],
        countryCode: flagClass + "us" 
    },
    {   
        "id": "GB",
        "showAsSelected": true,
        name: "Great Britain", 
        year: "2002",
        cities: [
            { name: "London", year: 2002 },
            { name: "Widsor Castle", year: 2002 },
            { name: "Bath", year: 2002 },
            { name: "Stonehenge", year: 2002 },
            { name: "Bristol", year: 2006 }
        ],
        countryCode: flagClass + "gb" 
    },
    {   
        "id": "FR",
        "showAsSelected": true,
        name: "France", 
        year: "2002",
        cities: [
            { name: "Paris", year: 2002 },
            { name: "Nice", year: 2006 },
            { name: "Antibes", year: 2006 },
            { name: "Cannes", year: 2006 },
        ],
        countryCode: flagClass + "fr"
    },
    {   
        "id": "MX",
        "showAsSelected": true,
        name: "Mexico", 
        year: "2006",
        cities: [
            { name: "Mazatlan", year: 2006 },
            { name: "La Ticla", year: 2006 }
        ],
        countryCode: flagClass + "mx"
    },
    {   
        "id": "IT",
        "showAsSelected": true,
        name: "Italy", 
        year: "2006",
        cities: [
            { name: "Rome", year: 2006 },
            { name: "Venice", year: 2006 },
            { name: "Florence", year: 2006 }
        ],
        countryCode: flagClass + "it"
    },
    {   
        "id": "MC",
        "showAsSelected": true,
        name: "Monaco", 
        year: "2006",
        cities: [
            { name: "Monaco", year: 2006 }
        ],
        countryCode: flagClass + "mc"
    },
    {   
        "id": "NL",
        "showAsSelected": true,
        name: "Netherlands", 
        year: "2006",
        cities: [
            { name: "Amsterdam", year: 2006 }, 
        ],
        countryCode: flagClass + "nl"
    },
    {   
        "id": "DE",
        "showAsSelected": true,
        name: "Germany", 
        year: "2006",
        cities: [
            { name: "Berlin", year: 2006 }, 
        ],
        countryCode: flagClass + "de" 
    },
    {   
        "id": "CA",
        "showAsSelected": true,
        name: "Canada", 
        year: "2013",
        cities: [
            { name: "Vancouver", year: 2013 }, 
        ],
        countryCode: flagClass + "ca"
    },
]

var map = AmCharts.makeChart("mapdiv", {
    type: "map",
    theme: "dark",
    projection: "mercator",
    panEventsEnabled: true,
    backgroundColor: "#535364",
    backgroundAlpha: 1,
    zoomControl: {
        zoomControlEnabled: true
    },
    // add country codes from this list: http://www.nationsonline.org/oneworld/country_code_list.htm
    dataProvider: {
        map: "worldHigh",
        getAreasFromMap: true,
        areas: countriesData
    },
    areasSettings: {
        autoZoom: true,
        color: "#B4B4B7",
        colorSolid: "#84ADE9",
        selectedColor: "#84ADE9",
        outlineColor: "#666666",
        rollOverColor: "#9EC2F7",
        rollOverOutlineColor: "#000000"
    }
});
//Angular code for list
angular.module('countriesApp', [])
  .controller('countryMapController', function($scope) {
        $scope.countries = countriesData;
  });