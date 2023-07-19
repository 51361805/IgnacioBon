const brandImg = document.querySelector('.navbar .brand .brand-img');
const brandTxt = document.querySelector('.navbar .brand .brand-txt');

window.addEventListener('scroll', () => {
  const distanceFromTop = brandImg.getBoundingClientRect().top;
  if (distanceFromTop <= 200) {
    brandImg.classList.add('hide');
    brandTxt.classList.add('show');
  } else {
    brandImg.classList.remove('hide');
    brandTxt.classList.remove('show');
  }
});



function scrollToElement(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

// Obtener todos los enlaces de navegación
const navLinks = document.querySelectorAll('.navbar-nav a');

// Añadir un evento click a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    
    const targetId = link.getAttribute('href'); // Obtener el ID del objetivo del enlace
    const targetElement = document.querySelector(targetId); // Obtener el elemento objetivo
    
    if (targetElement) {
      scrollToElement(targetElement); // Desplazarse suavemente hasta el elemento objetivo
    }
  });
});
