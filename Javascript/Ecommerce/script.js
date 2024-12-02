// Get references to the product slider and the product slides
const productSlider = document.querySelector('.product-slider');
const productSlides = document.querySelectorAll('.product-slide');

// Define initial slide index
let currentSlideIndex = 0;

// Function to move the slide
function moveSlide(direction) {
    // Calculate new slide index
    currentSlideIndex += direction;

    // If we go past the first slide, loop back to the last slide
    if (currentSlideIndex < 0) {
        currentSlideIndex = productSlides.length - 1;  // Loop to the last slide
    }

    // If we go past the last slide, loop back to the first slide
    if (currentSlideIndex >= productSlides.length) {
        currentSlideIndex = 0;  // Loop to the first slide
    }

    // Update the position of the product slider
    productSlider.style.transform = `translateX(-${currentSlideIndex * (productSlides[0].offsetWidth + 15)}px)`;
}
