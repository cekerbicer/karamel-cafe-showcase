document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const logo = document.getElementById('logo-animate');
    const mainContent = document.getElementById('main-content');

    function setupScrollAnimations() {
        const hiddenElements = document.querySelectorAll('.hidden-scroll');

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible-scroll');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        hiddenElements.forEach(el => observer.observe(el));
    }

    function startIntroAnimation() {
        
        logo.style.animation = 'logoRiseAndScale 1.0s ease-out forwards'; 
        
        const totalDuration = 1000 + 1000; 

        setTimeout(() => {
            
            preloader.classList.add('preloader-hidden');

            mainContent.style.opacity = '1';
            setTimeout(() => {
                setupScrollAnimations();
            }, 500);
        }, totalDuration);
    }
    
    startIntroAnimation();
    const video = document.querySelector("video");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute("autoplay");
  video.pause();
}
});