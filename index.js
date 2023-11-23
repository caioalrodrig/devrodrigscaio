/* Botão de alteração das css variables */
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
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