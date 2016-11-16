var NodeCache = require("node-cache");
var fileCache = new NodeCache({useClones: true});
var autocompleteCache = new NodeCache({stdTTL: 120, checkperiod: 600});
var resultsCache = new NodeCache({stdTTL: 240, checkperiod: 1200});
var csv = require("fast-csv");
var unique = require('array-unique');

var allHotels = [];
var fuzzySearchTerms = [];


var createAutocompleteHotelsAndLocationCache = function () {

    var locationNames = {};
    csv
        .fromPath("artefatos/hoteis.txt")
        .on("data", function (data) {
            allHotels.push({id: data[0], location: data[1], name: data[2]});
            fuzzySearchTerms.push(data[1]);
            fuzzySearchTerms.push(data[2]);

            for (var i = 1; i <= 2; i++) {
                var locationTerm = data[i].toString().trim();
                if (locationNames.hasOwnProperty(locationTerm)) {
                    locationNames[locationTerm].push(data[0]);
                } else {
                    locationNames[locationTerm] = [];
                    locationNames[locationTerm].push(data[0])
                }
            }
        })
        .on("end", function () {
            fuzzySearchTerms = unique(fuzzySearchTerms);
            fileCache.set('hotels', allHotels);
            fileCache.set('autocomplete', fuzzySearchTerms);
            allHotels = null;
            fuzzySearchTerms = null;
            fileCache.set('location-names', locationNames);
            locationNames = null;
        });
}


var createAvailabilityCache = function () {

    var allAvailability = [];
    var hotels = {}

    csv
        .fromPath("artefatos/disp.txt")
        .on("data", function (data) {
            if (data[2] === "1") {
                allAvailability.push(data);
            }

        })
        .on("end", function () {
            allAvailability.splice(0, 1);
            fileCache.set('availability', allAvailability);
            allAvailability = null;
            hotels = null;
        });
}

createAvailabilityCache();
createAutocompleteHotelsAndLocationCache();

exports.fileCache = fileCache;
exports.autocomplete = autocompleteCache;
exports.resultsCache = resultsCache;
