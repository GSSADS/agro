function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
  
  let currentIndex = 0;
  const banners = [
      "img/fundosoja.jpg",
      "img/image2.jpg",
      "img/agro3.jpg",
  ];
  const banner = document.querySelector(".foto1");
  
  function changeBanner() {
      const newImage = new Image();
      newImage.src = banners[currentIndex];
  
      newImage.onload = function () {
          banner.src = newImage.src;
      };
  
      currentIndex = (currentIndex + 1) % banners.length;
  }
  
  setInterval(changeBanner, 3000);
 

  window.onscroll = function () {
    myFunction();
};

function myFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.whatsapp-float').classList.add('sticky');
    } else {
        document.querySelector('.whatsapp-float').classList.remove('sticky');
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var btnEnviar = document.getElementById("enviarFormulario");

    if (btnEnviar) {
        btnEnviar.addEventListener("click", zap);
    }
});

function zap() {
    var nome = document.getElementById('nomeCompleto').value;
    var tipoInteresse1 = document.getElementById('tipoInteresse1').value;
    var empresaFazenda = document.getElementById('empresaFazenda').value;
    var telefone = document.getElementById('telefone').value;
    var tipoInteresse2 = document.getElementById('tipoInteresse2').value;

    var texto = "%0A%0A**Nome Completo:** " + nome +
                "%0A**Interessado como:** " + tipoInteresse1 +
                "%0A**Empresa/Fazenda:** " + empresaFazenda +
                "%0A**Telefone:** " + telefone +
                "%0A**Tipo de Interesse:** " + tipoInteresse2;

    window.open("https://api.whatsapp.com/send?phone=556699292159&text=" + texto, "_blank");
}




