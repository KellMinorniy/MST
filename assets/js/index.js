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


// circle анимация

document.addEventListener('scroll', function() {
    const circles = document.querySelectorAll('.row__circle');
    const ellipses = document.querySelectorAll('img[src="assets/img/Ellipse 6.svg"]');
    const windowHeight = window.innerHeight;

    const checkPosition = () => {
        circles.forEach((circle, index) => {
            const rect = circle.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                const delay = index * 2; 
                circle.style.animationDelay = `${delay}s`;
                circle.classList.add('animate-circle');
            } else {
                circle.classList.remove('animate-circle');
                circle.style.animationDelay = '0s'; 
            }
        });

        ellipses.forEach((ellipse, index) => {
            const rect = ellipse.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                const delay = index * 0.4; 
                ellipse.style.animationDelay = `${delay}s`; 
                ellipse.classList.add('animate-img');
            } else {
                ellipse.classList.remove('animate-img');
                ellipse.style.animationDelay = '0s';
            }
        });
    };

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    checkPosition();
});

// Получаем значение Value
function updateRangeValue(value) {
    document.getElementById('rangeValueDisplay').textContent = value + '%';
}