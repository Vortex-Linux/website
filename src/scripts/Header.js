// @ts-nocheck
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menuLinks = document.querySelector('.menu-links');

    menuButton.addEventListener('click', function () {
        menuLinks.classList.toggle('open');
    });
});