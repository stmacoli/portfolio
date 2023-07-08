fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
  .then((response) => response.json())
  .then((data) => {
    // Obtém a cotação do dólar no objeto retornado pela API
    const dolar = data.USDBRL.bid;
    const euro = data.EURBRL.bid;
    const bitcoin = data.BTCBRL.bid;

    // Transforma o valor da moeda para escrita monetaria brasileira
    const usd = parseFloat(dolar).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const eur = parseFloat(euro).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const btc = parseFloat(bitcoin).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    // Atualiza o elemento HTML com a cotação do dólar
    const cotacaoDolar = document.getElementById("dolar");
    cotacaoDolar.textContent = `USD ${usd}`;

    const cotacaoEuro = document.getElementById("euro");
    cotacaoEuro.textContent = `EUR ${eur}`;

    const cotacaoBtc = document.getElementById("btc");
    cotacaoBtc.textContent = `BTC ${btc}`;
  })
  .catch((error) => {
    console.error("Erro ao obter a cotação do dólar:", error);
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

