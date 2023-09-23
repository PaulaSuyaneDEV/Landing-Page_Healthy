const menuNav = document.getElementById('menu-nav');

const btn = document.querySelector('.menu-mobile');

function abreMenu() {
    menuNav.classList.toggle('MenuMobile');
}

btn.addEventListener('click', abreMenu);
