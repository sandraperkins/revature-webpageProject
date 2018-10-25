// AJAX workflow
// step 1: create a new xml/http object request
// step 2: open the request/object, what the endpoint is
// step 3: onreadystate function
// step 4: send

document.addEventListener('DOMContentLoaded', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://quotes.rest/qod.json/');

    xhr.onreadystatechange = function(){
        // alert(xhr.readyState);
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.response);
            var responseText = JSON.parse(xhr.response);
            rAuthor = JSON.stringify(responseText.contents.quotes[0].author)

            // /g isn't required, but by default string.replace in JavaScript will only replace the first matching value it finds. 
            // Adding the /g will mean that all of the matching values are replaced.
            console.log(rAuthor.replace(/['"]+/g, ''));
            noQuotes = rAuthor.replace(/['"]+/g, '');
            $("#randQuote").append(JSON.stringify(responseText.contents.quotes[0].quote));
            $("#randAuthor").append(noQuotes);
        }
    };

    xhr.send();
});