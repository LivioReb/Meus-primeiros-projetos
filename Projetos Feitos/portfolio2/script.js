let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.image-home, .services-container, .portfolio-box, .contato form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-imagem, .input-box', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content, textarea', { origin: 'right' });
