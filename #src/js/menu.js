const bodyTag = document.getElementById('body');
const burgerBtn = document.getElementById('burgerBtn');
const toggle = document.getElementById('toggleMenu');
const logo = document.getElementById('logo');
const toggleMenu = () => {
    if(toggle.style.display == 'block') {
        bodyTag.style.overflowY = "scroll";
        bodyTag.classList.remove('hiddenScroll');
        toggle.style.display = 'none';
        burgerBtn.classList.remove('open');
        logo.classList.remove('filter-white');

    } else {
        toggle.style.display = 'block';
        burgerBtn.classList.add('open');
        bodyTag.classList.add('hiddenScroll');
        logo.classList.add('filter-white');
       
    }

};








