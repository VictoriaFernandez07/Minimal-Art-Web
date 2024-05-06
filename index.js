/* Estilos específicos para carrousel-index.html */
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let currentIndex = 0;
  let interval = null;

  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${currentIndex * (100 / totalItems)}%)`;
  }

  interval = setInterval(moveToNextSlide, 3000); // Cambia 3000 por el tiempo en milisegundos que desees

  // Event listener para detectar el final de la transición
  carousel.addEventListener("transitionend", function() {
    // Si el carrusel ha llegado al final, vuelve suavemente a la primera imagen
    if (currentIndex === totalItems - 1) {
      setTimeout(() => {
        carousel.style.transition = "none"; // Desactiva temporalmente la transición
        currentIndex = 0;
        carousel.style.transform = `translateX(-${currentIndex * (100 / totalItems)}%)`;
      }, 500); // Ajusta el tiempo según la duración de la transición

      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out"; // Vuelve a activar la transición después de un breve tiempo
      }, 550); // Ajusta el tiempo según la duración de la transición
    }
  });
});


/* Estilos específicos para interacción-tarjetas-artistas.html */
function cambiarImagen(idMostrar, idOcultar) {
  var imagenMostrar = document.getElementById(idMostrar);
  var imagenOcultar = document.getElementById(idOcultar);
  imagenMostrar.style.display = "block";
  imagenOcultar.style.display = "none";
}


/* Estilos específicos para video-artistas-historia.html */
window.onload = function() {
  var video = document.getElementById('myVideo');
  video.play();
}

// Para controlar la reproducción del video mediante botones
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', function() {
  var video = document.getElementById('myVideo');
  video.play();
});

pauseButton.addEventListener('click', function() {
  var video = document.getElementById('myVideo');
  video.pause();
});


