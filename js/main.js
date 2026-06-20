'use strict';

// ─── Navbar: sombra al hacer scroll ───────────────────────────────────────────
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.classList.remove('shadow-sm');
    } else {
        nav.classList.add('shadow-sm');
        nav.classList.remove('shadow-md');
    }
});

// ─── Menú mobile ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('hidden');
            mobileBtn.setAttribute('aria-expanded', String(!isOpen));
        });
    }

    // ─── Testimonial Carousel ──────────────────────────────────────────────────
    const carousel = document.getElementById('testimonial-carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll(':scope > .testimonial-slide');
    const indicatorContainer = document.getElementById('carousel-indicators');
    let slideInterval;

    let currentSlide = [...slides].findIndex((slide) => slide.classList.contains('active'));
    if (currentSlide < 0) currentSlide = 0;

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    indicatorContainer.innerHTML = '';

    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Ir al testimonio ${index + 1}`);
        dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-6' : 'bg-outline-variant'}`;
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
        indicatorContainer.appendChild(dot);
    });

    const dots = indicatorContainer.querySelectorAll('button');

    function updateIndicators() {
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('bg-primary', 'w-6');
                dot.classList.remove('bg-outline-variant');
            } else {
                dot.classList.remove('bg-primary', 'w-6');
                dot.classList.add('bg-outline-variant');
            }
        });
    }

    function goToSlide(index) {
        slides.forEach((slide) => slide.classList.remove('active'));
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        updateIndicators();
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    startInterval();

    // ─── Pausar carrusel si el usuario prefiere movimiento reducido ───────────
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        clearInterval(slideInterval);
    }
});
