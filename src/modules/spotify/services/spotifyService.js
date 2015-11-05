(function(){

    //"use strict";

    angular
        .module("app.spotify")
        .factory("Spotify", Spotify);

    Spotify.$inject = ['APIService', 'Artist', 'Album'];

    function Spotify(APIService, Artist, Album) {

        return {
            searchArtists: function (query) {
                return APIService.get("https://api.spotify.com/v1/search?q="+query+"&type=artist")
                    .then(Artist.buildFromApi);
            },
            searchAlbums: function (query) {
                return APIService.get("https://api.spotify.com/v1/search?q="+query+"&type=album")
                    .then(Album.buildFromApi);
            }
        };

    }

})();