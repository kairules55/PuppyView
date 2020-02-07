/*
function fetchDogImage() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'https://dog.ceo/api/breeds/image/random');
    xhr.send();
    xhr.onload = function () {
        let response = JSON.parse(xhr.response);
        $('img').attr('src', response.message);
    }
}
*/

//AJAX using jquery

/*
function fetchDogImage() {
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function (data) {
            $('img').attr('src', data.message);
        }
    });
}
*/

//Ajax using jquery aleternate mehtod


function validate() {
    $.ajax({
        url: 'https://dog.ceo/api/breeds/list/all',
        method: 'GET',
        success: function (data) {
            let breeds = data.message;
            for (var breed in breeds) {
                var newOption = $('<option>');
                newOption.attr('value', breed).text(breed);
                $('select').append(newOption);
            }
        }
    });
}

$(document).ready(validate);

function fetchDogImage() {
    let value = $('select option:selected').text();
    let link = 'https://dog.ceo/api/breed/'+value+'/images';
    $.ajax({
        url: link,
        method: 'GET',
        success: function(data){
            $('img').attr('src',data.message[0]);
        }
    });
}


$('button').click(fetchDogImage);