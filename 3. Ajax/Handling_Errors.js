/*
    Ajax --> Asynchronous JavaScript And XML
    Asynchronous means before completing one request we can serve another one

    HTTP --> Hypertext Transfer Protocol

    Types of HTTP requests:
    1. GET  2. POST  3. DELETE  4. PATCH  5. PUT

    HTTP is stateless protocol 
*/


//Function to make AJAX request
/*
function fetchRandomDog(){
    var xhrRequest = new XMLHttpRequest();

    //this function will be called after receiving the response
    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
    
        //console.log(responseJSON);
        //console.log(JSON.stringify(responseJSON));    //method to convert JSON into 
        
        var imageURL = responseJSON.message;
        $('#dog-image').attr('src', imageURL);
    };

    xhrRequest.onerror = function(){
        console.log("Request Failed!!!");
    };

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/rando', true);
    xhrRequest.send('');
}
*/

//Another method of making ajax request using jquery
/*
function fetchRandomDog(){
    
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/rando',
        method: 'GET',
        success: function(data){
            var imageURL = data.message;
            $('#dog-image').attr('src', imageURL);
        }
    }).fail(function(){
        console.log("Request Failed!!");
    });
}
*/

//more simpler way of making ajax request using jquery

function fetchRandomDog(){
    $.get('https://dog.ceo/api/breeds/image/rando', function(data){
            $('#dog-image').attr('src', data.message);
    }).fail(function(_xhr, _textStatus, _errorThrown){
        console.log("Request Failed!");
    });
}

$('#fetch-dog-image-button').click(fetchRandomDog);