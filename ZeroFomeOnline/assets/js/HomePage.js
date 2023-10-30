INDEX.js

//Colocar dps no projeto...

if(localStorage.getItem("token") == null){
  alert("Você precisa estar logado para acessar essa página")
  window.location.href = "./assets/html/signin.html";
};

function sair(){
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado")
  window.location.href = "./assets/html/signin.html";
};

// Selecione o elemento HTML onde você deseja exibir o QR Code
const qrCodeContainer = document.getElementById("pix-qr-code");

// Dados do PIX (chave PIX e informações adicionais, se necessário)
const pixData = "chavePIX1234567890";

// Crie o QR Code usando a biblioteca qrcode-generator
const qrcode = new QRCode(qrCodeContainer, {
    text: `pix:${pixData}`,
    width: 128,
    height: 128,
});

// O código acima irá criar um QR Code e exibi-lo no elemento com o ID "pix-qr-code"
