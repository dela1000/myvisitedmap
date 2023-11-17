//Angular code for list
const app = angular
  .module('countriesApp', ['dsServices', 'rndServices', 'keyProvider'])
  .constant('_', window._);

app.controller(
  'countryMapController',
  function ($scope, $http, dsServices, rndServices, keyProvider, _) {
    let dSelected;

    $scope.hideCitiesFlag = false;
    $scope.hideCitiesTitle = 'Hide';

    //For Countries Table
    $scope.switchData = () => {
      if (dSelected === true) {
        $scope.countries = _.cloneDeep(rndServices.rndData);
        $scope.listName = 'RnD';
        dSelected = false;
      } else {
        $scope.countries = _.cloneDeep(dsServices.dsData);
        $scope.listName = 'Daniel';
        dSelected = true;
      }

      createMap($scope.countries);
    };

    $scope.hideCities = () => {
      $scope.hideCitiesFlag = !$scope.hideCitiesFlag;
      if ($scope.hideCitiesTitle === 'Hide') {
        $scope.hideCitiesTitle = 'Show';
      } else {
        $scope.hideCitiesTitle = 'Hide';
      }
    };

    const createMap = (dataSelected) => {
      const targetSVG =
        'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';

      //Add cities to map
      const cityDataArray = [];

      dataSelected.forEach((country) => {
        if (country.cities) {
          country.cities.forEach((cityData) => {
            const city = new AmCharts.MapImage();
            city.title = cityData.name;
            if (cityData.latitude) {
              city.latitude = cityData.latitude;
              city.longitude = cityData.longitude;
            }
            city.svgPath = targetSVG;
            city.zoomLevel = 10;
            city.scale = 0.5;
            cityDataArray.push(city);
          });
        }
      });

      //Map code
      AmCharts.makeChart('mapdiv', {
        type: 'map',
        theme: 'dark',

        imagesSettings: {
          rollOverColor: '#089282',
          rollOverScale: 3,
          selectedScale: 3,
          selectedColor: '#089282',
          color: '#13564e'
        },
        projection: 'mercator',
        panEventsEnabled: true,
        backgroundColor: '#e1e1e1',
        backgroundAlpha: 1,
        zoomControl: {
          zoomControlEnabled: true
        },
        dataProvider: {
          map: 'worldHigh',
          getAreasFromMap: true,
          images: cityDataArray,
          areas: dataSelected
        },
        areasSettings: {
          autoZoom: true,
          selectedColor: '#9BABB2', //Countries visited
          outlineColor: '#000000', //Countries outlines
          color: '#cccccc', //Countries NOT Visited
          rollOverColor: '#F2EEE3', //Hover over countries NOT visited
          rollOverOutlineColor: '#000000' //Hover over countries outline NOT visited
        }
      });
    };

    //// To get lat longs using Google Maps
    $scope.getLatLngData = () => {
      $scope.countries.forEach((country) => {
        country.cities.forEach((city) => {
          if (city.latitude == null || city.longitude == null) {
            let link =
              'https://maps.googleapis.com/maps/api/geocode/json?address=' +
              city.name +
              '&region=' +
              country.id +
              '&key=' +
              keyProvider.googleMapsApiKey;
            $http.get(link).then((data) => {
              if (data.data.results.length > 0) {
                city['latitude'] = data.data.results[0].geometry.location.lat;
                city['longitude'] = data.data.results[0].geometry.location.lng;
              }
              //Add lat/lng to countries service.
              console.log('+++ app.js - city lat/lng: ', JSON.stringify(city, null, '\t'));
            });
          }
        });
      });
    };

    // Switch between Daniel and RnD
    $scope.switchData();
    //Only works after adding a city to the countries services with null lat/long values
    $scope.getLatLngData();
  }
);
