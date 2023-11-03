// Toggle
const navbarNav = document.querySelector('.navbar-nav');

// Ketika menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar hamburger menu dan navbar
const menu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});