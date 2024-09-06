// Função para criar ou remover uma section
function toggleSection(title) {
  let content_project = `
      
        <div id="projects-ancora" class="wrapper-content">

          <div class="first-project">

              <div class="img-container1">
                <img class="img-project1" src="../assets/calculadora.png" alt=""/>
              </div>

              <div class="project-title">
                <h2>Banco NW Payment</h2>
              </div>

          </div>

          <div class="second-project">

            <div class="img-container2">
              <img class="img-project2" src="../assets/teclado.png" alt="" />
            </div>

            <div class="project-title">
              <h2>Teclado</h2>
            </div>

          </div>

          <div class="third-project">

            <div class="img-container3">
              <img class="img-project3" src="../assets/countdown.png" alt="" />
            </div>

            <div class="project-title">
              <h2>Contagem Regressiva</h2>
            </div>

          </div>

          <div class="fourth-project">

              <div class="img-container4">
                <img class="img-project4" src="../assets/pokedex.png" alt="" />
              </div>

              <div class="project-title">
                <h2>Pokemon API</h2>
              </div>

      </div>
    `;

    let content_about = `
     
      <div id="about-ancora" class="img-perfil-container">

        <div  id="perfil">

            <div>
               <img id="img-perfil" src="/assets/hackerman.png" alt="Hackerman from Kung Furry" />
            </div>
        
          <div class="title-div">
            <h4>Contato:</h4>
          </div>

          <div class="social-card-container">
            <div class="social-card">
              <a href="https://github.com/stmacoli" target="_blank">
                <img src="../assets/github.png" alt="LinkedIn" />
                GitHub</a>
            </div>

            <div class="social-card">
              <a href="https://www.linkedin.com/in/steven-machado-oliveira/" target="_blank" >
                <img src="../assets/linkedin.png" alt="GitHub" />LinkedIn</a>
            </div>

          </div>

        </div>
      </div>

      <div id="portfolio-explanation">
        <div>
          <h1>Steven Barreda</h1>
        </div>

       

        <div class="apresentation">
          <h3>oi, eu sou o Goku</h3>
          <p>
            Suspendisse vel hendrerit mi. Integer convallis neque massa, eu
            molestie nisl tincidunt eget. Pellentesque consectetur ante orci,
            vitae interdum orci accumsan sed. Suspendisse ultrices dolor nulla,
            vel pulvinar dolor laoreet act. Vitae interduum orci accumsan sed Suspen.Pellentesque consectetur ante orci,
            vitae interdum orci accumsan sed Suspen. orci accumsan sed. Suspendisse ultrices
            dolor nulla, vel pulvinar dolor laoreet act.Pellentesque consectetur ante orci,
            vitae interdum orci accumsan sed Susisse ultrices
            dolor nulla, vel pulvinar dolor laoreet act.vPellentesque consectetur ante orci,
            vitae interdum orci accumsan sed Suspen. Pellentesque consectetur
            ante orci, vitae interdum orci accumsan sed. Suspendisse ultrices
            dolor nulla, vel pulvinar dolor laoreet act.
          </p>

        </div>

      </div>
    `

    let content_cv = `
    
    <div id="cv-ancora">
      <div class="title-div2">
        <h3>CV Barreda:</h3>
        <p><a href="/assets/cv.pdf" download="Steven Barreda CV - Dev.pdf">Clique aqui para baixar o meu Curriculum</a></p>
      </div>
        
      <div class="apresentation-cv1">
        <h4>Dados Pessoais:</h4>
        <div class="ficha-cadastral">
 
  
        <div class="campo">
          <p> <label>Nome:</label> Steven Barreda</p>
        </div>
  
        <div class="campo">
            <label>Email:</label>
            <p>seu.email@gmail.com</p>
        </div>
  
        <div class="campo">
            <label>Telefone:</label>
            <p>(11) 9 xxxx-xxxx</p>
        </div>
  
        <div class="campo">
            <label>Idade:</label>
            <p>30 anos</p>
        </div>
  
        <div class="campo">
            <label>Observações:</label>
            <p>Alguma observação adicional.</p>
        </div>
      </div>
    </div>
        


      <div class="apresentation-cv1">
        <h4>Tecnologias:</h4>
        <div class="apresentation-tec1">
          <div class="display-tecnologias"> 
            <div class="social-card1">
              <a href="https://github.com/stmacoli" target="_blank">
              <img src="../assets/github.png" alt="LinkedIn" />
              GitHub</a>
            </div>
            <div class="social-card1">
              <a href="#" target="_blank">
              <img src="../assets/js.png" alt="Javascript simble" />Javascript(EC5)</a>
            </div>
            <div class="social-card1">
              <a href="#" target="_blank">
              <img src="../assets/canva.png" alt="Canva simble" />Canva</a>
            </div>
          </div>
          <div class="display-tecnologias"> 
            <div class="social-card1">
              <a href="#" target="_blank">
              <img src="../assets/html.png" alt="HTML5 simble" />HTML5</a>
            </div>
            <div class="social-card1">
              <a href="#" target="_blank">
              <img src="../assets/css.png" alt="CSS3 simble" />CSS3</a>
            </div>
            <div class="social-card1">
              <a href="#" target="_blank">
              <img src="../assets/python.png" alt="Python simble" />Python</a>
            </div>
          </div>
        </div>
      </div> 
        
      
      </div>  

      

        

      <div class="apresentation-cv1">
          <h4>Dados Profissionais:</h4>          
          <p>
            Suspendisse vel hendrerit mi. Integer convallis neque massa, eu
            molestie nisl tincidunt eget. Pellentesque consectetur ante orci,
            vitae interdum orci accumsan sed. Suspendisse ultrices dolor nulla,
            vel pulvinar dolor laoreet act. Vitae interduum orci accumsan sed Suspen.Pellentesque consectetur ante orci,
            vitae interdum orci accumsan sed Suspen. orci accumsan sed. Suspendisse ultrices
            dolor nulla, vel pulvinar dolor laoreet act.Pellentesque consectetur ante orci,
            vitae interdum orci accumsan sed Susisse ultrices
            dolor nulla, vel pulvinar dolor laoreet act.vPellentesque consectetur ante orci,
            vitae interdum orci accumsan sed SusSuspendisse ultrices
            dolor nulla, vel pulvinar dolor laoreet act.
          </p>

      </div>

      
   
    `






  // Verifica se a section já existe
  var existingSection = document.getElementById("section-" + title);

  if (existingSection) {
    // Se existir, remove a section
    existingSection.remove();
  } else {
    // Se não existir, cria uma nova section
    var newSection = document.createElement("section");
    newSection.className = "new-section";
    newSection.id = "section-" + title; // Atribui um id único à section
    if (title === "Projetos") {
      // Adiciona conteúdo à nova section
      newSection.innerHTML = content_project;
    } else if (title === "About") {
      // Adiciona conteúdo à nova section
      newSection.innerHTML = content_about;
       
    } else if (title === "Services") {
      // Adiciona conteúdo à nova section
      newSection.innerHTML =
        "<h2>" +
        title +
        "</h2> <p> FUNCIONOU pela terceira vez de novo CABRON.</p>";
    } else {
      // Adiciona conteúdo à nova section
      newSection.innerHTML = content_cv
        
    }

    // Insere a nova section dentro do container
    document.getElementById("section-container").appendChild(newSection);
  }
}

/*




    */
