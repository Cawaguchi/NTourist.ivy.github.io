document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;

    function updateSlider(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider(currentIndex);
    });

    // Initialize the slider with the first image
    updateSlider(currentIndex);
});
