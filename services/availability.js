/**
 * Created by jonat on 15/11/2016.
 */

var caching = require('./caching');
var unique = require('array-unique');

function daydiff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

module.exports = function (formData) {

    var result = null;

    var cachedResult = caching.resultsCache.get(formData.toString());

    if(cachedResult){
        return cachedResult;
    }

    if (formData.location) {
        var locationNames = caching.fileCache.get('location-names');
        var hotelIds = locationNames[formData.location.toString().trim()];
        var hotelsList = caching.fileCache.get('hotels');

        if (hotelIds) {
            var hotelsList = hotelsList.map(function (element, index, currentArray) {
                var isValid = false;
                for (var i = 0, l = hotelIds.length; i < l; i++) {
                    var hotelId = hotelIds[i];
                    if (element.id === hotelId) {
                        isValid = true;
                    }
                }
                if (isValid) {
                    return element;
                } else {
                    return null;
                }
            });

            hotelsList = unique(hotelsList);


            var availability = caching.fileCache.get('availability');
            result = [];
            for (var i = 0, l = availability.length; i < l; i++) {
                var avItem = availability[i];

                hotelsList.map(function (element) {
                    if (element && avItem[0].toString() === element.id) {
                        var valid = true;

                        if (formData.begin || formData.finish) {
                            var avItemDate = Date.parse(avItem[1]);
                            if (!(formData.begin && Date.parse(formData.begin) <= avItemDate)) {
                                valid = false;
                            }
                            if (!(formData.finish && Date.parse(formData.finish) >= avItemDate)) {
                                valid = false;
                            }
                            if ((!(parseInt(avItem[3]) > parseInt(daydiff(Date.parse(formData.begin), Date.parse(formData.finish)))))) {
                                valid = false;
                            }

                        }
                        if (valid) {
                            result.push({
                                id: avItem[0],
                                date: avItem[1],
                                minimumNights: avItem[3],
                                location: element.location,
                                name: element.name
                            })
                        }

                    }
                })
            }
        }
    } else {
        result = null;
    }


    caching.resultsCache.set(formData.toString(),result);
    return result

};

