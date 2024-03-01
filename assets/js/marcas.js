function mostrarMarcas() {

    const options = {method: 'GET'};

fetch('http://localhost:8083/marca/todas', options)
  .then(response => response.json())
  .then(response => {
    response.forEach(el => {
        document.querySelector(".card-grid").innerHTML+=
        '<a class="card" href="#" onclick="recogerIdMarca('+el.idMarca+')">'+
        '<div class="card__background" style="background-image: url(../img/logo_marcas/'+ el.imagenLogo +')"></div>'+
        '<div class="card__content">'+
          '<h3 class="card__heading">'+ el.nombreMarca +'</h3>'+
        '</div>'+
      '</a>';
    });
    console.log(response)
  })
  .catch(err => console.error(err));
}



