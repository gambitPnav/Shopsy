// Buy Now Button Functionality
function buyNow() {
    alert("Thank you for your purchase!");
}

// Newsletter Signup Form (Frontend Only)
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        if (validateEmail(email)) {
            alert("Thank you for subscribing!");
            newsletterForm.reset();
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Initialize Carousel
    initCarousel();
});

// Simple Email Validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

// Image Carousel Functionality
let currentSlide = 0;
let slides;

function initCarousel() {
    slides = document.querySelectorAll('.carousel-images img');
    if (slides.length > 0) {
        slides[currentSlide].classList.add('active');
        setInterval(nextSlide, 3000);
    }
}

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
