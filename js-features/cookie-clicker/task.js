let cookieID = document.getElementById ('cookie');  
let clicker__counterID = document.getElementById('clicker__counter'); 
let counter = 0;
 
cookieID.addEventListener('click', function(){ 
    counter++;
    clicker__counterID.textContent = counter;

    const image = document.getElementById("cookie");
    if (counter % 2 == 0) {
        image.width = 200;
      }
      else {
        image.width = 250;
      }
    
}); 
 
