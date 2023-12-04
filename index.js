/* Botão de alteração das css variables */
const toggle = document.getElementById("toggle");
const hello_img = document.getElementById("hello");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Verifica se a classe "dark" está presente no body
  if (document.body.classList.contains("dark")) {
    hello_img.src = 'utils/imgs/help-me.svg';
  } else {
    hello_img.src = 'utils/imgs/help-me-d.svg';
  }
});


/*Ofuscamento da .navbar .fixed-top ao rolar com o scroll*/
const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
/*Aguarda o reload*/
document.addEventListener('DOMContentLoaded', () => {
  const jumbotron = document.querySelector('.jumbotron');
  var hello = document.getElementById("hello");

  setTimeout(() => {
    jumbotron.style.transform = "translateX(0)";
  }, 500);
  setTimeout(() => {
    hello.style.transform = "translateX(-40%)";
  }, 750);
  

})