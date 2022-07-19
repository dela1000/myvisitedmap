const dsServices = angular.module('dsServices', [])

dsServices.service('dsServices', function() {
  const services = {};

  //Countries' data
  // add country codes from this list:
  // http://www.nationsonline.org/oneworld/country_code_list.htm
  const flagClass = "flag-icon flag-icon-"

  services.dsData = [
    {
      "id": "VE",
      "showAsSelected": true,
      "name": "Venezuela",
      "year": 1981,
      "countryCode": flagClass + "ve",
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
    }, {
      "id": "CO",
      "showAsSelected": true,
      "name": "Colombia",
      "year": 1981,
      "countryCode": flagClass + "CO",
      "cities": [{
          "name": "Bogota",
          "yearVisited": [1981, 2006, 2018],
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
        },
        {
          "name": "Manta",
          "yearVisited": [2018],
          "latitude": 5.008804,
          "longitude": -73.541383,
        },
      ],
    }, {
      "id": "US",
      "showAsSelected": true,
      "name": "United States",
      "year": 1994,
      "countryCode": flagClass + "US",
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
          "name": "Palm Springs",
          "yearVisited": [1995],
          "latitude": 33.8302961,
          "longitude": -116.5452921,
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
          "name": "Memphis",
          "yearVisited": [2007],
          "latitude": 35.1495343,
          "longitude": -90.0489801,
        },
        {
          "name": "Nashville",
          "yearVisited": [2007],
          "latitude": 36.1626638,
          "longitude": -86.7816016,
        },
        {
          "name": "Lynchburg",
          "yearVisited": [2007],
          "latitude": 35.2830242,
          "longitude": -86.3740205,
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
          "yearVisited": [2014, 2017],
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
        },
        {
          "name": "St. Louis",
          "yearVisited": [2021],
          "latitude": 38.6270025,
          "longitude": -90.19940419999999
        },
        {
          "name": "Fredericktown",
          "yearVisited": [2021],
          "latitude": 37.55977540000001,
          "longitude": -90.2940069
        },
        {
          "name": "Portland",
          "yearVisited": [2021],
          "latitude": 45.5051064,
          "longitude": -122.6750261
        },
      ],
    }, {
      "id": "GB",
      "showAsSelected": true,
      "name": "Great Britain",
      "year": 2002,
      "countryCode": flagClass + "GB",
      "cities": [{
          "name": "London",
          "yearVisited": [2002, 2018],
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
          "yearVisited": [2006, 2018],
          "latitude": 51.454513,
          "longitude": -2.58791
        }
      ],
    }, {
      "id": "FR",
      "showAsSelected": true,
      "name": "France",
      "year": 2002,
      "countryCode": flagClass + "FR",
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
        {
          "name": "Annecy",
          "yearVisited": [2019],
          "latitude": 45.899247,
          "longitude": 6.129384,
        },
      ],
    }, {
      "id": "MX",
      "showAsSelected": true,
      "name": "Mexico",
      "year": 2006,
      "countryCode": flagClass + "MX",
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
        },
        {
          "name": "Mexico City",
          "yearVisited": [2020, 2021],
          "latitude": 19.4326077,
          "longitude": -99.133208,
        },
        {
          "name": "Oaxaca",
          "yearVisited": [2021],
          "latitude": 17.0731842,
          "longitude": -96.7265889,
        },
        {
          "name": "Playa del Carmen",
          "yearVisited": [2021],
          "latitude": 20.6295586,
          "longitude": -87.0738851,
        },
        {
          "name": "Merida",
          "yearVisited": [2021],
          "latitude": 20.9673702,
          "longitude": -89.5925857,
        },
      ],
    }, {
      "id": "IT",
      "showAsSelected": true,
      "name": "Italy",
      "year": 2006,
      "countryCode": flagClass + "IT",
      "cities": [{
          "name": "Rome",
          "yearVisited": [2006, 2019, 2020],
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
        },
        {
          "name": "Naples",
          "yearVisited": [2019],
          "latitude": 40.8517983,
          "longitude": 14.26812,
        },
        {
          "name": "Pompeii",
          "yearVisited": [2019],
          "latitude": 40.7461572,
          "longitude": 14.4989344,
        },
        {
          "name": "Milan",
          "yearVisited": [2020],
          "latitude": 45.4642035,
          "longitude": 9.189982,
        },
        {
          "name": "Gerano",
          "yearVisited": [2022],
          "latitude": 41.93372189999999,
          "longitude": 12.9934362,
        }
      ],
    }, {
      "id": "VA",
      "showAsSelected": true,
      "name": "Vatican City",
      "year": 2006,
      "countryCode": flagClass + "VA",
      "cities": [{
        "name": "Vatican City",
        "yearVisited": [2006],
        "latitude": 41.902916,
        "longitude": 12.453389
      }],
    }, {
      "id": "MC",
      "showAsSelected": true,
      "name": "Monaco",
      "year": 2006,
      "countryCode": flagClass + "MC",
      "cities": [{
        "name": "Monaco",
        "yearVisited": [2006],
        "latitude": 43.73841760000001,
        "longitude": 7.424615799999999
      }],
    }, {
      "id": "NL",
      "showAsSelected": true,
      "name": "Netherlands",
      "year": 2006,
      "countryCode": flagClass + "NL",
      "cities": [{
        "name": "Amsterdam",
        "yearVisited": [2006, 2021],
        "latitude": 52.3702157,
        "longitude": 4.895167900000001
      },
    {
        "name": "Delft",
        "yearVisited": [2021],
        "latitude": 52.01157689999999,
        "longitude": 4.3570677
      },],
    }, {
      "id": "DE",
      "showAsSelected": true,
      "name": "Germany",
      "year": 2006,
      "countryCode": flagClass + "DE",
      "cities": [{
          "name": "Berlin",
          "yearVisited": [2006],
          "latitude": 52.52000659999999,
          "longitude": 13.404954
        },
        {
          "name": "Frankfurt",
          "yearVisited": [2018],
          "latitude": 50.1109221,
          "longitude": 8.6821267
        },
        {
          "name": "Mainz",
          "yearVisited": [2018],
          "latitude": 49.9928617,
          "longitude": 8.2472526
        },
        {
          "name": "Munich",
          "yearVisited": [2019],
          "latitude": 48.1351253,
          "longitude": 11.5819805,
        },
      ],
    }, {
      "id": "CA",
      "showAsSelected": true,
      "name": "Canada",
      "year": 2013,
      "countryCode": flagClass + "CA",
      "cities": [{
        "name": "Vancouver",
        "yearVisited": [2013],
        "latitude": 49.2827291,
        "longitude": -123.1207375
      }, ],
    }, {
      "id": "HR",
      "showAsSelected": true,
      "name": "Croatia",
      "year": 2017,
      "countryCode": flagClass + "HR",
      "cities": [{
          "name": "Split",
          "yearVisited": [2017],
          "latitude": 43.5081323,
          "longitude": 16.4401935
        },
        {
          "name": "Dubrovnik",
          "yearVisited": [2017, 2019],
          "latitude": 42.65066059999999,
          "longitude": 18.0944238
        },
        {
          "name": "Sinj",
          "yearVisited": [2017],
          "latitude": 43.702943,
          "longitude": 16.6375286
        },
        {
          "name": "Zagreb",
          "yearVisited": [2019],
          "latitude": 45.8150108,
          "longitude": 15.9819189
        },
      ],
    }, {
      "id": "CZ",
      "showAsSelected": true,
      "name": "Czech Republic",
      "year": 2017,
      "countryCode": flagClass + "CZ",
      "cities": [{
          "name": "Prague",
          "yearVisited": [2017, 2018, 2022],
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
        {
          "name": "Kutna Hora",
          "yearVisited": [2017],
          "latitude": 49.95243139999999,
          "longitude": 15.2686536,
        },

      ],
    }, {
      "id": "PT",
      "showAsSelected": true,
      "name": "Portugal",
      "year": 2017,
      "countryCode": flagClass + "PT",
      "cities": [{
          "name": "Lisbon",
          "yearVisited": [2017, 2018],
          "latitude": 38.7222524,
          "longitude": -9.1393366
        },
        {
          "name": "Porto",
          "yearVisited": [2017, 2021],
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
        {
          "name": "Douro Valley",
          "yearVisited": [2021],
          "latitude": 41.17133889999999,
          "longitude": -7.802805800000001
        },
      ],
    }, {
      "id": "PL",
      "showAsSelected": true,
      "name": "Poland",
      "year": 2017,
      "countryCode": flagClass + "PL",
      "cities": [{
        "name": "Krakow",
        "yearVisited": [2017],
        "latitude": 50.06465009999999,
        "longitude": 19.9449799
      }, ],
    }, {
      "id": "MA",
      "showAsSelected": true,
      "name": "Morocco",
      "year": 2017,
      "countryCode": flagClass + "MA",
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
          "yearVisited": [2017, 2019],
          "latitude": 31.6294723,
          "longitude": -7.981084500000001
        },
        {
          "name": "Essaouira",
          "yearVisited": [2019],
          "latitude": 31.5084926,
          "longitude": -9.7595041,
        },
      ],
    }, {
      "id": "ES",
      "showAsSelected": true,
      "name": "Spain",
      "year": 2017,
      "countryCode": flagClass + "ES",
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
          "name": "Madrid",
          "yearVisited": [2018],
          "latitude": 40.4167754,
          "longitude": -3.7037902
        },
        {
          "name": "Seville",
          "yearVisited": [2018],
          "latitude": 37.3890924,
          "longitude": -5.9844589
        },
        {
          "name": "Granada",
          "yearVisited": [2018],
          "latitude": 37.1773363,
          "longitude": -3.5985571
        },
        {
          "name": "Valencia",
          "yearVisited": [2018, 2019],
          "latitude": 39.4699075,
          "longitude": -0.3762881
        },
        {
          "name": "Bunol",
          "yearVisited": [2018],
          "latitude": 39.4203436,
          "longitude": -0.7901334
        },
      ],
    }, {
      "id": "BG",
      "showAsSelected": true,
      "name": "Bulgaria",
      "year": 2017,
      "countryCode": flagClass + "BG",
      "cities": [{
          "name": "Sofia",
          "yearVisited": [2017, 2018],
          "latitude": 42.6977082,
          "longitude": 23.3218675
        },
        {
          "name": "Plovdiv",
          "yearVisited": [2017, 2018],
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
    }, {
      "id": "IL",
      "showAsSelected": true,
      "name": "Israel",
      "year": 2017,
      "countryCode": flagClass + "IL",
      "cities": [{
        "name": "Tel Aviv",
        "yearVisited": [2017],
        "latitude": 32.0852999,
        "longitude": 34.78176759999999
      }, ],
    }, {
      "id": "TR",
      "showAsSelected": true,
      "name": "Turkey",
      "year": 2017,
      "countryCode": flagClass + "TR",
      "cities": [{
        "name": "Istanbul",
        "yearVisited": [2017],
        "latitude": 41.0082376,
        "longitude": 28.9783589
      }, ],
    }, {
      "id": "VN",
      "showAsSelected": true,
      "name": "Vietnam",
      "year": 2017,
      "countryCode": flagClass + "VN",
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
    }, {
      "id": "TH",
      "showAsSelected": true,
      "name": "Thailand",
      "year": 2017,
      "countryCode": flagClass + "TH",
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
    }, {
      "id": "JP",
      "showAsSelected": true,
      "name": "Japan",
      "year": 2017,
      "countryCode": flagClass + "JP",
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
    },
    {
      "id": "MY",
      "showAsSelected": true,
      "name": "Malaysia",
      "year": 2017,
      "countryCode": flagClass + "MY",
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
    },
    {
      "id": "PE",
      "showAsSelected": true,
      "name": "Peru",
      "year": 2017,
      "countryCode": flagClass + "PE",
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
    },
    {
      "id": "GR",
      "showAsSelected": true,
      "name": "Greece",
      "year": 2018,
      "countryCode": flagClass + "GR",
      "cities": [{
          "name": "Athens",
          "yearVisited": [2018],
          "latitude": 37.9838096,
          "longitude": 23.7275388
        },
        {
          "name": "Agistri",
          "yearVisited": [2018],
          "latitude": 37.6890809,
          "longitude": 23.3406758
        },
        {
          "name": "Delphi",
          "yearVisited": [2018],
          "latitude": 38.4823868,
          "longitude": 22.5009699
        },
      ],
    },
    {
      "id": "RS",
      "showAsSelected": true,
      "name": "Serbia",
      "year": 2018,
      "countryCode": flagClass + "RS",
      "cities": [{
          "name": "Belgrade",
          "yearVisited": [2018],
          "latitude": 44.786568,
          "longitude": 20.4489216
        },
        {
          "name": "Novi Sad",
          "yearVisited": [2018],
          "latitude": 45.2671352,
          "longitude": 19.8335496
        },
      ],
    },
    {
      "id": "RO",
      "showAsSelected": true,
      "name": "Romania",
      "year": 2018,
      "countryCode": flagClass + "RO",
      "cities": [{
          "name": "Bucharest",
          "yearVisited": [2018, 2019],
          "latitude": 44.4267674,
          "longitude": 26.1025384
        },
        {
          "name": "Sighisoara",
          "yearVisited": [2018],
          "latitude": 46.2197025,
          "longitude": 24.7963878,
        },
        {
          "name": "Cluj",
          "yearVisited": [2018],
          "latitude": 46.7712101,
          "longitude": 23.6236353
        },
        {
          "name": "Alba Iulia",
          "yearVisited": [2018],
          "latitude": 46.07327249999999,
          "longitude": 23.5804886,
        },
        {
          "name": "Sibiu",
          "yearVisited": [2018],
          "latitude": 45.7935607,
          "longitude": 24.1212945,
        },
        {
          "name": "Bran",
          "yearVisited": [2018, 2019],
          "latitude": 45.51919179999999,
          "longitude": 25.3696831,
        },
        {
          "name": "Brasov",
          "yearVisited": [2018, 2019],
          "latitude": 45.6426802,
          "longitude": 25.5887252,
        },
      ],
    },
    {
      "id": "EG",
      "showAsSelected": true,
      "name": "Egypt",
      "year": 2019,
      "countryCode": flagClass + "EG",
      "cities": [{
          "name": "Giza",
          "yearVisited": [2019],
          "latitude": 30.0130557,
          "longitude": 31.2088526,
        },
        {
          "name": "Saqqara",
          "yearVisited": [2019],
          "latitude": 29.8760704,
          "longitude": 31.2102537,
        },
        {
          "name": "Memphis",
          "yearVisited": [2019],
          "latitude": 29.849533,
          "longitude": 31.254126,
        },
        {
          "name": "Cairo",
          "yearVisited": [2019, 2022],
          "latitude": 30.0444196,
          "longitude": 31.2357116,
        },
      ],
    },
    {
      "id": "IE",
      "showAsSelected": true,
      "name": "Ireland",
      "year": 2019,
      "countryCode": flagClass + "IE",
      "cities": [{
          "name": "Dublin",
          "yearVisited": [2019, 2020],
          "latitude": 53.3498053,
          "longitude": -6.2603097,
        },
        {
          "name": "Cork",
          "yearVisited": [2019],
          "latitude": 51.8985143,
          "longitude": -8.4756035,
        },
        {
          "name": "Galway",
          "yearVisited": [2019],
          "latitude": 53.270668,
          "longitude": -9.0567905,
        },
        {
          "name": "Sixmilebridge",
          "yearVisited": [2020],
          "latitude": 52.7436246,
          "longitude": -8.777650399999999,
        },
      ],
    },
    {
      "id": "BA",
      "showAsSelected": true,
      "name": "Bosnia and Herzegovina",
      "year": 2019,
      "countryCode": flagClass + "BA",
      "cities": [{
          "name": "Sarajevo",
          "yearVisited": [2019],
          "latitude": 43.8562586,
          "longitude": 18.4130763,
        },
        {
          "name": "Mostar",
          "yearVisited": [2019],
          "latitude": 43.34377480000001,
          "longitude": 17.8077578,
        },
      ],
    },
    {
      "id": "AT",
      "showAsSelected": true,
      "name": "Austria",
      "year": 2019,
      "countryCode": flagClass + "AT",
      "cities": [{
        "name": "Vienna",
        "yearVisited": [2019],
        "latitude": 48.2081743,
        "longitude": 16.3738189,
      }, ],
    },
    {
      "id": "ZA",
      "showAsSelected": true,
      "name": "South Africa",
      "year": 2019,
      "countryCode": flagClass + "ZA",
      "cities": [{
          "name": "Cape Town",
          "yearVisited": [2019, 2021, 2022],
          "latitude": -33.9248685,
          "longitude": 18.4240553,
        },
        {
          "name": "Manyeleti",
          "yearVisited": [2019],
          "latitude": -24.6479532,
          "longitude": 31.5262986,
        },
        {
          "name": "Cederberg",
          "yearVisited": [2021],
          "latitude": -32.5891202,
          "longitude": 19.0118251,
        },
        {
          "name": "Kogelberg",
          "yearVisited": [2022],
          "latitude": -34.3321752,
          "longitude": 18.9877857,
        },
      ],
    },
    {
      "id": "GE",
      "showAsSelected": true,
      "name": "Georgia",
      "countryCode": flagClass + "GE",
      "year": 2020,
      "cities": [{
        "name": "T'bilisi",
        "yearVisited": [2020],
        "latitude": 41.7151377,
        "longitude": 44.827096,
      }, ],
    },
    {
      "id": "HU",
      "showAsSelected": true,
      "name": "Hungary",
      "countryCode": flagClass + "HU",
      "year": 2021,
      "cities": [{
        "name": "Budapest",
        "yearVisited": [2021],
        "latitude": 47.497912,
        "longitude": 19.040235,
      }, ],
    },
    {
      "id": "NA",
      "showAsSelected": true,
      "name": "Namibia",
      "countryCode": flagClass + "NA",
      "year": 2022,
      "cities": [{
        "name": "Windhoek",
        "yearVisited": [2022],
        "latitude": -22.5608807,
        "longitude": 17.0657549,
      },
        {
        "name": "Hoanib Valley",
        "yearVisited": [2022],
        "latitude": -19.26889495039575,
        "longitude": 13.29075839237384,
        },
        {
        "name": "Etosha",
        "yearVisited": [2022],
        "latitude": -18.8555909,
        "longitude": 16.3293197,
      },
        {
        "name": "Sossusvlei",
        "yearVisited": [2022],
        "latitude": -24.7273906,
        "longitude": 15.3423909,
      }
      ],
    },
    {
      "id": "RW",
      "showAsSelected": true,
      "name": "Rwanda",
      "countryCode": flagClass + "RW",
      "year": 2022,
      "cities": [{
        "name": "Kigali",
        "yearVisited": [2022],
        "latitude": -1.9440727,
        "longitude": 30.0618851,
      }, ],
    },
    {
      "id": "UG",
      "showAsSelected": true,
      "name": "Uganda",
      "countryCode": flagClass + "UG",
      "year": 2022,
      "cities": [{
        "name": "Bugambira",
        "yearVisited": [2022],
        "latitude": -1.116667,
        "longitude": 29.7,
      }, ],
    },
  ]

  //Countries' data
  // add country codes from this list:
  // http://www.nationsonline.org/oneworld/country_code_list.htm

  return services;
})
