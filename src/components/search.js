(function(){

    //"use strict";

    angular
        .module("app.spotify")
        .directive("search", search);

    search.$inject = ['SpotifyService'];

    function search(SpotifyService) {

        return {
            restrict: 'E',
            templateUrl: 'components/searchPartial.html',
            link: linkFn
        };

        function linkFn(scope){

            scope.search = function(query){
                SpotifyService.searchArtists(query)
                    .then(showArtistResults)
                    .catch(unableToResults);

                SpotifyService.searchAlbums(query)
                    .then(showAlbumResults)
                    .catch(unableToResults);
            }

            function showArtistResults(artists){
                scope.artists = artists.splice(0,4);
            }

            function showAlbumResults(albums){
                scope.albums = albums.splice(0,4);
            }

            function unableToResults(error){
                console.error(error);
                scope.error = "Unable to complete search";
            }
        }

    }

})();