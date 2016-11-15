var autocompleteService = require('../services/autocomplete');
var availabilityService = require('../services/availability');

exports.autocomplete = function (request, response, next) {

    var termsArray = autocompleteService(request.params._term);


    if(termsArray){
        response.json(termsArray);
    }else{
        response.json([]);
    }

}
exports.availability = function (request, response, next) {
    var allAvailableDates = availabilityService(request.body);

    if(allAvailableDates){
        response.json(allAvailableDates);
    }else{
        response.json([]);
    }
}