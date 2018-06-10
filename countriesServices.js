var countriesServices = angular.module('countriesServices', [])
  
countriesServices.service('countriesServices', function() {
    let services = {};

    //Countries' data
    // add country codes from this list: 
    // http://www.nationsonline.org/oneworld/country_code_list.htm
    const flagClass = "flag-icon flag-icon-"

    services.countriesData = [
        {
            "id": "VE",
            "showAsSelected": true,
            "name": "Venezuela",
            "year": 1981,
            "cities": [{
                    "name": "Caja Seca",
                    "yearVisited": [1981],
                    "latitude": 9.1518116,
                    "longitude": -71.08246129999999
                },
                {
                    "name": "Caracas",
                    "yearVisited": [1984],
                    "latitude": 10.4805937,
                    "longitude": -66.90360629999999
                },
                {
                    "name": "Turmero",
                    "yearVisited": [1986],
                    "latitude": 10.2145621,
                    "longitude": -67.4874107
                },
                {
                    "name": "Maracay",
                    "yearVisited": [1986],
                    "latitude": 10.2441931,
                    "longitude": -67.60661640000001
                }
            ],
            "countryCode": flagClass + "ve"
        }, {
            "id": "CO",
            "showAsSelected": true,
            "name": "Colombia",
            "year": 1981,
            "cities": [{
                    "name": "Bogota",
                    "yearVisited": [1981],
                    "latitude": 4.710988599999999,
                    "longitude": -74.072092
                },
                {
                    "name": "Cartagena",
                    "yearVisited": [1994, 2017],
                    "latitude": 10.3910485,
                    "longitude": -75.4794257
                },
                {
                    "name": "Barranquilla",
                    "yearVisited": [1994],
                    "latitude": 11.0041072,
                    "longitude": -74.80698129999999
                },
                {
                    "name": "Medellin",
                    "yearVisited": [2018],
                    "latitude": 6.244203,
                    "longitude": -75.5812119
                },
                {
                    "name": "Guatape",
                    "yearVisited": [2018],
                    "latitude": 6.231136999999999,
                    "longitude": -75.15346699999999
                },
                {
                    "name": "Zipaquira",
                    "yearVisited": [2006, 2018],
                    "latitude": 5.021476,
                    "longitude": -73.990955
                }
            ],
            "countryCode": flagClass + "CO"
        }, {
            "id": "US",
            "showAsSelected": true,
            "name": "United States",
            "year": 1994,
            "cities": [{
                    "name": "Los Angeles",
                    "yearVisited": [1994],
                    "latitude": 34.0522342,
                    "longitude": -118.2436849
                },
                {
                    "name": "Washington D.C.",
                    "yearVisited": [1994],
                    "latitude": 38.9071923,
                    "longitude": -77.0368707
                },
                {
                    "name": "San Diego",
                    "yearVisited": [1995],
                    "latitude": 32.715738,
                    "longitude": -117.1610838
                },
                {
                    "name": "Las Vegas",
                    "yearVisited": [1995],
                    "latitude": 36.1699412,
                    "longitude": -115.1398296
                },
                {
                    "name": "San Francisco",
                    "yearVisited": [1998],
                    "latitude": 37.7749295,
                    "longitude": -122.4194155
                },
                {
                    "name": "Houston",
                    "yearVisited": [2000],
                    "latitude": 29.7604267,
                    "longitude": -95.3698028
                },
                {
                    "name": "Mammoth Lakes",
                    "yearVisited": [2000],
                    "latitude": 37.648546,
                    "longitude": -118.972079
                },
                {
                    "name": "Chicago",
                    "yearVisited": [2011],
                    "latitude": 41.8781136,
                    "longitude": -87.6297982
                },
                {
                    "name": "Seattle",
                    "yearVisited": [2013],
                    "latitude": 47.6062095,
                    "longitude": -122.3320708
                },
                {
                    "name": "New York City",
                    "yearVisited": [2014],
                    "latitude": 40.7127753,
                    "longitude": -74.0059728
                },
                {
                    "name": "Miami",
                    "yearVisited": [2016],
                    "latitude": 25.7616798,
                    "longitude": -80.1917902
                },
                {
                    "name": "Cape Canaveral",
                    "yearVisited": [2016],
                    "latitude": 28.4740089,
                    "longitude": -80.5771737
                },
                {
                    "name": "Austin",
                    "yearVisited": [2016],
                    "latitude": 30.267153,
                    "longitude": -97.7430608
                },
                {
                    "name": "Dallas",
                    "yearVisited": [2016],
                    "latitude": 32.7766642,
                    "longitude": -96.79698789999999
                },
                {
                    "name": "Asheville",
                    "yearVisited": [2017],
                    "latitude": 35.5950581,
                    "longitude": -82.5514869
                }
            ],
            "countryCode": flagClass + "US"
        }, {
            "id": "GB",
            "showAsSelected": true,
            "name": "Great Britain",
            "year": 2002,
            "cities": [{
                    "name": "London",
                    "yearVisited": [2002],
                    "latitude": 51.5073509,
                    "longitude": -0.1277583
                },
                {
                    "name": "Widsor Castle",
                    "yearVisited": [2002],
                    "latitude": 51.483894,
                    "longitude": -0.6044027
                },
                {
                    "name": "Bath",
                    "yearVisited": [2002],
                    "latitude": 51.375801,
                    "longitude": -2.3599039
                },
                {
                    "name": "Stonehenge",
                    "yearVisited": [2002],
                    "latitude": 51.17888199999999,
                    "longitude": -1.826215
                },
                {
                    "name": "Bristol",
                    "yearVisited": [2006],
                    "latitude": 51.454513,
                    "longitude": -2.58791
                }
            ],
            "countryCode": flagClass + "GB"
        }, {
            "id": "FR",
            "showAsSelected": true,
            "name": "France",
            "year": 2002,
            "cities": [{
                    "name": "Paris",
                    "yearVisited": [2002],
                    "latitude": 48.856614,
                    "longitude": 2.3522219
                },
                {
                    "name": "Nice",
                    "yearVisited": [2006],
                    "latitude": 43.7101728,
                    "longitude": 7.261953200000001
                },
                {
                    "name": "Antibes",
                    "yearVisited": [2006],
                    "latitude": 43.58041799999999,
                    "longitude": 7.125102
                },
                {
                    "name": "Cannes",
                    "yearVisited": [2006],
                    "latitude": 43.552847,
                    "longitude": 7.017369
                },
            ],
            "countryCode": flagClass + "FR"
        }, {
            "id": "MX",
            "showAsSelected": true,
            "name": "Mexico",
            "year": 2006,
            "cities": [{
                    "name": "Mazatlan",
                    "yearVisited": [2006],
                    "latitude": 23.2494148,
                    "longitude": -106.4111425
                },
                {
                    "name": "La Ticla",
                    "yearVisited": [2006],
                    "latitude": 18.4543533,
                    "longitude": -103.5541312
                },
                {
                    "name": "Rosarito",
                    "yearVisited": [2006],
                    "latitude": 32.3661011,
                    "longitude": -117.0617553
                }
            ],
            "countryCode": flagClass + "MX"
        }, {
            "id": "IT",
            "showAsSelected": true,
            "name": "Italy",
            "year": 2006,
            "cities": [{
                    "name": "Rome",
                    "yearVisited": [2006],
                    "latitude": 41.9027835,
                    "longitude": 12.4963655
                },
                {
                    "name": "Venice",
                    "yearVisited": [2006],
                    "latitude": 45.4408474,
                    "longitude": 12.3155151
                },
                {
                    "name": "Verona",
                    "yearVisited": [2006],
                    "latitude": 45.43838419999999,
                    "longitude": 10.9916215
                },
                {
                    "name": "Florence",
                    "yearVisited": [2006],
                    "latitude": 43.7695604,
                    "longitude": 11.2558136
                }
            ],
            "countryCode": flagClass + "IT"
        }, {
            "id": "VA",
            "showAsSelected": true,
            "name": "Vatican City",
            "year": 2006,
            "cities": [{
                "name": "Vatican City",
                "yearVisited": [2006],
                "latitude": 41.902916,
                "longitude": 12.453389
            }],
            "countryCode": flagClass + "VA"
        }, {
            "id": "MC",
            "showAsSelected": true,
            "name": "Monaco",
            "year": 2006,
            "cities": [{
                "name": "Monaco",
                "yearVisited": [2006],
                "latitude": 43.73841760000001,
                "longitude": 7.424615799999999
            }],
            "countryCode": flagClass + "MC"
        }, {
            "id": "NL",
            "showAsSelected": true,
            "name": "Netherlands",
            "year": 2006,
            "cities": [{
                "name": "Amsterdam",
                "yearVisited": [2006],
                "latitude": 52.3702157,
                "longitude": 4.895167900000001
            }, ],
            "countryCode": flagClass + "NL"
        }, {
            "id": "DE",
            "showAsSelected": true,
            "name": "Germany",
            "year": 2006,
            "cities": [{
                "name": "Berlin",
                "yearVisited": [2006],
                "latitude": 52.52000659999999,
                "longitude": 13.404954
            }, ],
            "countryCode": flagClass + "DE"
        }, {
            "id": "CA",
            "showAsSelected": true,
            "name": "Canada",
            "year": 2013,
            "cities": [{
                "name": "Vancouver",
                "yearVisited": [2013],
                "latitude": 49.2827291,
                "longitude": -123.1207375
            }, ],
            "countryCode": flagClass + "CA"
        }, {
            "id": "HR",
            "showAsSelected": true,
            "name": "Croatia",
            "year": 2017,
            "cities": [{
                    "name": "Split",
                    "yearVisited": [2017],
                    "latitude": 43.5081323,
                    "longitude": 16.4401935
                },
                {
                    "name": "Dubrovnik",
                    "yearVisited": [2017],
                    "latitude": 42.65066059999999,
                    "longitude": 18.0944238
                },
                {
                    "name": "Sinj",
                    "yearVisited": [2017],
                    "latitude": 43.702943,
                    "longitude": 16.6375286
                },
            ],
            "countryCode": flagClass + "HR"
        }, {
            "id": "CZ",
            "showAsSelected": true,
            "name": "Czech Republic",
            "year": 2017,
            "cities": [{
                    "name": "Prague",
                    "yearVisited": [2017],
                    "latitude": 50.0755381,
                    "longitude": 14.4378005
                },
                {
                    "name": "Plzen",
                    "yearVisited": [2017],
                    "latitude": 49.7384314,
                    "longitude": 13.3736371
                },
                {
                    "name": "Karlstejn",
                    "yearVisited": [2017],
                    "latitude": 49.9395043,
                    "longitude": 14.1880461
                },
            ],
            "countryCode": flagClass + "CZ"
        }, {
            "id": "PT",
            "showAsSelected": true,
            "name": "Portugal",
            "year": 2017,
            "cities": [{
                    "name": "Lisbon",
                    "yearVisited": [2017],
                    "latitude": 38.7222524,
                    "longitude": -9.1393366
                },
                {
                    "name": "Porto",
                    "yearVisited": [2017],
                    "latitude": 41.1579438,
                    "longitude": -8.629105299999999
                },
                {
                    "name": "Benagil",
                    "yearVisited": [2017],
                    "latitude": 37.0887105,
                    "longitude": -8.4311101
                },
                {
                    "name": "Lagos",
                    "yearVisited": [2017],
                    "latitude": 37.1027881,
                    "longitude": -8.6730275
                },
            ],
            "countryCode": flagClass + "PT"
        }, {
            "id": "PL",
            "showAsSelected": true,
            "name": "Poland",
            "year": 2017,
            "cities": [{
                "name": "Krakow",
                "yearVisited": [2017],
                "latitude": 50.06465009999999,
                "longitude": 19.9449799
            }, ],
            "countryCode": flagClass + "PL"
        }, {
            "id": "MA",
            "showAsSelected": true,
            "name": "Morocco",
            "year": 2017,
            "cities": [{
                    "name": "Tangier",
                    "yearVisited": [2017],
                    "latitude": 35.7594651,
                    "longitude": -5.833954299999999
                },
                {
                    "name": "Fes",
                    "yearVisited": [2017],
                    "latitude": 34.0181246,
                    "longitude": -5.0078451
                },
                {
                    "name": "Merzouga",
                    "yearVisited": [2017],
                    "latitude": 31.0801676,
                    "longitude": -4.013361
                },
                {
                    "name": "Marrakesh",
                    "yearVisited": [2017],
                    "latitude": 31.6294723,
                    "longitude": -7.981084500000001
                },
            ],
            "countryCode": flagClass + "MA"
        }, {
            "id": "ES",
            "showAsSelected": true,
            "name": "Spain",
            "year": 2017,
            "cities": [{
                    "name": "Barcelona",
                    "yearVisited": [2017],
                    "latitude": 41.3850639,
                    "longitude": 2.1734035
                },
                {
                    "name": "Pamplona",
                    "yearVisited": [2017],
                    "latitude": 42.812526,
                    "longitude": -1.6457745
                },
                {
                    "name": "Seville",
                    "yearVisited": [2018],
                    "latitude": 37.3890924,
                    "longitude": -5.9844589
                },
                {
                    "name": "Malaga",
                    "yearVisited": [2018],
                    "latitude": 36.7212737,
                    "longitude": -4.4213988
                },
            ],
            "countryCode": flagClass + "ES"
        }, {
            "id": "BG",
            "showAsSelected": true,
            "name": "Bulgaria",
            "year": 2017,
            "cities": [{
                    "name": "Sofia",
                    "yearVisited": [2017],
                    "latitude": 42.6977082,
                    "longitude": 23.3218675
                },
                {
                    "name": "Plovdiv",
                    "yearVisited": [2017],
                    "latitude": 42.1354079,
                    "longitude": 24.7452904
                },
                {
                    "name": "Aldomirovtsi",
                    "yearVisited": [2018],
                    "latitude": 42.8480157,
                    "longitude": 22.9856062
                },
                {
                    "name": "Veliko Tarnovo",
                    "yearVisited": [2018],
                    "latitude": 43.0756739,
                    "longitude": 25.6171514
                },
                {
                    "name": "Tryavna",
                    "yearVisited": [2018],
                    "latitude": 42.87665200000001,
                    "longitude": 25.4988388
                },
            ],
            "countryCode": flagClass + "BG"
        }, {
            "id": "IL",
            "showAsSelected": true,
            "name": "Israel",
            "year": 2017,
            "cities": [{
                "name": "Tel Aviv",
                "yearVisited": [2017],
                "latitude": 32.0852999,
                "longitude": 34.78176759999999
            }, ],
            "countryCode": flagClass + "IL"
        }, {
            "id": "TR",
            "showAsSelected": true,
            "name": "Turkey",
            "year": 2017,
            "cities": [{
                "name": "Istanbul",
                "yearVisited": [2017],
                "latitude": 41.0082376,
                "longitude": 28.9783589
            }, ],
            "countryCode": flagClass + "TR"
        }, {
            "id": "VN",
            "showAsSelected": true,
            "name": "Vietnam",
            "year": 2017,
            "cities": [{
                    "name": "Hanoi",
                    "yearVisited": [2017],
                    "latitude": 21.0277644,
                    "longitude": 105.8341598
                },
                {
                    "name": "Ha Long Bay",
                    "yearVisited": [2017],
                    "latitude": 20.9100512,
                    "longitude": 107.1839024
                },
            ],
            "countryCode": flagClass + "VN"
        }, {
            "id": "TH",
            "showAsSelected": true,
            "name": "Thailand",
            "year": 2017,
            "cities": [{
                    "name": "Chiang Mai",
                    "yearVisited": [2017],
                    "latitude": 18.7060641,
                    "longitude": 98.9817163
                },
                {
                    "name": "Pai",
                    "yearVisited": [2017],
                    "latitude": 19.3582191,
                    "longitude": 98.44048629999999
                },
                {
                    "name": "Chiang Rai",
                    "yearVisited": [2017],
                    "latitude": 19.9104798,
                    "longitude": 99.840576
                },
                {
                    "name": "Doi Inthanon",
                    "yearVisited": [2017],
                    "latitude": 18.5880431,
                    "longitude": 98.4870612
                },
            ],
            "countryCode": flagClass + "TH"
        }, {
            "id": "JP",
            "showAsSelected": true,
            "name": "Japan",
            "year": 2017,
            "cities": [{
                    "name": "Kyoto",
                    "yearVisited": [2017],
                    "latitude": 35.0116363,
                    "longitude": 135.7680294
                },
                {
                    "name": "Kobe",
                    "yearVisited": [2017],
                    "latitude": 34.690083,
                    "longitude": 135.1955112
                },
                {
                    "name": "Osaka",
                    "yearVisited": [2017],
                    "latitude": 34.6937378,
                    "longitude": 135.5021651
                },
                {
                    "name": "Tokyo",
                    "yearVisited": [2017],
                    "latitude": 35.6894875,
                    "longitude": 139.6917064
                },
                {
                    "name": "Hiroshima",
                    "yearVisited": [2017],
                    "latitude": 34.3852029,
                    "longitude": 132.4552927
                },
                {
                    "name": "Miyajima",
                    "yearVisited": [2017],
                    "latitude": 34.2796599,
                    "longitude": 132.3114041
                },
                {
                    "name": "Toyama",
                    "yearVisited": [2017],
                    "latitude": 36.6959518,
                    "longitude": 137.2136768
                },
            ],
            "countryCode": flagClass + "JP"
        },
        {
            "id": "MY",
            "showAsSelected": true,
            "name": "Malaysia",
            "year": 2017,
            "cities": [{
                    "name": "Kuala Lumpur",
                    "yearVisited": [2017],
                    "latitude": 3.139003,
                    "longitude": 101.686855
                },
                {
                    "name": "Panang",
                    "yearVisited": [2017],
                    "latitude": 5.2999806,
                    "longitude": 100.2743579
                },
                {
                    "name": "Langkawi",
                    "yearVisited": [2017],
                    "latitude": 6.35,
                    "longitude": 99.8
                },
            ],
            "countryCode": flagClass + "MY"
        },
        {
            "id": "PE",
            "showAsSelected": true,
            "name": "Peru",
            "year": 2017,
            "cities": [{
                    "name": "Lima",
                    "yearVisited": [2017],
                    "latitude": -12.0463731,
                    "longitude": -77.042754
                },
                {
                    "name": "Aguas Calientes",
                    "yearVisited": [2017],
                    "latitude": -13.1547062,
                    "longitude": -72.5254412
                },
                {
                    "name": "Machu Picchu",
                    "yearVisited": [2017],
                    "latitude": -13.1631412,
                    "longitude": -72.5449629
                },
            ],
            "countryCode": flagClass + "PE"
        },
        {
            "id": "GR",
            "showAsSelected": true,
            "name": "Greece",
            "year": 2018,
            "cities": [{
                    "name": "Athens",
                    "yearVisited": [2018],
                    "latitude": 37.9838096,
                    "longitude": 23.7275388
                },
            ],
            "countryCode": flagClass + "GR"
        },
    ]

    //Countries' data
    // add country codes from this list: 
    // http://www.nationsonline.org/oneworld/country_code_list.htm

    return services;
})