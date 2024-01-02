/* Botão de alteração das css variables */
const toggle = document.getElementById("toggle")
const hello_img = document.getElementById("hello")
const toggLang = document.getElementById("toggLang")

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  

  // Verifica se a classe "dark" está presente no body
  if (document.body.classList.contains("dark")) {
    hello_img.src = 'utils/imgs/help-me.svg';
  } else {
    hello_img.src = 'utils/imgs/help-me-d.svg';
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
  }else{
    toggLang.innerText = 'En'
    name.innerText = "Nome:"
    msg.innerText = "Mensagem: "
    email.innerHTML = "<em> Seu </em> endereço de e-mail: "
    msgArea.placeholder= "Diga em quê posso ser útil..."
    sendBtn.innerHTML = "&nbsp;Enviar"
  }

  // Verifica se a classe "english" está presente no body
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

