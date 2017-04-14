
function renderData(element,dataText) {
  document.getElementById(element).textContent = dataText;
  localStorage[element] = dataText;
}

function AjaxCall(element, url){
  $.ajax({
          url: url
      }).then(function(data) {
         renderData(element, data);
  });
}

function refreshtoken(e) {
  $.ajax({
          url: "http://192.168.0.65:8089/api/v1/token/getnewtoken/"
      }).then(function(data) {
          AjaxCall('token',"http://192.168.0.65:8089/api/v1/token/activetoken/")
          AjaxCall('expiration',"http://192.168.0.65:8089/api/v1/token/tokenexpiration/")
          AjaxCall('previous',"http://192.168.0.65:8089/api/v1/token/previoustoken/")
      });
}

//Render storage data to popup labels at startup.
function RenderFromLocalStorage(){
  document.getElementById('token').textContent = localStorage.token;
  document.getElementById('expiration').textContent = localStorage.expiration;
  document.getElementById('previous').textContent = localStorage.previous;
}

//
document.addEventListener('DOMContentLoaded', function() {
  RenderFromLocalStorage();
  document.getElementById('refreshtokenbutton').addEventListener('click', refreshtoken);      
  document.getElementById('image-result').src = 'assets/mit_logo.jpg';
  document.getElementById('image-result').hidden = false;

}); 
