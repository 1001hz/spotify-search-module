(function(){

    //"use strict";

    angular
        .module("app.spotify")
        .directive("search", search);

    search.$inject = ['Spotify'];

    function search(Spotify) {

        return {
            restrict: 'E',
            templateUrl: 'components/searchPartial.html',
            link: linkFn
        };

        function linkFn(scope){

            scope.search = function(query){
                Spotify.searchArtists(query)
                    .then(showArtistResults)
                    .catch(unableToResults);

                Spotify.searchAlbums(query)
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