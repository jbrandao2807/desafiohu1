/**
 * Created by jonat on 15/11/2016.
 */

var NodeCache = require("node-cache");
var autocompleteCache = new NodeCache();
var fs = require('fs');


var availability = function () {
    fs
}

availability();

module.exports = function (request, response, next) {


    response.json({found: true});

}
