// Função para criar ou remover uma section
function toggleSection(title) {
  // Verifica se a section já existe
  var existingSection = document.getElementById('section-' + title);

  if (existingSection) {
      // Se existir, remove a section
      existingSection.remove();
  } else {
      // Se não existir, cria uma nova section
      var newSection = document.createElement('section');
      newSection.className = 'new-section';
      newSection.id = 'section-' + title; // Atribui um id único à section
      if (title === 'Home') {
        // Adiciona conteúdo à nova section
        newSection.innerHTML = '<h2>' + title + '</h2> <p> FUNCIONOU CABRON.</p>';
        
      } else if (title === 'About') {
        // Adiciona conteúdo à nova section
        newSection.innerHTML = '<h2>' + title + '</h2> <p> FUNCIONOU de novo CABRON.</p>';
        
      } else if (title === "Services") {
        // Adiciona conteúdo à nova section
        newSection.innerHTML = '<h2>' + title + '</h2> <p> FUNCIONOU pela terceira vez de novo CABRON.</p>';

      }else { 

        // Adiciona conteúdo à nova section
        newSection.innerHTML = '<h2>' + title + '</h2><p> AHORA SI MANITO, MUY BIEN</p>';
      }

      // Insere a nova section dentro do container
      document.getElementById('section-container').appendChild(newSection);
  }
}