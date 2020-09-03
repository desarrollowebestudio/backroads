// Espera para cargar código HTML
document.addEventListener('DOMContentLoaded', () => {

  // Variables Elementos
  const botonMenu = document.getElementById('botonMenuDesplegable');
  const menuEnlaces = document.getElementById('menuEnlacesNavegacion');
  const enlacesScroll = document.querySelectorAll("a.enlaceScroll");
  const barraNavegacion = document.getElementById('encabezadoNavegacion');

  // Comportamiento Desplegable: Menú Enlaces
  botonMenu.addEventListener('click', () => {
    menuEnlaces.classList.toggle('mostrarMenu');
  });

  // Scroll Secciones
  enlacesScroll.forEach(enlace => {
    enlace.addEventListener("click", evento => {

      // Interceptar y evitar navegación por defecto
      evento.preventDefault();

      // Ocultar menú desplegable
      menuEnlaces.classList.remove('mostrarMenu');

      // Obtener identificador de elemento destino
      const idDestino = evento.target.getAttribute('href').slice(1);
      const elementoDestino = document.getElementById(idDestino);

      // Obtener posición final considerando alto de barra de navegación
      const posicion = elementoDestino.offsetTop - barraNavegacion.offsetHeight;

      // Realizar scroll suave según posición calculada
      window.scrollTo({left: 0, top: posicion, behavior: 'smooth'});
    });
  });

});