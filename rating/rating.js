let lemons = document.getElementsByTagName("i"), i; //[]


function ratingHover(element){

    let selected = +element.id;
    
   for ( i = 0; i <= selected; i++){
    lemons[i].classList.add('active');
   }
}

function ratingClick(element){

    let selected = +element.id;
    
   for ( i = 0; i <= selected; i++){
    lemons[i].classList.add('active');
   }
   
}

function clearRates() {
  for ( i = 0; i <= lemons.length; i++){
    lemons[i].classList.remove('active');
  }
}

document.addEventListener('click', function(e){ 
    if (!document.getElementById("lemons").contains(e.target)) { 
       clearRates();
    } 
});

document.addEventListener('mouseover', function(e){ 
  if (!document.getElementById("lemons").contains(e.target)) { 
     clearRates();
  } 
});

