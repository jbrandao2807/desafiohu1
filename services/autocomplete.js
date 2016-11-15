/**
 * Created by jonat on 15/11/2016.
 */

var NodeCache = require("node-cache");
var autocompleteCache = new NodeCache();
var fs = require('fs');
var path = require('path');
var csv = require("fast-csv");
var fuzzy = require('fuzzy');
var unique = require('array-unique');

var allDisp = [];
var fuzzySearchTerms = []


var createAvailabilityCache = function () {

    csv
        .fromPath("artefatos/hoteis.txt")
        .on("data", function (data) {
            allDisp.push(data);
            fuzzySearchTerms.push(data[1]);
            fuzzySearchTerms.push(data[2]);
        })
        .on("end", function () {
            fuzzySearchTerms = unique(fuzzySearchTerms);
        });
}

createAvailabilityCache();

module.exports = function (request, response, next) {

    var options = { pre: '<', post: '>' };
    var results = fuzzy.filter(request.params._term, fuzzySearchTerms, options);

    response.json({response:results});

}
