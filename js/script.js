window.addEventListener('load', () => {
    const h1 = document.querySelector('.slide-in');
    h1.classList.add('show');
});

window.addEventListener('load', () => {
    const images = document.querySelectorAll('.slide-in-link');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
        }, index * 300); // Stagger the animation for each image
    });
});