ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-text, .sobre-text, abordagem-img', { origin: 'top' });
ScrollReveal().reveal('.intersection, .container-box, .btn', { origin: 'bottom' });
ScrollReveal().reveal('.home-text h1, .img-sobre, .sobre-text h1, .input-box, .servicos-container h2', { origin: 'left' });
ScrollReveal().reveal('.img-home, .home-text h2, .home-text p, .sobre-text h2, .abordagem p, textarea, .servicos-container p', { origin: 'right' });

//=====================================================================================================================================================================
function mostrarSlide(slideIndex) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("mostrar");
    }
    slides[slideIndex].classList.add("mostrar");
  }

//=====================================================================================================================================================================

var intervaloSlide; // Variável global para armazenar o intervalo de passagem automática do slide
var cont = 0; // Variável global para armazenar o índice do slide atual

function proximoSlide() {
  cont++;
  if (cont >= buttons.length) {
    cont = 0;
  }
  buttons[cont].click();
}

function alterarMargem(margem) {
  var primeiroSlide = document.querySelector('.slide.primeiro');
  primeiroSlide.style.marginLeft = margem + '%';
}

function iniciarIntervaloSlide() {
  intervaloSlide = setInterval(function() {
    proximoSlide();
  }, 5000); // Intervalo de 5 segundos (5000 milissegundos) para passagem automática do slide
}

function reiniciarIntervaloSlide() {
  clearInterval(intervaloSlide); // Limpa o intervalo anterior
  iniciarIntervaloSlide(); // Inicia o intervalo novamente
}

document.addEventListener('DOMContentLoaded', function() {
  iniciarIntervaloSlide(); // Inicia a passagem automática do slide ao carregar o site
});

// Adicione o código a seguir para reiniciar o intervalo de tempo ao clicar em um botão
var buttons = document.querySelectorAll('.botao button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    cont = Array.from(buttons).indexOf(this);
    reiniciarIntervaloSlide(); // Reinicia o intervalo de passagem automática do slide ao clicar em um botão
  });
}

