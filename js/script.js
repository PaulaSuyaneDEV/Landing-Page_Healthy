const menuNav = document.getElementById('menu-main');

const btn = document.querySelector('.menuMobile');

//adicionar a funcao de clique no botao


function abrirMenu() {
    menuNav.classList.toggle('menu-mobile');
}

btn.addEventListener('click', abrirMenu);