/**
 * Created by jonat on 15/11/2016.
 */

var setupAutocomplete = function () {
    var locations = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // `states` is an array of state names defined in "The Basics"
        remote: {
            url: '/services/autocomplete/%QUERY',
            wildcard: '%QUERY'
        }
    });

    $('#locations-input').typeahead(null, {
        name: 'locations-input',
        // display: 'original',
        source: locations
    });
};


var setupFormResults = function(){
    $("#search-form").on('submit',function(e){
        e.preventDefault();
        $.ajax({
            method:'POST',
            url:'/services/availability',
            data:$('#search-form').serialize()
        })
    })
}

$(document).ready(function () {
    setupAutocomplete();
    setupFormResults();

})