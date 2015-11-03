describe('Spotify data provider service', function () {

    var SpotifyService;
    var $scope;
    var $q;
    function APIServiceMock(){}

    beforeEach(module('app.spotify', function($provide) {
        $provide.service('APIService', APIServiceMock);
    }));

    beforeEach(function(){
        inject(function ($injector) {
            SpotifyService = $injector.get('SpotifyService');
            $scope = $injector.get('$rootScope').$new();
            $q = $injector.get('$q');
        });

        APIServiceMock.prototype.get = function(endpoint){
            var p = $q.defer();
            p.resolve(
                {
                    "artists" : {
                        "href" : "https://api.spotify.com/v1/search?query=tuxedomoon&offset=0&limit=20&type=artist",
                        "items" : [ {
                            "external_urls" : {
                                "spotify" : "https://open.spotify.com/artist/4zn0m3hBUQVl6Nf36Sb0A6"
                            },
                            "followers" : {
                                "href" : null,
                                "total" : 5770
                            },
                            "genres" : [ "experimental", "no wave", "zolo" ],
                            "href" : "https://api.spotify.com/v1/artists/4zn0m3hBUQVl6Nf36Sb0A6",
                            "id" : "4zn0m3hBUQVl6Nf36Sb0A6",
                            "images" : [ {
                                "height" : 600,
                                "url" : "https://i.scdn.co/image/26f62b84b2fb3ed68ddf783fd5fd360d93fae140",
                                "width" : 600
                            }, {
                                "height" : 300,
                                "url" : "https://i.scdn.co/image/e736b8082f81f67ea92588c3e2f856ff6ca0c4ce",
                                "width" : 300
                            }, {
                                "height" : 64,
                                "url" : "https://i.scdn.co/image/cde9254a7e5bd30b74c26e6c6ed17f78016b4d95",
                                "width" : 64
                            } ],
                            "name" : "Tuxedomoon",
                            "popularity" : 36,
                            "type" : "artist",
                            "uri" : "spotify:artist:4zn0m3hBUQVl6Nf36Sb0A6"
                        } ],
                        "limit" : 20,
                        "next" : null,
                        "offset" : 0,
                        "previous" : null,
                        "total" : 1
                    }
                }
            );
            return p.promise;
        };

    });

    describe('calling get method', function () {

        it('should get an array of contact objects', function () {
            SpotifyService
                .searchArtists('tuxedomoon')
                .then(function (albumObjects) {
                    expect(albumObjects[0]).toBeDefined();
                });
            // $q needs a digest cycle in order to properly deal with the promise
            $scope.$digest();
        });


    });


});