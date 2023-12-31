//Toggles the hamburger menu
 function myFunction() {
     var x = document.getElementById("mynavbar");
     if (x.className === "navbar") {
       x.className += " responsive";
     } else {
       x.className = "navbar";
     }
   }

//Scrolls to home page and class page smoothly when clicking on the nav bar
function scrollToImage(imageId, event) {
    event.preventDefault();
    var targetElement = document.getElementById(imageId);
    if (imageId === "image1") {
        // If clicking on "Home" and the target is the first image, scroll up smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else if (targetElement) {
        // If clicking on "Classes" or other links, scroll down to the target image
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
// JavaScript for the image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    const newTransformValue = -currentSlide * 100 + '%';
    document.querySelector('.slider-content').style.transform = 'translateX(' + newTransformValue + ')';
}
// Function to show/hide the scroll-to-top button based on scroll position
window.onscroll = function() {
    showScrollToTopButton();
};

function showScrollToTopButton() {
var button = document.getElementById("scrollToTopBtn");

// Show the button when the scroll position is past the first image
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
} else {
    button.style.display = "none";
}
}

// Function to smoothly scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}