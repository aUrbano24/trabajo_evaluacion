
/*Menu hamburguesa*/
var acc = document.getElementsByClassName("accordion");
  var i;
        
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
          panel.style.display = "block";
          }
        });
      }
      function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
        } else {
            x.className = "topnav";
          }
        }
/**GALERIA */
var slideIndex = 1;
  showSlides(slideIndex);

// Controles avanzar, retroceder
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de imagen en miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//Para que la diapositivas puedan pasarse
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/**Ocultar y mostrar texto*/
function mostrar(imagen){ //La función ocultar() hace visible una imagen.
  document.getElementById(imagen).style.visibility="visible";
}

function ocultar(imagen){ //La función ocultar() oculta una imagen.
  document.getElementById(imagen).style.visibility="hidden";
}