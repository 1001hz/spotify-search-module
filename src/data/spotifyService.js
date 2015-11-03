(function(){

    //"use strict";

    angular
        .module("app.spotify")
        .factory("SpotifyService", SpotifyService);

    SpotifyService.$inject = ['APIService', 'Artist'];

    function SpotifyService(APIService, Artist) {

        return {
            searchArtists: function (query) {
                return APIService.get("https://api.spotify.com/v1/search?q="+query+"&type=artist")
                    .then(Artist.buildFromApi);
            }
        };

    }

})();