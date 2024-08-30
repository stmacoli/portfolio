// Função para criar ou remover uma section
function toggleSection(title) {
  let content_project = `
      
        <div class="wrapper-content">


           <div class="first-project">
              <div class="img-container1">
                <img
                  class="img-project1"
                  src="../assets/calculadora.png"
                  alt=""
                />
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
    if (title === "Home") {
      // Adiciona conteúdo à nova section
      newSection.innerHTML = content_project;
    } else if (title === "About") {
      // Adiciona conteúdo à nova section
      newSection.innerHTML =
        "<h2>" + title + "</h2> <p> FUNCIONOU de novo CABRON.</p>";
    } else if (title === "Services") {
      // Adiciona conteúdo à nova section
      newSection.innerHTML =
        "<h2>" +
        title +
        "</h2> <p> FUNCIONOU pela terceira vez de novo CABRON.</p>";
    } else {
      // Adiciona conteúdo à nova section
      newSection.innerHTML =
        "<h2>" + title + "</h2><p> AHORA SI MANITO, MUY BIEN</p>";
    }

    // Insere a nova section dentro do container
    document.getElementById("section-container").appendChild(newSection);
  }
}

/*




    */
