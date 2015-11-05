(function () {

    'use strict';

    angular
        .module('app.spotify')
        .factory('Artist', Artist);

    function Artist() {

        /**
         * Constructor, with class name
         */
        function Artist(id, name, genres, images, thumbnail, openInSpotify) {
            this.id = id;
            this.name = name;
            this.genres = genres;
            this.images = images;
            this.thumbnail = thumbnail;
            this.openInSpotify = openInSpotify;
        }

        Artist.build = function (artist) {
            artist.images.sort(
                function(a,b) {
                    if (a.width < b.width)
                        return -1;
                    if (a.width > b.width)
                        return 1;
                    return 0;
                }
            );
            var thumbnail = artist.images.length > 0 ? artist.images[0].url : '';
            return new Artist(
                artist.id,
                artist.name,
                artist.genres,
                artist.images,
                thumbnail,
                artist.external_urls.spotify
            );
        };

        Artist.buildFromApi = function (data) {
            if (angular.isArray(data.artists.items)) {
                return data.artists.items
                    .map(Artist.build)
                    .filter(Boolean);
            }
            return Artist.build(data.artists.items);
        };

        /**
         * Return the constructor function
         */
        return Artist;

    }

})();