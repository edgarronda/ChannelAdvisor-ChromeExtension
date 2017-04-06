
function renderData(dataText) {
  document.getElementById('token').textContent = dataText;
}
function renderExpiration(expirationText) {
  document.getElementById('expiration').textContent = expirationText;
}

function ReadActiveToken(){
   $.ajax({
          url: "http://192.168.0.65:8089/api/v1/activetoken/"
      }).then(function(data) {
         renderData(data);
      });
}

function ReadExpirationDate(){
   $.ajax({
          url: "http://192.168.0.65:8089/api/v1/tokenexpiration/"
      }).then(function(data) {
         renderExpiration(data);
      });
}

document.addEventListener('DOMContentLoaded', function() {

    var imageResult = document.getElementById('image-result');
    imageResult.src = 'mit_logo.jpg';
    imageResult.hidden = false;
    ReadActiveToken();
    ReadExpirationDate();   
}); 
