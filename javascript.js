
let slideIndex = 1;




// Create a MediaQueryList object
// for controlling the display in hiding and showing brand elemeents
var x = window.matchMedia("(min-width: 768px)")


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

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 1.2,
  freeMode: true,
     
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled: true
    },
    breakpoints: {
      
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
        //freeMode: true,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
                        
        },
         
       
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
        scrollbar: {
            el: ".swiper-scrollbar",
            enabled: false,
                        
        },
      
      },
    },
  
});


