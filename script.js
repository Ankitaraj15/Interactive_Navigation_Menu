// script.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 60, 114, 0.9)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #1e3c72, #2a5298)';
    }
});
