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

});

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
     curSlide++;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${110 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const nextSlide1 = document.querySelector(".btn-next");

// current slide counter
let curSlide1 = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide1.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide1 === maxSlide) {
    curSlide1 = 0;
  } else {
    curSlide1++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${110 * (indx - curSlide1)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide1 === 0) {
    curSlide1 = maxSlide;
  } else {
    curSlide1--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${110 * (indx - curSlide1)}%)`;
  });
});

