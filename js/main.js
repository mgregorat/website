// Page transitions
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    // Remove this line since the class is already in HTML
    // main.classList.add('fade-in');
    
    // Add a console.log to verify the script is loading
    console.log('JavaScript is loaded!');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});