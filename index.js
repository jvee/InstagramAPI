var apiBridge = require('APIBridge');
var api;

module.exports = api = apiBridge({

    '.': {
        data: {
            client_id: '22aaafad8e8447cf883c2cbb55663de5'
        },

        prefilter: function (options) {
            options.url = 'https://api.instagram.com/v1/' + options.url;
        },

        processResult: function (options, result) {
            console.log('[DONE]: ' + options.url);

            // cleaning result
            // setting result = result.data
        }
    },

    '.locations': {}, // бага

    '.locations.search': 'locations/search',
    '.locations.get': 'locations/:id',
    '.locations.recent': 'locations/:id/media/recent'

});

api.locations.search({
    lat: 48.858844,
    lng: 2.294351
});

api.locations.get({
    id: 1
});

api.locations.recent({
    id: 1
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