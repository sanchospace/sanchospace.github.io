document.addEventListener('DOMContentLoaded', function () {

    var audio = new Audio('gas.mp3');
 
    audio.autoplay = true;
 
    audio.play().catch(function(err) {
 
      console.error("Failed to autoplay:", err);
 
    });
 
 });