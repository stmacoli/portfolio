const sectionOnDisplay = document.getElementById("navbar-content");
const projetosDiv = document.getElementById("projetos-container");
const aboutDiv = document.getElementById("about-container");



function showContent(target) {

    //const calculatorDiv = document.getElementById("calculator")
    //, 'about-container', 'arts-container', 'cv-container'
  
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






