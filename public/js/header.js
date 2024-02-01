const BurgerMenu = document.getElementById('burger-menu');
const mobileNav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


BurgerMenu.onclick = function () {
    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none'; 
        main.style.display = 'block';
        footer.style.display = 'block';
    } else {
        mobileNav.style.display = 'flex';
        main.style.display = 'none';
        footer.style.display = 'none';
    }
}