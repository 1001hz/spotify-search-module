(function () {

    'use strict';

    angular
        .module('app.spotify')
        .factory('Album', Album);

    function Album() {

        /**
         * Constructor, with class name
         */
        function Album(id, name, genres, images, thumbnail, openInSpotify) {
            this.id = id;
            this.name = name;
            this.genres = genres;
            this.images = images;
            this.thumbnail = thumbnail;
            this.openInSpotify = openInSpotify;
        }

        Album.build = function (album) {
            album.images.sort(
                function(a,b) {
                    if (a.width < b.width)
                        return -1;
                    if (a.width > b.width)
                        return 1;
                    return 0;
                }
            );
            var thumbnail = album.images.length > 0 ? album.images[0].url : '';
            return new Album(
                album.id,
                album.name,
                album.genres,
                album.images,
                thumbnail,
                album.external_urls.spotify
            );
        };

        Album.buildFromApi = function (data) {
            if (angular.isArray(data.albums.items)) {
                return data.albums.items
                    .map(Album.build)
                    .filter(Boolean);
            }
            return Album.build(data.albums.items);
        };

        /**
         * Return the constructor function
         */
        return Album;

    }

})();