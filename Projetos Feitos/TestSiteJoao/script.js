ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-text, .sobre-text, abordagem-img', { origin: 'top' });
ScrollReveal().reveal('.intersection, .container-box, .abordagem, .btn', { origin: 'bottom' });
ScrollReveal().reveal('.home-text h1, .img-sobre, .sobre-text h1, .abordagem h3, .input-box', { origin: 'left' });
ScrollReveal().reveal('.img-home, .home-text h2, .home-text p, .sobre-text h2, .abordagem p, textarea ', { origin: 'right' });
