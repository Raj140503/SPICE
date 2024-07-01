document.addEventListener('DOMContentLoaded', function() {
    const fadeInSection = document.querySelector('.fade-in-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    observer.observe(fadeInSection);

    const leftImages = document.querySelectorAll('.left');
    const rightImages = document.querySelectorAll('.right');
    const middleImage = document.querySelector('.middle');

    const adjustImageHeight = () => {
        const middleImageHeight = middleImage.clientHeight;
        leftImages.forEach(img => img.style.height = `${middleImageHeight}px`);
        rightImages.forEach(img => img.style.height = `${middleImageHeight}px`);
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Adjusted to delay image loading
    });

    leftImages.forEach(img => imageObserver.observe(img));
    rightImages.forEach(img => imageObserver.observe(img));

    window.addEventListener('resize', adjustImageHeight);
    window.addEventListener('load', adjustImageHeight);
    
    leftImages.forEach(leftImage => leftImage.classList.remove('hidden'));
    rightImages.forEach(rightImage => rightImage.classList.remove('hidden'));
});

