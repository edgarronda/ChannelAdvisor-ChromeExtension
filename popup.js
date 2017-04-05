
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
 
    renderStatus('Bin Manager');
    var imageResult = document.getElementById('image-result');
    imageResult.src = 'http://apps3.mitechnologiesinc.com/library/images/mit_log.png';
    imageResult.hidden = false;

   
}); //addEventListener
