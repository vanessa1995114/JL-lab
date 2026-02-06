// Optional: Add pause-on-hover functionality
const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", () => {
  slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseleave", () => {
  slider.style.animationPlayState = "running";
});

        window.onload = function() {
        const slider = document.querySelector('.slider');
        const scrollWidth = slider.scrollWidth / 2; // Assuming you duplicated the slides
        document.styleSheets[0].insertRule(`
            @keyframes continuous-slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-${scrollWidth}px); }
            }
        `, 0);
    };

        let currentIndex = 0;
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        
        function moveSlide(direction) {
            currentIndex += direction;
        
            // Loop back to start or end
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }
        
            // Calculate how far to slide
            let offset = 0;
            for (let i = 0; i < currentIndex; i++) {
                offset += slides[i].offsetWidth;
            }
        
            slider.style.transform = `translateX(-${offset}px)`;
        }
