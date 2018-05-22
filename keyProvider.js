var keyProvider = angular.module('keyProvider', [])
  
keyProvider.service('keyProvider', function() {
    let services = {};

    services.googleMapsApiKey = 'KEY_GOES_HERE';

    return services;
})