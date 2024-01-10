/* Botão de alteração das css variables */
const togg = document.getElementById("toggle")
const hello_img = document.getElementById("hello")
const toggLang = document.getElementById("toggLang")
const h1A = document.getElementById("h-2")
const devInfo = document.getElementById("dev-p")
const moon=document.getElementById("moon")
const sun = document.getElementById("sun")
const social_top = document.querySelector(".social_list_top")
const footer = document.getElementById("footer")



togg.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  //  Verifica se a classe "dark" está presente no body
  if (document.body.classList.contains("dark")){
    moon.style.visibility= "hidden"
    sun.style.visibility= "visible"

  }else{
    moon.style.visibility= "visible"
    sun.style.visibility= "hidden"
  }
});

toggLang.addEventListener("click", () => {
  let name = document.getElementById('user-name')
  let msg = document.getElementById('user-msg')
  let email = document.getElementById('user-email')
  let msgArea= document.getElementById('message')
  let sendBtn = document.getElementById('btnSend-text')

  if (toggLang.innerText === 'En'){
    toggLang.innerText = 'Pt'
    name.innerText = "Name:"
    msg.innerText = "Message: "
    email.innerHTML = "<em> Your </em> email address: "
    msgArea.placeholder= "Tell me what is in your mind..."
    sendBtn.innerHTML = "&nbsp;Send"
    hello_img.src = 'utils/imgs/en_b.svg'
    devInfo.innerText = "Electronic engineering, I am seeking partnerships and projects as a developer! Have a solid experience in backend (Python, Js, SQL), front-end (React, CSS, WordPress), AI, automation... "


  }else{
    toggLang.innerText = 'En'
    name.innerText = "Nome:"
    msg.innerText = "Mensagem: "
    email.innerHTML = "<em> Seu </em> endereço de e-mail: "
    msgArea.placeholder= "Diga em quê posso ser útil..."
    sendBtn.innerHTML = "&nbsp;Enviar"
    hello_img.src = 'utils/imgs/pt_b.svg'
    devInfo.innerText = " Engenheiro eletricista de formação, busco parcerias e projetos como desenvolvedor! Sólida experiência back end (Python, Js, SQL), front-end (React, css, wordpress), IA, automação... "

  }
});

/*Ofuscamento da .navbar .fixed-top ao rolar com o scroll*/
const navbar = document.querySelector('.navbar')

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 90) {
        navbar.classList.add('scrolled')
        social_top.style.visibility ="hidden"

        
    } else {
        navbar.classList.remove('scrolled')
        social_top.style.visibility ="visible"

    }

});
/*Aguarda o reload*/
document.addEventListener('DOMContentLoaded', () => {
  const jumbotron = document.querySelector('.jumbotron')
  let hello = document.getElementById("hello")
  let content = h1A.innerText
  h1A.innerText  = ''

  function typewriteName(index) {
    h1A.innerText += content[index];
    if (index < content.length - 1) {
      setTimeout(function () {
        typewriteName(index + 1);
      }, 100); 
    }
  }

  typewriteName(0)

setTimeout(() => {
  jumbotron.style.transform = "translateX(0)";
}, 500);
setTimeout(() => {
  hello.style.transform = "translateX(-20%)";
}, 750);


})


var percentage = 5; 

function updateBackground() {
  footer.style.background = `radial-gradient(circle at top, var(--bg-home) ${percentage}%, var(--bg-footer))`;
 

}

// Chamada inicial
updateBackground();
let down=0
setInterval(function() {
  if(down===0){
    percentage += 0.5;
    if(percentage >30){
      down = 1
    }
  }
  if(down===1){
    percentage -= 0.5
    if (percentage < 1) {
      down=0
    }
  }
  updateBackground();
}, 50);