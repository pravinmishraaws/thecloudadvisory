let currentSlide = 0;

// Only include .slide elements and skip any that also have .hidden-slide
const slides = Array.from(document.querySelectorAll('.slide')).filter(slide => !slide.classList.contains('hidden-slide'));

// Immediately show the first visible slide
showSlide(currentSlide);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);
