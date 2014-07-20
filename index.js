var apiBridge = require('APIBridge');

module.exports = apiBridge({
    name: 'Instagram',
    base: 'https://api.instagram.com/v1/',
    dataType: 'json',
    models: {
        locations: {
            search: 'locations/search',
            get: 'locations/:id',
            recent: 'locations/:id/media/recent'
        }
    }
});

module.exports.locations.search({
    lat: 48.858844,
    lng: 2.294351,
    client_id: '22aaafad8e8447cf883c2cbb55663de5'
});

/**
 * Ожидается на выходе:
 *
 * @example:
 *
 * var Instagram = require('InstagramAPI');
 *
 * Instagram.locations.search({ LAT: 48.858844, LNG: 2.294351 }, function (data, status (meta), requestObject) {
 *     console.log(data)
 * });
 *
 * Instagram.locations.get({ id: 1 })
 *     .then(function (requestObject) { console.log(requestObject.response) })
 *     .fail(function (error) { console.log(error.message) });
 */