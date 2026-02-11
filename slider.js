// We store the index for each slider separately
const sliderStates = new Map();

function moveSlide(direction, buttonElement) {
    // 1. Find the specific slider related to the clicked button
    const container = buttonElement.closest('.hero-slider');
    const slider = container.querySelector('.slider');
    const slides = container.querySelectorAll('.slide');
    
    // 2. Initialize or get the current index for THIS specific slider
    if (!sliderStates.has(slider)) {
        sliderStates.set(slider, 0);
    }
    
    let currentIndex = sliderStates.get(slider);
    currentIndex += direction;

    // 3. Loop logic
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    // 4. Update the state for this specific slider
    sliderStates.set(slider, currentIndex);

    // 5. Calculate exact pixel offset for this specific slider
    let offset = 0;
    for (let i = 0; i < currentIndex; i++) {
        offset += slides[i].offsetWidth;
    }

    slider.style.transform = `translateX(-${offset}px)`;
}
