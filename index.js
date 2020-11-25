const toTop = document.querySelector('#toTop');
const menu = document.querySelector('#menu-container');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 115){
        toTop.classList.add('active');
        menu.classList.add('active');
    }else{
        toTop.classList.remove('active');
        menu.classList.remove('active');
    }
}) 