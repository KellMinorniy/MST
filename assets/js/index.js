// Смена цвета при клике на ссылку
document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll('.navigation__link');

    navigationLinks.forEach(link => {
        link.addEventListener('click', function() {
            navigationLinks.forEach(link => link.classList.remove('navigation__link--active'));
            this.classList.add('navigation__link--active');
        });
    });

    document.addEventListener('click', function(event) {
        const navigationElement = document.querySelector('.navigation');
        if (!navigationElement.contains(event.target)) {       
            navigationLinks.forEach(link => link.classList.remove('navigation__link--active'));
        }
    }, true);
});

// --------- Гамбургер
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.menu-button--hamburger');
    const navigation = document.querySelector('.navigation');

    hamburgerMenu.addEventListener('click', function() {
        navigation.classList.toggle('navigation--open');
    });

    document.addEventListener('click', function(event) {
        if (!navigation.contains(event.target)) {
            navigation.classList.remove('navigation--open');
        }
    }, true);
});