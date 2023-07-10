function dataHora() {
    let bShadow1 = window.document.querySelector("#first-container");
    let bShadow2 = window.document.querySelector("#second-container");
    let hoursDay = window.document.querySelector("#first-container p");
  
    let img = window.document.querySelector("#img-today");
  
    let rodapeNome = window.document.querySelector("#rodape");
  
    let navBar = window.document.querySelector("#second-container ul.navbar");
    let navBarColor = window.document.getElementById("font-color");
  
    let fontNavbar = document.querySelectorAll("a.font-color");
  
    let data = new Date();
    let mes = (data.getMonth() + 1).toString().padStart(2, 0);
    let dia = data.getDate().toString().padStart(2, 0);
    let hora = 8 //data.getHours().toString().padStart(2, 0);
    let minutos = data.getMinutes().toString().padStart(2, 0);

   const corBg = getComputedStyle(document.documentElement).getPropertyValue('--cor-bg');
   const corNav = getComputedStyle(document.documentElement).getPropertyValue('--navbar-color');
   const corFontNav = getComputedStyle(document.documentElement).getPropertyValue('--navbar-font-color');
  
    hoursDay.textContent = `${dia}/${mes} - ${hora}:${minutos}`;
  
    if (hora >= 6 && hora < 12) {
      document.body.style.background = corBg;
      bShadow1.style.boxShadow = " 5px 5px 10px rgba(0, 102, 145, 0.7)";
      bShadow2.style.boxShadow = " 5px 5px 10px rgba(0, 102, 145, 0.7)";
  
      img.src = "../assets/manha.png";
      img.alt = "Sol nascendo no litoral";
  
      
  
      navBar.style.backgroundColor = corNav;
      fontNavbar.forEach((fontNavbar) => {
        fontNavbar.style.color = corFontNav;
      });
  
      rodapeNome.style.color = "#006691";
    } else if (hora >= 12 && hora <= 18) {
      document.body.style.background = "#ffc16e";
      bShadow1.style.boxShadow = " 5px 5px 10px rgba(255, 162, 252, 0.7)";
      bShadow2.style.boxShadow = " 5px 5px 10px rgba(255, 162, 252, 0.7)";
  
      img.src = "../assets/tarde.png";
      img.alt = "Linda imagem de um sol se ponto.";
  
      navBar.style.backgroundColor = "#40cfff";
      fontNavbar.forEach((fontNavbar) => {
        fontNavbar.style.color = "yellow";
      });
  
      rodapeNome.style.color = "#221e74";
    } else if (hora >= 18 && hora >= 0) {
      document.body.style.background = "#000d3f";
      bShadow1.style.boxShadow = " 5px 5px 10px rgba(70, 0, 150, 0.7)";
      bShadow2.style.boxShadow = " 5px 5px 10px rgba(70, 0, 150, 0.7)";
  
      img.src = "../assets/noite.png";
      img.alt = "Luzes das casas de uma cidade grande cintilando durante a noite  ";
  
      navBar.style.backgroundColor = "#191970";
      navBar.style.color = "#00FF00";
  
      fontNavbar.forEach((fontNavbar) => {
        fontNavbar.style.color = "red";
      });
  
      rodapeNome.style.color = "#c500ae";
    } else  {
      document.body.style.background = "#D8BFD8";
      bShadow1.style.boxShadow = " 5px 5px 10px rgba(255,228,196, 0.7)";
      bShadow2.style.boxShadow = " 5px 5px 10px rgba(255,228,196, 0.7)";
      bShadow3.style.boxShadow = " 5px 5px 10px rgba(255,228,196, 0.7)";
  
      //img.src = "#";
      img.alt = "MADRUGADA!!";
  
      navBar.style.backgroundColor = "red";

      navBarColor.style.color = "#4B0082";
  
     
  
      rodapeNome.style.color = "#c500ae";
    }
  }