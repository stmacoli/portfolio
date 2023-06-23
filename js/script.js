function dataHora() {
  let hoursDay = window.document.querySelector("#name-card p");

  let img = window.document.querySelector("#imagem");

  let title = window.document.querySelector("#header-id");

  let rodapeNome = window.document.querySelector("#rodape");

  let data = new Date();
  let mes = (data.getMonth() + 1).toString().padStart(2, 0);
  let dia = data.getDate();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  hoursDay.textContent = `${dia}/${mes} - ${hora}:${minutos}`;

  if (hora >= 0 || hora < 12) {
    img.src ='../assets/manha.png'
  } else if (hora >= 12 || hora < 18) {
    img.src = '../assets/tarde.png'
  } else {
    img.src = '../assets/noite.png'
  }
}
