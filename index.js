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


const btnRes = document.querySelector('.res-btn');

const ulMenu = document.querySelector('.navbar-ul');



btnRes.addEventListener('click', () => {
    ulMenu.classList.toggle('responsive-m');
});

const btnModal = document.querySelector('.btn-1');

const modal = document.querySelector('.modal-bg');

const modalReal = document.querySelector('.modal-bio')

const modalQuit = document.querySelector('.modal-kapat');


btnModal.addEventListener('click', ()=>{
    modal.classList.add('active');
    modalReal.classList.add('active');
})

modalQuit.addEventListener('click', ()=>{
    modal.classList.remove('active');
    modalReal.classList.remove('active');
})