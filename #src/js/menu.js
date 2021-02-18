const bodyTag = document.getElementById('body');
const burgerBtn = document.getElementById('burgerBtn');
const toggle = document.getElementById('toggleMenu');
const logo = document.getElementById('logo');
const logoDesktop = document.getElementById('logo-desk');


const toggleMenu = () => {
    toggle.classList.toggle('menu__active');
    burgerBtn.classList.toggle('open');
    bodyTag.classList.toggle('hiddenScroll');
    logo.classList.toggle('filter-white');
    logoDesktop.classList.toggle('visibility');
}

