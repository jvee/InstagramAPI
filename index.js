var apiBridge = require('APIBridge');

module.exports = apiBridge({
    name: 'Instagram',
    base: 'http://api.instagram.com/v1/',
    dataType: 'json',
    models: {
        locations: {
            search: 'locations/search',
            get: 'locations/:id',
            recent: 'locations/:id/media/recent'
        }
    }
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