function carregar() {
  const msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  const data = new Date();
  const hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "./assets/morning.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    img.src = "./assets/afternon (1).jpg";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "./assets/night.jpg";
    document.body.style.background = "#515154";
  }
}

var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);
