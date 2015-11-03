(function () {

    'use strict';

    angular.module('app', ['app.spotify']);
    angular.module('app.spotify', []);

    angular
        .module('app.spotify')
        .controller('testController', testController);

    testController.$inject = ['SpotifyService'];

    function testController(SpotifyService) {


    }

})();