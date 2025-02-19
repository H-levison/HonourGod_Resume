// Getting elements for the portfolio slider
const slides = document.querySelectorAll('.slider-slide');
let currentSlide = 0;

// Show the current slide
function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0; // Loop back to first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Loop to last slide
    } else {
        currentSlide = index;
    }
    
    // Adjust the slide container's position
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Previous slide
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Next slide
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});
