var keyProvider = angular.module('keyProvider', [])
  
keyProvider.service('keyProvider', function() {
    let services = {};

    services.googleMapsApiKey = 'keygoeshere';

    return services;
})