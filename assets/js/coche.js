function mostrarModal(){
  document.querySelector('.modal').style.display='flex';
}


function cerrarModal(){
  document.querySelector('.modal').style.display='none';
}







function guardarFechas() {
  localStorage.setItem("fechaInicio", document.querySelector("#fechaInicio").value);
  localStorage.setItem("fechaFin", document.querySelector("#fechaFin").value);
  if (comprobarSesion()) {
    window.location = "procesoReserva.html";
  }
  else{
    alert("Necesitas iniciar sesión");
    goLogIn();
  }

}

window.addEventListener("load", mostrarCoche);


function mostrarCoche() {
  const options = { method: 'GET' };

  let idCoche = localStorage.getItem("idCoche");

  fetch('http://localhost:8083/coche/buscarUno/' + idCoche, options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.status = 200) {
        document.querySelector("main").innerHTML +=
          '<div class="banner">' +
            '<div class="overlay">' +
              '<h1 class="animate__animated animate__bounceInLeft">' + data.nombreCoche + '</h1>' +
            '</div>' +
            '<img src="../img/coches/'+ data.banner +'">' +
          '</div>' +
          '<div class="proReserva-container">' +
          '<div class="procesoReserva-item " id="proReserva-item1" >' +
          '<img src="../img/coches/' + data.imagen2 + '" alt="" srcset="">' +
          '</div>' +
          '<div class="procesoReserva-item" id="proReserva-item2"  data-aos-easing="linear" data-aos-duration="1500">' +
          '<h1>Descripcion delantera</h1>' +
          '<p>' + data.descripcionFrontal + '</p>' +
          '</div>' +
          '<div class="procesoReserva-item" id="proReserva-item3" data-aos-easing="linear" data-aos-duration="1500">' +
          '<h1>Descripcion trasera</h1>' +
          '<p>' + data.descripcionTrasera + '</p>' +
          '</div>' +
          '<div class="procesoReserva-item" id="proReserva-item4" >' +
          '<img src="../img/coches/' + data.imagen3 + '" alt="">' +
          '</div>' +
          '<div class="procesoReserva-item" id="proReserva-item5">' +
          '<div class="caract1 cart"><img src="../img/iconos/automatic-transmission.png" alt="" srcset="">' +
          '<h1>Cambio</h1>' +
          '<p>' + data.cambio + '</p>' +
          '</div>' +
          '<div class="caract2 cart"><img src="../img/iconos/velocimetro.png" alt="" srcset="">' +
          '<h1>Velocidad Máxima</h1>' +
          '<p>' + data.velocidadMax + ' Km/h</p>' +
          '</div>' +
          '<div class="caract3 cart"><img src="../img/iconos/tire.png" alt="" srcset="">' +
          '<h1>Traccion</h1>' +
          '<p>' + data.traccion + '</p>' +
          '</div>' +
          '<div class="caractImg"  data-aos-anchor-placement="top-center"><img src="../img/coches/'+ data.imagen4 +'" alt="" srcset=""></div>' +
          '<div class="caract4 cart"><img src="../img/iconos/velocimetro2.png" alt="" srcset="">' +
          '<h1>Aceleración <br>(0-100km/h)</h1>' +
          '<p>' + data.aceleracion + ' s</p>' +
          '</div>' +
          '<div class="caract5 cart"><img src="../img/iconos/motor.png" alt="" srcset="">' +
          '<h1>CILINDRADA</h1>' +
          '<p>' + data.potenciaMax + ' CV</p>' +
          '</div>' +
          '<div class="caract6 cart"><img src="../img/iconos/gasolinera.png" alt="" srcset="">' +
          '<h1>Combustible</h1>' +
          '<p>' + data.combustible + '</p>' +
          '</div>' +
          '</div>'+
          '<div class="procesoReserva-item" id="proReserva-item6">'+
                '<div class="carousel-container">'+
                    '<div class="carousel-slide">'+
                    '<img src="../img/coches/'+ data.imagen5 +'">' +
                    '<img src="../img/coches/'+ data.imagen6 +'">' +
                    '<img src="../img/coches/'+ data.imagen7 +'">' +
                    '<img src="../img/coches/'+ data.imagen8 +'">' +
                    '<img src="../img/coches/'+ data.imagen9 +'">' +
                    '</div>'+
                '</div>'+
            '</div>';

          
      }
    })
    .catch(err => console.error(err));






}