const sectionOnDisplay = document.getElementById("navbar-content");
const projetosDiv = document.getElementById("projetos-container");
const aboutDiv = document.getElementById("about-container");



// Seleciona o botão do dropdown
const dropdownBtn = document.querySelector('.dropdown-btn1');
// Seleciona o conteúdo do dropdown
const dropdownContent = document.querySelector('.dropdown-content1');

// Adiciona um evento de clique ao botão
dropdownBtn.addEventListener('click', function() {
    // Alterna entre mostrar e esconder o conteúdo do dropdown
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Fecha o dropdown se o usuário clicar fora dele
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-btn1')) {
        dropdownContent.style.display = 'none';
    }
});





// Seleciona o botão do dropdown
const dropdownBtn2 = document.querySelector('.dropdown-btn2');
// Seleciona o conteúdo do dropdown
const dropdownContent2 = document.querySelector('.dropdown-content2');

// Adiciona um evento de clique ao botão
dropdownBtn2.addEventListener('click', function() {
    // Alterna entre mostrar e esconder o conteúdo do dropdown
    dropdownContent2.style.display = dropdownContent2.style.display === 'block' ? 'none' : 'block';
});

// Fecha o dropdown se o usuário clicar fora dele
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-btn2')) {
        dropdownContent2.style.display = 'none';
    }
});



// Seleciona o botão do dropdown
const dropdownBtn3 = document.querySelector('.dropdown-btn3');
// Seleciona o conteúdo do dropdown
const dropdownContent3 = document.querySelector('.dropdown-content3');

// Adiciona um evento de clique ao botão
dropdownBtn3.addEventListener('click', function() {
    // Alterna entre mostrar e esconder o conteúdo do dropdown
    dropdownContent3.style.display = dropdownContent3.style.display === 'block' ? 'none' : 'block';
});

// Fecha o dropdown se o usuário clicar fora dele
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-btn3')) {
        dropdownContent3.style.display = 'none';
    }
});





function showContent(target) {
   
    
  
    if (target === "projetos") {
        
      



        
      
      
        sectionOnDisplay.classList.add('show')
        
        projetosDiv.style.borderRadius = '10px'
        projetosDiv.classList.add('show')

      
    } else if (target === "about-container") { 
      sectionOnDisplay.classList.add('show')
      sectionOnDisplay.style.display = "block";
      aboutDiv.style.background = "blue";
      aboutDiv.style.display = "block";
      projetosDiv.classList.add('show')
    } else if (target === "artes") {
      sectionOnDisplay.style.display = "block";
      navbarDiv.style.background = "yellow";
      navbarDiv.style.display = "block";
    } else if (target === "cv") {
      sectionOnDisplay.style.display = "block";
      navbarDiv.style.background = "violet";
      navbarDiv.style.display = "block";
    } //else if (target === "calculator") {
     // calculatorDiv.style.backgroundColor = "blue";
   // }


 
  }

  function hideContent (target) {
    if (target === "projetos" && projetosDiv.classList.contains('show')) {
      sectionOnDisplay.classList.remove('show');
      return;
    }

  }
  

  



  let overlayDiv = document.getElementById("calculator");

  document.getElementById("open-overlay").addEventListener("click", function() {
    overlayDiv.style.display = "block";
  });

  function closeTabs() {
  
    if (overlayDiv.style.display === "block") {
      overlayDiv.style.display = "none";
    }
  }






