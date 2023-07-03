function dataHora() {
  let bShadow1 = window.document.querySelector("#first-container");
  let bShadow2 = window.document.querySelector("#second-container");
  let hoursDay = window.document.querySelector("#first-container p");

  let img = window.document.querySelector("#img-today");

  let rodapeNome = window.document.querySelector("#rodape");

  let navBar = window.document.querySelector("#second-container ul.navbar");
  let navBarColor = window.document.getElementById("font-color");

  let elemento = document.querySelector("ul.navbar");

  let data = new Date();
  let mes = (data.getMonth() + 1).toString().padStart(2, 0);
  let dia = (data.getDate()).toString().padStart(2, 0);
  let hora = (data.getHours()).toString().padStart(2, 0);
  let minutos = data.getMinutes().toString().padStart(2, 0);

  hoursDay.textContent = `${dia}/${mes} - ${hora}:${minutos}`;

  if (hora >= 6 && hora < 12) {
    document.body.style.background = "#cdffff";
    bShadow1.style.boxShadow = " 5px 5px 10px rgba(0, 102, 145, 0.7)";
    bShadow2.style.boxShadow = " 5px 5px 10px rgba(0, 102, 145, 0.7)";

    img.src = "../assets/manha.png";
    img.alt = "Sol nascendo no litoral";

    navBar.style.backgroundColor = "#40cfff";

    rodapeNome.style.color = "#006691";
  } else if (hora >= 12 && hora <= 18) {
    document.body.style.background = "#ffc16e";
    bShadow1.style.boxShadow = " 5px 5px 10px rgba(255, 162, 252, 0.7)";
    bShadow2.style.boxShadow = " 5px 5px 10px rgba(255, 162, 252, 0.7)";

    img.src = "../assets/tarde.png";
    img.alt = "Linda imagem de um sol se ponto.";

    navBar.style.backgroundColor = "#40cfff";

    rodapeNome.style.color = "#221e74";
  } else if (hora >= 18 && hora >= 0 ) {
    document.body.style.background = "#000d3f";
    bShadow1.style.boxShadow = " 5px 5px 10px rgba(70, 0, 150, 0.7)";
    bShadow2.style.boxShadow = " 5px 5px 10px rgba(70, 0, 150, 0.7)";

    img.src = "../assets/noite.png";
    img.alt =
      "Luzes das casas de uma cidade grande cintilando durante a noite  ";

    navBar.style.backgroundColor = "#191970";
    navBar.style.color = "#00FF00";
    

    rodapeNome.style.color = "#c500ae";
  } else {
    document.body.style.background = "#D8BFD8";
    bShadow1.style.boxShadow = " 5px 5px 10px rgba(255,228,196, 0.7)";
    bShadow2.style.boxShadow = " 5px 5px 10px rgba(255,228,196, 0.7)";
    bShadow3.style.boxShadow = " 5px 5px 10px rgba(255,228,196, 0.7)";

    img.src = "../assets/noite.png";
    img.alt =
      "Luzes das casas de uma cidade grande cintilando durante a noite  ";

    navBar.style.backgroundColor = "#FFE4E1";
    navBarColor.style.color = "#4B0082";

    rodapeNome.style.color = "#c500ae";
  } 
}

fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
  .then(response => response.json())
  .then(data => {
    // Obtém a cotação do dólar no objeto retornado pela API
    const dolar = data.USDBRL.bid;
    const euro = data.EURBRL.bid;
    const bitcoin = data.BTCBRL.bid;

    // Transforma o valor da moeda para escrita monetaria brasileira
    const usd = parseFloat(dolar).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });;
    const eur = parseFloat(euro).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const btc = parseFloat(bitcoin).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    // Atualiza o elemento HTML com a cotação do dólar
    const cotacaoDolar = document.getElementById('dolar');
    cotacaoDolar.textContent = `USD ${usd}`;
    
    const cotacaoEuro = document.getElementById('euro');
    cotacaoEuro.textContent = `EUR ${eur}`;
    
    const cotacaoBtc = document.getElementById('btc');
    cotacaoBtc.textContent = `BTC ${btc}`;

  })
  .catch(error => {
    console.error('Erro ao obter a cotação do dólar:', error);
  });


  //€${euro} ₿${btc}



// const fetchToApi = async () => {
//   const cotacaoElement = document.getElementById("pricing");
//   try {
//     const response = await fetch(
//       "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
//     );
//     const data = await response.json();
//     const dolar = data.USDBRL.bid;
//     const euro = data.EURBRL.bid;
//     const btc = data.BTCBRL.bid;

//     cotacaoElement.textContent = `Cotações: $${dolar} €${euro} ₿${btc}`;
//   } catch (error) {
//     cotacaoElement.textContent = `Algo deu errado`;
//     console.error(error);
//   }

//   // Atualiza o elemento HTML com a cotação do dólar
// };

// fetchToApi();



function showContent(target) {
  const sectionOnDisplay = document.getElementById('navbar-content')
  const projetosDiv = document.getElementById('projetos-container');
  const aboutDiv = document.getElementById('about-container');
  //, 'about-container', 'arts-container', 'cv-container'

 
  

  if (target === 'projetos') {
    sectionOnDisplay.style.display = 'block'
    projetosDiv.style.background = "red"
    projetosDiv.style.display = 'block';
  } else if (target === 'sobre') {
    sectionOnDisplay.style.display = 'block'
    aboutDiv.style.background = "blue"
    aboutDiv.style.display = 'block';
  } else if (target === 'artes') {
    sectionOnDisplay.style.display = 'block'
    navbarDiv.style.background = "yellow"
    navbarDiv.style.display = 'block';
  } else if (target === 'cv') {
    sectionOnDisplay.style.display = 'block'
    navbarDiv.style.background = "violet"
    navbarDiv.style.display = 'block';
  }
}


