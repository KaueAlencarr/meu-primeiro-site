let btnMenu = document.getElementById('btn-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu');
    overlay.style.display = 'block'; // Mostra o overlay quando o menu é aberto
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu');
})

overlay.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Esconde o overlay quando clicado
})