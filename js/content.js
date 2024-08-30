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

      // Adiciona conteúdo à nova section
      newSection.innerHTML = '<h2>' + title + '</h2><p>Conteúdo da seção ' + title + '.</p>';

      // Insere a nova section dentro do container
      document.getElementById('section-container').appendChild(newSection);
  }
}