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
                    .then(showResults)
                    .catch(unableToGetArtist);
            }

            function showResults(artists){
                scope.artists = artists;
            }

            function unableToGetArtist(error){
                console.error(error);
                scope.error = "Unable to complete search";
            }
        }

    }

})();