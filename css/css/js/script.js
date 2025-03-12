// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const backToTop = document.querySelector('.back-to-top');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Fonction pour le header sticky
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (backToTop) {
                backToTop.classList.add('active');
            }
        } else {
            header.classList.remove('scrolled');
            if (backToTop) {
                backToTop.classList.remove('
