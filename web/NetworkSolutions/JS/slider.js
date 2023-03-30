let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  
    slides[slideIndex-1].classList.remove('active');
    slides[slideIndex-1].style.opacity = 0;
    slides[slideIndex-1].style.display = 'none';
    slides[slideIndex-1].style.zIndex = 0;

    // ...

    slides[slideIndex-1].classList.add('active');
    slides[slideIndex-1].style.display = 'block';
    slides[slideIndex-1].style.zIndex = 1;
} 
var slideInterval = setInterval(function() {
  plusSlides(1);
}, 5000); // transition every 5 seconds

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
