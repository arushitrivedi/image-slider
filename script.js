// script.js
var slideIndex = 0; // Start with the first image (index 0)
showDivs();

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    
    if (slideIndex >= x.length) {
        slideIndex = 0; // Wrap around to the first image
    }
    if (slideIndex < 0) {
        slideIndex = x.length - 1; // Go to the last image when cycling backward
    }
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    
    x[slideIndex].style.display = "block";
}
