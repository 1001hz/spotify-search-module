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
            var artistData = {
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
            };

            var albumData = {
                "albums" : {
                    "href" : "https://api.spotify.com/v1/search?query=clear+moon&offset=0&limit=20&type=album",
                    "items" : [ {
                        "album_type" : "album",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/24Hcz1suJdxaNrgEC8BG7v"
                        },
                        "href" : "https://api.spotify.com/v1/albums/24Hcz1suJdxaNrgEC8BG7v",
                        "id" : "24Hcz1suJdxaNrgEC8BG7v",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/b022aca5cee28c6d29f57b30d59f5dddfd1320a8",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/6389a2f43e864b51b3c4c77ee7f3a6b486587bc8",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/38fdc9f220ee542a190c9e90e7a45136298dcc9e",
                            "width" : 64
                        } ],
                        "name" : "Clear Moon",
                        "type" : "album",
                        "uri" : "spotify:album:24Hcz1suJdxaNrgEC8BG7v"
                    }, {
                        "album_type" : "album",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/3f5qjHMPAC1ZQiwCUWatkR"
                        },
                        "href" : "https://api.spotify.com/v1/albums/3f5qjHMPAC1ZQiwCUWatkR",
                        "id" : "3f5qjHMPAC1ZQiwCUWatkR",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/38471613b397e6c08edc4b59eec45c975def7064",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/3bf9c34f41dd1b1a7b3897ef0f26e0995b0d36be",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/154feba085fdba0db11b96c454d72f294e65e52d",
                            "width" : 64
                        } ],
                        "name" : "Clear Blue Flame",
                        "type" : "album",
                        "uri" : "spotify:album:3f5qjHMPAC1ZQiwCUWatkR"
                    }, {
                        "album_type" : "single",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/4IgraXtj4U9CKKfcq6KhoS"
                        },
                        "href" : "https://api.spotify.com/v1/albums/4IgraXtj4U9CKKfcq6KhoS",
                        "id" : "4IgraXtj4U9CKKfcq6KhoS",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/7c967e12e375fc59ed1e29ab93d5453ba0e8ddaf",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/4c6c06a672667fb133f56a76b157ec0b6c479328",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/9f2e605ffd49177806fa7951f1c48bed3d61ac31",
                            "width" : 64
                        } ],
                        "name" : "Clear The Moon",
                        "type" : "album",
                        "uri" : "spotify:album:4IgraXtj4U9CKKfcq6KhoS"
                    }, {
                        "album_type" : "single",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/4H4E3mP2OAgsnaqHjlaMf8"
                        },
                        "href" : "https://api.spotify.com/v1/albums/4H4E3mP2OAgsnaqHjlaMf8",
                        "id" : "4H4E3mP2OAgsnaqHjlaMf8",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/a7cc3bfa5880eef9759f687e7d0c54eb4f270e6e",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/08a7dc3dbf8b567b3e097fd539fc844d9b505e27",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/35d68cefc6e366464562b6ec644b5df51ce90507",
                            "width" : 64
                        } ],
                        "name" : "Clear Moon - Single",
                        "type" : "album",
                        "uri" : "spotify:album:4H4E3mP2OAgsnaqHjlaMf8"
                    }, {
                        "album_type" : "single",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/6Ed1xxHplBdbzsHampom1m"
                        },
                        "href" : "https://api.spotify.com/v1/albums/6Ed1xxHplBdbzsHampom1m",
                        "id" : "6Ed1xxHplBdbzsHampom1m",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/e11c91ffb046705de00fe5b56d2225c0df6fb2a7",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/3c15b67c371453aa8027474241e1137366f629d0",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/1e5e603cb72f01d953b2bdf683b8767cfa408d9e",
                            "width" : 64
                        } ],
                        "name" : "The Clear EP",
                        "type" : "album",
                        "uri" : "spotify:album:6Ed1xxHplBdbzsHampom1m"
                    }, {
                        "album_type" : "album",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/1CohFLSmxPOEcjKIebAPp9"
                        },
                        "href" : "https://api.spotify.com/v1/albums/1CohFLSmxPOEcjKIebAPp9",
                        "id" : "1CohFLSmxPOEcjKIebAPp9",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/c04d22cae37c3bf76d6f594a787cdf7356f461d1",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/dc99617749b50e12a8bdaa03f3b754ac8e5502b3",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/89c9111d3d7854d65d4b127c146a131db9da0e6c",
                            "width" : 64
                        } ],
                        "name" : "Reflection of a Clear Moon",
                        "type" : "album",
                        "uri" : "spotify:album:1CohFLSmxPOEcjKIebAPp9"
                    }, {
                        "album_type" : "album",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/3mISWG51DOkH8HZbqyyJae"
                        },
                        "href" : "https://api.spotify.com/v1/albums/3mISWG51DOkH8HZbqyyJae",
                        "id" : "3mISWG51DOkH8HZbqyyJae",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/14cc69bc828b803b599a7c40d7669c4163a5d2df",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/ccd70200e23f906623163a8e2eabecf853efdc66",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/b72cf5cc20e2d4e7cfa37364baf49daeec50b26a",
                            "width" : 64
                        } ],
                        "name" : "Reflection of a Clear Moon",
                        "type" : "album",
                        "uri" : "spotify:album:3mISWG51DOkH8HZbqyyJae"
                    }, {
                        "album_type" : "album",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/2uAHOB9FQFL5Ez2rDjLdQD"
                        },
                        "href" : "https://api.spotify.com/v1/albums/2uAHOB9FQFL5Ez2rDjLdQD",
                        "id" : "2uAHOB9FQFL5Ez2rDjLdQD",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/ec4ca1a496bd9282c91b382ffdc25b1aa3f56b30",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/6c14e9b88777682fb3e53548d6f01375a5489eb3",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/87f6cf2a8979deab21879ff3c2680a0b012a9ffb",
                            "width" : 64
                        } ],
                        "name" : "Clear Moon On Still Waters",
                        "type" : "album",
                        "uri" : "spotify:album:2uAHOB9FQFL5Ez2rDjLdQD"
                    }, {
                        "album_type" : "album",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/3GMXyQyh8G6r8wfHGR1GUP"
                        },
                        "href" : "https://api.spotify.com/v1/albums/3GMXyQyh8G6r8wfHGR1GUP",
                        "id" : "3GMXyQyh8G6r8wfHGR1GUP",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/0d497598bcfeb30cda884ee0d397b012a517c2a3",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/7f3032ac56d539cc0afc2f6b2fb8e2e24a820d44",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/60b8fb4e0dddef0f98f93c2adbf9faa0a4ff4a6d",
                            "width" : 64
                        } ],
                        "name" : "The Bright Side of the Moon (Clear Light)",
                        "type" : "album",
                        "uri" : "spotify:album:3GMXyQyh8G6r8wfHGR1GUP"
                    }, {
                        "album_type" : "album",
                        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/1lu6bv71yv6suYfsE5fX6i"
                        },
                        "href" : "https://api.spotify.com/v1/albums/1lu6bv71yv6suYfsE5fX6i",
                        "id" : "1lu6bv71yv6suYfsE5fX6i",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/36ffb7c00589a3f9d6ebf91eacd7f7b0c420db77",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/22f214920c48279262993e377a068c7bd2fb196e",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/52ef62ff43ffaead75a0c403d4d22362bd05b66e",
                            "width" : 64
                        } ],
                        "name" : "When Will the Moon Be Clear and Bright",
                        "type" : "album",
                        "uri" : "spotify:album:1lu6bv71yv6suYfsE5fX6i"
                    } ],
                    "limit" : 20,
                    "next" : null,
                    "offset" : 0,
                    "previous" : null,
                    "total" : 10
                }
            };
            var p = $q.defer();
            var returnedData = endpoint == 'https://api.spotify.com/v1/search?q=artist&type=artist' ? artistData : albumData;
            p.resolve(returnedData);
            return p.promise;
        };

    });

    describe('calling search artist method', function () {

        it('should get an array of artist objects', function () {
            SpotifyService
                .searchArtists('artist')
                .then(function (albumObjects) {
                    expect(albumObjects[0]).toBeDefined();
                });
            // $q needs a digest cycle in order to properly deal with the promise
            $scope.$digest();
        });


    });


    describe('calling search albums method', function () {

        it('should get an array of album objects', function () {
            SpotifyService
                .searchAlbums('clear moon')
                .then(function (albumObjects) {
                    expect(albumObjects[0]).toBeDefined();
                });
            // $q needs a digest cycle in order to properly deal with the promise
            $scope.$digest();
        });

    });


});