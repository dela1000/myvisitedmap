const rndServices = angular.module('rndServices', [])

rndServices.service('rndServices', function() {
  const services = {};

  //Countries' data
  // add country codes from this list:
  // http://www.nationsonline.org/oneworld/country_code_list.htm
  const flagClass = "flag-icon flag-icon-"


  services.rndData = [
    {
      "id": "MA",
      "showAsSelected": true,
      "name": "Morocco",
      "year": 2019,
      "countryCode": flagClass + "MA",
      "cities": [
        {
          "name": "Marrakesh",
          "yearVisited": [2019],
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
      "id": "HR",
      "showAsSelected": true,
      "name": "Croatia",
      "year": 2019,
      "countryCode": flagClass + "HR",
      "cities": [{
          "name": "Dubrovnik",
          "yearVisited": [2019],
          "latitude": 42.65066059999999,
          "longitude": 18.0944238
        }],
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
      "id": "IE",
      "showAsSelected": true,
      "name": "Ireland",
      "year": 2019,
      "countryCode": flagClass + "IE",
      "cities": [
        {
          "name": "Sixmilebridge",
          "yearVisited": [2019],
          "latitude": 52.7436246,
          "longitude": -8.777650399999999,
        },
        {
          "name": "Dublin",
          "yearVisited": [2020],
          "latitude": 53.3498053,
          "longitude": -6.2603097,
        },
      ],
    },{
      "id": "IT",
      "showAsSelected": true,
      "name": "Italy",
      "year": 2020,
      "countryCode": flagClass + "IT",
      "cities": [{
          "name": "Rome",
          "yearVisited": [2020],
          "latitude": 41.9027835,
          "longitude": 12.4963655
        },
        {
          "name": "Florence",
          "yearVisited": [2020],
          "latitude": 43.7695604,
          "longitude": 11.2558136
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
        },
        {
          "name": "Naples",
          "yearVisited": [2022],
          "latitude": 40.8517983,
          "longitude": 14.26812,
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
      "id": "US",
      "showAsSelected": true,
      "name": "United States",
      "year": 2020,
      "countryCode": flagClass + "US",
      "cities": [{
          "name": "Los Angeles",
          "yearVisited": [2020],
          "latitude": 34.0522342,
          "longitude": -118.2436849
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
    },
    {
      "id": "MX",
      "showAsSelected": true,
      "name": "Mexico",
      "year": 2020,
      "countryCode": flagClass + "MX",
      "cities": [{
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
    },
    {
      "id": "NL",
      "showAsSelected": true,
      "name": "Netherlands",
      "year": 2021,
      "countryCode": flagClass + "NL",
      "cities": [{
        "name": "Amsterdam",
        "yearVisited": [2021],
        "latitude": 52.3702157,
        "longitude": 4.895167900000001
      },
    {
        "name": "Delft",
        "yearVisited": [2021],
        "latitude": 52.01157689999999,
        "longitude": 4.3570677
      },],
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
      "id": "PT",
      "showAsSelected": true,
      "name": "Portugal",
      "year": 2021,
      "countryCode": flagClass + "PT",
      "cities": [{
          "name": "Porto",
          "yearVisited": [2021],
          "latitude": 41.1579438,
          "longitude": -8.629105299999999
        },
        {
          "name": "Douro Valley",
          "yearVisited": [2021],
          "latitude": 41.17133889999999,
          "longitude": -7.802805800000001
        },
      ],
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
    {
      "id": "EG",
      "showAsSelected": true,
      "name": "Egypt",
      "year": 2022,
      "countryCode": flagClass + "EG",
      "cities": [{
          "name": "Cairo",
          "yearVisited": [2022],
          "latitude": 30.0444196,
          "longitude": 31.2357116,
        },
      ],
    },
    {
      "id": "ES",
      "showAsSelected": true,
      "name": "Spain",
      "year": 2022,
      "countryCode": flagClass + "ES",
      "cities": [{
          "name": "Madrid",
          "yearVisited": [2022],
          "latitude": 40.4167754,
          "longitude": -3.7037902
        },
        {
          "name": "Granada",
          "yearVisited": [2022],
          "latitude": 37.1773363,
          "longitude": -3.5985571
        },
      ],
    },
    {
      "id": "CZ",
      "showAsSelected": true,
      "name": "Czech Republic",
      "year": 2022,
      "countryCode": flagClass + "CZ",
      "cities": [{
          "name": "Prague",
          "yearVisited": [2022],
          "latitude": 50.0755381,
          "longitude": 14.4378005
        },
      ],
    },
  ]

  //Countries' data
  // add country codes from this list:
  // http://www.nationsonline.org/oneworld/country_code_list.htm

  return services;
})
