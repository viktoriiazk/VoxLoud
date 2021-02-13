
const burgerBtn = document.getElementById('burgerBtn');
const toggle = document.getElementById('toggleMenu');
const toggleMenu = () => {
    if(toggle.style.display == 'block') {
        toggle.style.display = 'none';
        burgerBtn.classList.remove('open');
    } else {
        toggle.style.display = 'block';
        burgerBtn.classList.add('open');
    }

};







