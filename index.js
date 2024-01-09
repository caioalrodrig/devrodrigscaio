/* Botão de alteração das css variables */
const togg = document.getElementById("toggle")
const hello_img = document.getElementById("hello")
const toggLang = document.getElementById("toggLang")
const logo = document.getElementById("logoImg")
const h1A = document.getElementById("h-2")
const moon=document.getElementById("moon")
const sun = document.getElementById("sun")
const social_top = document.querySelector(".social_list_top")



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


  }else{
    toggLang.innerText = 'En'
    name.innerText = "Nome:"
    msg.innerText = "Mensagem: "
    email.innerHTML = "<em> Seu </em> endereço de e-mail: "
    msgArea.placeholder= "Diga em quê posso ser útil..."
    sendBtn.innerHTML = "&nbsp;Enviar"
    hello_img.src = 'utils/imgs/pt_b.svg'
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
const canvas = document.getElementById('cmatrixCanvas');
const ctx = canvas.getContext('2d');


// Configuração dos caracteres
const characters = '||||||||||||||';
const fontSize = canvas.width/12;
const columns = Math.floor(canvas.width / fontSize);
let fillStyle = '#f38cfb'

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * canvas.height;
}

function draw(fillColor) {

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 1, canvas.width, canvas.height)

  ctx.fillStyle = fillColor;
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(text, i * fontSize , drops[i] * fontSize );

    drops[i] = (drops[i] + 1) % canvas.height;
  }
}

function animate() {
  draw(fillStyle);
  requestAnimationFrame(animate);
}

animate();

setInterval( () =>{
  if (fillStyle === '#f38cfb'){
    fillStyle = 'rgb(29, 220, 234)'
  }else{
    fillStyle = '#f38cfb'
  }


}, 2000)