//Angular code for list
var app = angular.module('countriesApp', [])
  
app.controller('countryMapController', function($scope) {

        //Countries' data
        var flagClass = "flag-icon flag-icon-"
        var countriesData = [{
                    "id": "VE",
                    "showAsSelected": true,
                    name: "Venezuela",
                    year: 1981,
                    cities: [
                        { name: "Caja Seca", yearVisited: [1981] },
                        { name: "Caracas", yearVisited: [1984] },
                        { name: "Turmero", yearVisited: [1986] },
                        { name: "Maracay", yearVisited: [1986] }
                    ],
                    countryCode: flagClass + "ve"
                }, {
                    "id": "CO",
                    "showAsSelected": true,
                    name: "Colombia",
                    year: 1981,
                    cities: [
                        { name: "Bogota", yearVisited: [1981] },
                        { name: "Cartagena", yearVisited: [1994, 2017] },
                        { name: "Barranquilla", yearVisited: [1994] },
                        { name: "Medellin", yearVisited: [2018] },
                        { name: "Guatape", yearVisited: [2018] },
                        { name: "Zipaquira", yearVisited: [2006, 2018] }
                    ],
                    countryCode: flagClass + "CO"
                }, {
                    "id": "US",
                    "showAsSelected": true,
                    name: "United States",
                    year: 1994,
                    cities: [
                        { name: "Los Angeles", yearVisited: [1994] },
                        { name: "San Diego", yearVisited: [1995] },
                        { name: "San Francisco", yearVisited: [1998] },
                        { name: "Houston", yearVisited: [2000] },
                        { name: "Mammoth Lakes", yearVisited: [2000] },
                        { name: "Chicago", yearVisited: [2011] },
                        { name: "Seattle", yearVisited: [2013] },
                        { name: "New York City", yearVisited: [2014] },
                        { name: "Miami", yearVisited: [2016] },
                        { name: "Cape Canaveral", yearVisited: [2016] },
                        { name: "Austin", yearVisited: [2016] },
                        { name: "Dallas", yearVisited: [2016] }
                    ],
                    countryCode: flagClass + "US"
                }, {
                    "id": "GB",
                    "showAsSelected": true,
                    name: "Great Britain",
                    year: 2002,
                    cities: [
                        { name: "London", yearVisited: [2002] },
                        { name: "Widsor Castle", yearVisited: [2002] },
                        { name: "Bath", yearVisited: [2002] },
                        { name: "Stonehenge", yearVisited: [2002] },
                        { name: "Bristol", yearVisited: [2006] }
                    ],
                    countryCode: flagClass + "GB"
                }, {
                    "id": "FR",
                    "showAsSelected": true,
                    name: "France",
                    year: 2002,
                    cities: [
                        { name: "Paris", yearVisited: [2002] },
                        { name: "Nice", yearVisited: [2006] },
                        { name: "Antibes", yearVisited: [2006] },
                        { name: "Cannes", yearVisited: [2006] },
                    ],
                    countryCode: flagClass + "FR"
                }, {
                    "id": "MX",
                    "showAsSelected": true,
                    name: "Mexico",
                    year: 2006,
                    cities: [
                        { name: "Mazatlan", yearVisited: [2006] },
                        { name: "La Ticla", yearVisited: [2006] }
                    ],
                    countryCode: flagClass + "MX"
                }, {
                    "id": "IT",
                    "showAsSelected": true,
                    name: "Italy",
                    year: 2006,
                    cities: [
                        { name: "Rome", yearVisited: [2006] },
                        { name: "Venice", yearVisited: [2006] },
                        { name: "Verona", yearVisited: [2006] },
                        { name: "Florence", yearVisited: [2006] }
                    ],
                    countryCode: flagClass + "IT"
                }, {
                    "id": "VA",
                    "showAsSelected": true,
                    name: "Vatican City",
                    year: 2006,
                    cities: [
                        { name: "Vatican City", yearVisited: [2006] }
                    ],
                    countryCode: flagClass + "VA"
                }, {
                    "id": "MC",
                    "showAsSelected": true,
                    name: "Monaco",
                    year: 2006,
                    cities: [
                        { name: "Monaco", yearVisited: [2006] }
                    ],
                    countryCode: flagClass + "MC"
                }, {
                    "id": "NL",
                    "showAsSelected": true,
                    name: "Netherlands",
                    year: 2006,
                    cities: [
                        { name: "Amsterdam", yearVisited: [2006] },
                    ],
                    countryCode: flagClass + "NL"
                }, {
                    "id": "DE",
                    "showAsSelected": true,
                    name: "Germany",
                    year: 2006,
                    cities: [
                        { name: "Berlin", yearVisited: [2006] },
                    ],
                    countryCode: flagClass + "DE"
                }, {
                    "id": "CA",
                    "showAsSelected": true,
                    name: "Canada",
                    year: 2013,
                    cities: [
                        { name: "Vancouver", yearVisited: [2013] },
                    ],
                    countryCode: flagClass + "CA"
                }, {
                    "id": "HR",
                    "showAsSelected": true,
                    name: "Croatia",
                    year: 2017,
                    cities: [
                        { name: "Split", yearVisited: [2017] },
                        { name: "Dubrovnik", yearVisited: [2017] },
                        { name: "Sinj", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "HR"
                }, {
                    "id": "CZ",
                    "showAsSelected": true,
                    name: "Czech Republic",
                    year: 2017,
                    cities: [
                        { name: "Prague", yearVisited: [2017] },
                        { name: "Plzen", yearVisited: [2017] },
                        { name: "Karlstejn", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "CZ"
                }, {
                    "id": "PT",
                    "showAsSelected": true,
                    name: "Portugal",
                    year: 2017,
                    cities: [
                        { name: "Lisbon", yearVisited: [2017] },
                        { name: "Porto", yearVisited: [2017] },
                        { name: "Benagil", yearVisited: [2017] },
                        { name: "Lagos", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "PT"
                }, {
                    "id": "PL",
                    "showAsSelected": true,
                    name: "Poland",
                    year: 2017,
                    cities: [
                        { name: "Krakow", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "PL"
                }, {
                    "id": "MA",
                    "showAsSelected": true,
                    name: "Morocco",
                    year: 2017,
                    cities: [
                        { name: "Tangier", yearVisited: [2017] },
                        { name: "Fes", yearVisited: [2017] },
                        { name: "Merzouga", yearVisited: [2017] },
                        { name: "Marrakesh", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "MA"
                }, {
                    "id": "ES",
                    "showAsSelected": true,
                    name: "Spain",
                    year: 2017,
                    cities: [
                        { name: "Barcelona", yearVisited: [2017] },
                        { name: "Pamplona", yearVisited: [2017] },
                        { name: "Seville", yearVisited: [2018] },
                    ],
                    countryCode: flagClass + "ES"
                }, {
                    "id": "BG",
                    "showAsSelected": true,
                    name: "Bulgaria",
                    year: 2017,
                    cities: [
                        { name: "Sofia", yearVisited: [2017] },
                        { name: "Plovdiv", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "BG"
                }, {
                    "id": "IL",
                    "showAsSelected": true,
                    name: "Israel",
                    year: 2017,
                    cities: [
                        { name: "Tel Aviv", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "IL"
                }, {
                    "id": "TR",
                    "showAsSelected": true,
                    name: "Turkey",
                    year: 2017,
                    cities: [
                        { name: "Istanbul", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "TR"
                }, {
                    "id": "VN",
                    "showAsSelected": true,
                    name: "Vietnam",
                    year: 2017,
                    cities: [
                        { name: "Hanoi", yearVisited: [2017] },
                        { name: "Ha Long Bay", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "VN"
                }, {
                    "id": "TH",
                    "showAsSelected": true,
                    name: "Thailand",
                    year: 2017,
                    cities: [
                        { name: "Chiang Mai", yearVisited: [2017] },
                        { name: "Pai", yearVisited: [2017] },
                        { name: "Chiang Rai", yearVisited: [2017] },
                        { name: "Doi Inthanon", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "TH"
                }, {
                    "id": "JP",
                    "showAsSelected": true,
                    name: "Japan",
                    year: 2017,
                    cities: [
                        { name: "Kyoto", yearVisited: [2017] },
                        { name: "Kobe", yearVisited: [2017] },
                        { name: "Osaka", yearVisited: [2017] },
                        { name: "Tokyo", yearVisited: [2017] },
                        { name: "Hiroshima", yearVisited: [2017] },
                        { name: "Miyajima", yearVisited: [2017] },
                        { name: "Toyama", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "JP"
                }, 
                {
                    "id": "MY",
                    "showAsSelected": true,
                    name: "Malaysia",
                    year: 2017,
                    cities: [
                        { name: "Kuala Lumpur", yearVisited: [2017] },
                        { name: "Panang", yearVisited: [2017] },
                        { name: "Langkawi", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "MY"
                },
                {
                    "id": "PE",
                    "showAsSelected": true,
                    name: "Peru",
                    year: 2017,
                    cities: [
                        { name: "Lima", yearVisited: [2017] },
                        { name: "Aguas Calientes", yearVisited: [2017] },
                        { name: "Machu Picchu", yearVisited: [2017] },
                    ],
                    countryCode: flagClass + "PE"
                }, 
        ]
        // add country codes from this list: 
        // http://www.nationsonline.org/oneworld/country_code_list.htm
        //Map code
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
            dataProvider: {
                map: "worldHigh",
                getAreasFromMap: true,
                areas: countriesData
            },
            areasSettings: {
                autoZoom: true,
                
                selectedColor: "#6D848C", //Countries visited
                outlineColor: "#000000", //Countries outlines

                color: "#F2F0EB", //Countries NOT Visited
                rollOverColor: "#BFBFAE", //Hover over countries NOT visited
                
                rollOverOutlineColor: "#000000", //Hover over countries outline NOT visited
                colorSolid: "#000000", //No Idea
            }
        });

        //For ng-repeat
        $scope.countries = countriesData;
  });