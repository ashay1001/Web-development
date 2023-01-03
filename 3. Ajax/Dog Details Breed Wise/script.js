
$(document).ready(function(){
    populateList();
});


function populateList(){
    let dropdown = $('#breedList');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Choose Breed</option>')

    const url = 'https://dog.ceo/api/breeds/list/all';
    
    $.getJSON(url, function(data){
        $.each(data.message, function(key, entry){
            dropdown.append($('<option></option>').attr('value', key).text(key));
        })
    }).fail(function(_xhr, _textStatus, _errorThrown){
        console.log("Breed List API Failed!");
    });
}

function fetchRandomDog(){

    var breed = $('#breedList').val();

    const url = 'https://dog.ceo/api/breed/' + breed + '/images/random'

    $.get(url, function(data){
        $('#dog-image').attr('src', data.message);
    }).fail(function(_xhr, _textStatus, _errorThrown){
        console.log("Dog image API with custom breed failed!");
    });
}

$('#fetch-dog-image-button').click(fetchRandomDog);