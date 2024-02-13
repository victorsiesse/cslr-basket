const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const menuMobile = document.getElementById('menu-nav');

closeNav.style.display = 'none'

openNav.onclick = function() {
  openNav.style.display = 'none';
  menuMobile.classList.add('slide-in');
  closeNav.style.display = 'block';
};

closeNav.onclick = function() {
  openNav.style.display = 'block';
  menuMobile.classList.remove('slide-in');
  closeNav.style.display = 'none';
};