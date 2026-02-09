let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    
    currentIndex += direction;

    // Loop logic: if at the end, go to start. If at start, go to end.
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    // Calculate total width to move based on individual image widths
    let offset = 0;
    for (let i = 0; i < currentIndex; i++) {
        offset += slides[i].offsetWidth;
    }

    slider.style.transform = `translateX(-${offset}px)`;
}
