// Смен цвета при клике на ссылку

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {

            navLinks.forEach(link => link.classList.remove('active-nav-link'));

            this.classList.add('active-nav-link');
        });
    });
document.addEventListener('click', function(event) {
    const navElement = document.querySelector('.nav');
    if (!navElement.contains(event.target)) {       
        navLinks.forEach(link => link.classList.remove('active-nav-link'));
    }
}, true);
});

// --------- Hamburger

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target)) {
            nav.classList.remove('open');
        }
    }, true);
});