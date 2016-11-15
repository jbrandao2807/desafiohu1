/**
 * Created by jonat on 15/11/2016.
 */

var caching = require('./caching');


module.exports = function (formData) {




    if(formData.location){
        if(formData.nodate){
            var hotels = caching.fileCache.get('hotels');
            var availability = caching.fileCache.get('availability');
        }else{

        }
    }else{
        return null
    }

};
