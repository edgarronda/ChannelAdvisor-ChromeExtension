
function renderData(element,dataText) {
  document.getElementById(element).textContent = dataText;
}

function AjaxCall(element, url){
  $.ajax({
          url: url
      }).then(function(data) {
         renderData(element, data);
  });
}

function CalculateTokenExpiration(){
  var NowMoment = moment();
  document.getElementById('test').textContent = NowMoment;
}

function refreshtoken(e) {
      $.ajax({
          url: "http://192.168.0.65:8089/api/v1/token/getnewtoken/"
      });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('refreshtoken').addEventListener('click', refreshtoken);      
  document.getElementById('image-result').src = 'assets/mit_logo.jpg';
    
  AjaxCall('token',"http://192.168.0.65:8089/api/v1/token/activetoken/");
  AjaxCall('expiration',"http://192.168.0.65:8089/api/v1/token/tokenexpiration/");
  AjaxCall('previous',"http://192.168.0.65:8089/api/v1/token/previoustoken/");
  CalculateTokenExpiration();
}); 
