function dataHora() {
  let hoursDay = window.document.querySelector("#name-card p");

  let img = window.document.querySelector("#imagem");

  let rodapeNome = window.document.querySelector("#rodape");
  
  let navBar = window.document.querySelector("#nav-bar ul.navbar");

  let bShadow = window.document.querySelector("#name-card")

  let data = new Date();
  let mes = (data.getMonth() + 1).toString().padStart(2, 0);
  let dia = data.getDate();
  let hora = data.getHours();
  let minutos = (data.getMinutes()).toString().padStart(2, 0);

  hoursDay.textContent = `${dia}/${mes} - ${hora}:${minutos}`;

  if (hora >= 0 && hora < 12) {
    document.body.style.background = "#E0FFFF"

    img.src ='../assets/manha.png'
    img.alt = 'Sol nascendo no litoral'

    rodapeNome.style.color = "#006691"

  } else if (hora >= 12 && hora <= 18) {
    document.body.style.background = "#cdffff"
    bShadow.style.boxShadow = " 5px 5px 10px rgba(0, 102, 145, 0.7)"

    img.src = '../assets/tarde.png'
    img.alt = 'Linda imagem de um sol se ponto.'

    navBar.style.backgroundColor = '#40cfff';
    

    rodapeNome.style.color = "#006691";

  } else {
    document.body.style.background = "#E0FFFF"

    img.src = '../assets/noite.png'
    img.alt = 'Luzes das casas de uma cidade grande cintilando durante a noite  '

    rodapeNome.style.color = "#006691"


  }
}






