var countriesApp = angular.module('countriesApp');

countriesApp.factory('countriesServices', function($http, $rootScope) {
    var services = {};

    //Countries' data
    var flagClass = "flag-icon flag-icon-"
    services.countriesData = [{
            "id": "VE",
            "showAsSelected": true,
            name: "Venezuela",
            year: 1981,
            cities: [
                { name: "Caja Seca", yearVisited: 1981 },
                { name: "Caracas", yearVisited: 1984 },
                { name: "Turmero", yearVisited: 1986 },
                { name: "Maracay", yearVisited: 1986 }
            ],
            countryCode: flagClass + "ve"
        }, {
            "id": "CO",
            "showAsSelected": true,
            name: "Colombia",
            year: 1981,
            cities: [
                { name: "Bogota", yearVisited: 1981 },
                { name: "Cartagena", yearVisited: 1994 },
                { name: "Barranquilla", yearVisited: 1994 }
            ],
            countryCode: flagClass + "co"
        }, {
            "id": "US",
            "showAsSelected": true,
            name: "United States",
            year: 1994,
            cities: [
                { name: "Los Angeles", yearVisited: 1994 },
                { name: "San Diego", yearVisited: 1995 },
                { name: "San Francisco", yearVisited: 1998 },
                { name: "Houston", yearVisited: 2000 },
                { name: "Chicago", yearVisited: 2011 },
                { name: "Seattle", yearVisited: 2013 },
                { name: "New York City", yearVisited: 2014 },
                { name: "Miami", yearVisited: 2016 },
                { name: "Cape Canaveral", yearVisited: 2016 },
                { name: "Austin", yearVisited: 2016 },
                { name: "Dallas", yearVisited: 2016 }
            ],
            countryCode: flagClass + "us"
        }, {
            "id": "GB",
            "showAsSelected": true,
            name: "Great Britain",
            year: 2002,
            cities: [
                { name: "London", yearVisited: 2002 },
                { name: "Widsor Castle", yearVisited: 2002 },
                { name: "Bath", yearVisited: 2002 },
                { name: "Stonehenge", yearVisited: 2002 },
                { name: "Bristol", yearVisited: 2006 }
            ],
            countryCode: flagClass + "gb"
        }, {
            "id": "FR",
            "showAsSelected": true,
            name: "France",
            year: 2002,
            cities: [
                { name: "Paris", yearVisited: 2002 },
                { name: "Nice", yearVisited: 2006 },
                { name: "Antibes", yearVisited: 2006 },
                { name: "Cannes", yearVisited: 2006 },
            ],
            countryCode: flagClass + "fr"
        }, {
            "id": "MX",
            "showAsSelected": true,
            name: "Mexico",
            year: 2006,
            cities: [
                { name: "Mazatlan", yearVisited: 2006 },
                { name: "La Ticla", yearVisited: 2006 }
            ],
            countryCode: flagClass + "mx"
        }, {
            "id": "IT",
            "showAsSelected": true,
            name: "Italy",
            year: 2006,
            cities: [
                { name: "Rome", yearVisited: 2006 },
                { name: "Venice", yearVisited: 2006 },
                { name: "Verona", yearVisited: 2006 },
                { name: "Florence", yearVisited: 2006 }
            ],
            countryCode: flagClass + "it"
        }, {
            "id": "VA",
            "showAsSelected": true,
            name: "Vatican City",
            year: 2006,
            cities: [
                { name: "Vatican City", yearVisited: 2006 }
            ],
            countryCode: flagClass + "va"
        }, {
            "id": "MC",
            "showAsSelected": true,
            name: "Monaco",
            year: 2006,
            cities: [
                { name: "Monaco", yearVisited: 2006 }
            ],
            countryCode: flagClass + "mc"
        }, {
            "id": "NL",
            "showAsSelected": true,
            name: "Netherlands",
            year: 2006,
            cities: [
                { name: "Amsterdam", yearVisited: 2006 },
            ],
            countryCode: flagClass + "nl"
        }, {
            "id": "DE",
            "showAsSelected": true,
            name: "Germany",
            year: 2006,
            cities: [
                { name: "Berlin", yearVisited: 2006 },
            ],
            countryCode: flagClass + "de"
        }, {
            "id": "CA",
            "showAsSelected": true,
            name: "Canada",
            year: 2013,
            cities: [
                { name: "Vancouver", yearVisited: 2013 },
            ],
            countryCode: flagClass + "ca"
        }, {
            "id": "HR",
            "showAsSelected": true,
            name: "Croatia",
            year: 2017,
            cities: [
                { name: "Split", yearVisited: 2017 },
                { name: "Dubrovnik", yearVisited: 2017 },
                { name: "Sinj", yearVisited: 2017 },
            ],
            countryCode: flagClass + "hr"
        }, {
            "id": "CZ",
            "showAsSelected": true,
            name: "Czech Republic",
            year: 2017,
            cities: [
                { name: "Prague", yearVisited: 2017 },
                { name: "Plzen", yearVisited: 2017 },
                { name: "Karlštejn", yearVisited: 2017 },
            ],
            countryCode: flagClass + "cz"
        }, {
            "id": "PT",
            "showAsSelected": true,
            name: "Portugal",
            year: 2017,
            cities: [
                { name: "Lisbon", yearVisited: 2017 },
            ],
            countryCode: flagClass + "pt"
        }, ]
        // add country codes from this list: http://www.nationsonline.org/oneworld/country_code_list.htm

    return services;
})
