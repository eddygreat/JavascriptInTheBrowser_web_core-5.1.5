let slideIndex = 1;


function myFunction(x) {
    if (x.matches) { 
        showSlides(slideIndex);
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 768px)")


// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//switches brands on mobile view
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("brand-units");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) { slideIndex = slides.length }
  if (x.matches) { // If media query matches
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "";
          
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
  } else {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    
    } 

   

}


//This block of code controls the changing of the button from
//show all to hide and vice versa, while implementing the hide and show all
//function as well.
const switcher = document.querySelector(".brands-row-three");

document.getElementById('show-button').onclick = function () {
    if (switcher.style.display == "none") {
        switcher.style.display = "flex"
        document.getElementById('show-button__img').src = "img/hide.svg";
        document.getElementById('show-buttonn').innerHTML = "Hide"
    }
    else if (switcher.style.display = "flex") {
        switcher.style.display = "none"
        document.getElementById('show-buttonn').innerHTML = "Show All"
        document.getElementById('show-button__img').src = "img/showall.svg";
    } else {
        switcher.style.display = "none"
        document.getElementById('show-buttonn').innerHTML = "Show All"
        document.getElementById('show-button__img').src = "img/showall.svg";
   }  
    
}

