/**
 * Created by jonat on 15/11/2016.
 */
var caching = require('./caching');
var fuzzy = require('fuzzy');

module.exports = function (term) {

    var results = null;
    var cachedResult = caching.autocomplete.get(term);

    if (cachedResult) {
        results = cachedResult;
    } else {
        var options = {
            pre: '<', post: '>'
        };

        results = fuzzy.filter(term, caching.fileCache.get('autocomplete'), options);

        results = results.map(function (resultItem) {
            return resultItem.original;
        });

        caching.autocomplete.set(term, results);

    }

    return results;

}
