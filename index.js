/* Botão de alteração das css variables */
const togg = document.getElementById("toggle")
const hello_img = document.getElementById("hello")
const toggLang = document.getElementById("toggLang")
const logo = document.getElementById("logoImg")
const h1A = document.getElementById("h-2")



togg.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Verifica se a classe "dark" está presente no body
  if (document.body.classList.contains("dark") && toggLang.innerText === 'En') {
    hello_img.src = 'utils/imgs/pt_b.svg'
  } else if(document.body.classList.contains("dark") && toggLang.innerText === 'Pt'){
    hello_img.src = 'utils/imgs/en_b.svg'
  } else if(!document.body.classList.contains("dark") && toggLang.innerText === 'En'){
    hello_img.src = 'utils/imgs/pt_w.svg'
  } else if(!document.body.classList.contains("dark") && toggLang.innerText === 'Pt'){
    hello_img.src = 'utils/imgs/en_w.svg'
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
    if (document.body.classList.contains("dark")){
      hello_img.src = 'utils/imgs/en_b.svg'
    }else{
      hello_img.src = 'utils/imgs/en_w.svg'
    }

  }else{
    toggLang.innerText = 'En'
    name.innerText = "Nome:"
    msg.innerText = "Mensagem: "
    email.innerHTML = "<em> Seu </em> endereço de e-mail: "
    msgArea.placeholder= "Diga em quê posso ser útil..."
    sendBtn.innerHTML = "&nbsp;Enviar"
    if (document.body.classList.contains("dark")){
      hello_img.src = 'utils/imgs/pt_b.svg'
    }else{
      hello_img.src = 'utils/imgs/pt_w.svg'
    }
  }
});

/*Ofuscamento da .navbar .fixed-top ao rolar com o scroll*/
const navbar = document.querySelector('.navbar')

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 30) {
        navbar.classList.add('scrolled')
        logo.classList.add("hidden")
        
    } else {
        navbar.classList.remove('scrolled')
        logo.classList.remove("hidden")
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
    hello.style.transform = "translateX(-25%)";
  }, 750);
  

})




