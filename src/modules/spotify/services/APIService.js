(function () {

    'use strict';

    angular
        .module('app.spotify')
        .factory('APIService', APIService);

    APIService.$inject = ['$http', '$q'];

    function APIService($http, $q) {

        return{
            get: function(endpoint){
                var defer = $q.defer();
                $http({
                    method: 'GET',
                    url: endpoint,
                }).then(function(response){
                    defer.resolve(response.data);
                }).catch(function(error){
                    defer.reject(error);
                });
                return defer.promise;
            }
        }

    }

})();