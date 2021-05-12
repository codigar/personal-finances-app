const btnMenuMobile = document.querySelector('#btn-menu-mobile');
const btnClose = document.querySelector('#btn-close');
const menuMobile = document.querySelector('#menu-mobile');

btnMenuMobile.addEventListener('click', () => {
    btnClose.style.display = 'flex';
    menuMobile.style.width = '100%';
});

btnClose.addEventListener('click', () => {
    btnClose.style.display = 'none';
    menuMobile.style.width = '0%';
});