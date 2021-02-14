const bodyTag = document.getElementById('body');
const htmlTag = document.getElementById('html');
const burgerBtn = document.getElementById('burgerBtn');
const toggle = document.getElementById('toggleMenu');
const toggleMenu = () => {
    if(toggle.style.display == 'block') {
        bodyTag.style.overflowY = "scroll";
        htmlTag.style.overflowY = "scroll";
        toggle.style.display = 'none';
        burgerBtn.classList.remove('open');

    } else {
        toggle.style.display = 'block';
        burgerBtn.classList.add('open');
        bodyTag.style.overflowY = "hidden";
        htmlTag.style.overflowY = "hidden";
    }

};








