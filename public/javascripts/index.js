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

    $('#locations-input').typeahead('destroy').typeahead(null, {
        name: 'locations-input',
        // display: 'original',
        source: locations
    });
};


var setupFormResults = function () {
    $("#search-form").off('submit').on('submit', function (e) {
        e.preventDefault();
        var formData = $('#search-form').serializeArray();
        $.ajax({
            method: 'POST',
            url: '/services/availability',
            data: formData ,
            success: function (resultData) {
                $('#results').html(resultData);
            },
            error: function (err) {
                console.log('error', err);
            }
        })
    })
}

$(window).load(function () {
    setupAutocomplete();
    setupFormResults();
})