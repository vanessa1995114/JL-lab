// Optional: Add pause-on-hover functionality
const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", () => {
  slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseleave", () => {
  slider.style.animationPlayState = "running";
});
