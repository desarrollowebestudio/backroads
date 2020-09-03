// Espera para cargar código HTML
document.addEventListener('DOMContentLoaded', () => {

  // Variables Elementos
  const botonMenu = document.getElementById('botonMenuDesplegable');
  const menuEnlaces = document.getElementById('menuEnlacesNavegacion');

  // Comportamiento Menú Enlaces
  botonMenu.addEventListener('click', () => {
    menuEnlaces.classList.toggle('mostrarMenu');
  });

});