

function mostrarCochesPorMarca() {
  let idMarca = localStorage.getItem("idMarca");
  const options = { method: 'GET' };


  if (idMarca == 0) {
    fetch('http://localhost:8083/coche/todos', options)
      .then(response => response.json())
      .then(response => {
        document.querySelector('#tituloMarca').innerHTML = 'Todos los modelos';
        document.querySelector('.cards').innerHTML = '';
        response.forEach(el => {
          document.querySelector('.cards').innerHTML +=
            '<li>' +
            '<a href="coche.html" onclick="recogerIdCoche('+ el.idCoche +', '+ el.precioDia +')" class="card">' +
            '<img src="../img/coches/' + el.imagen1 + '" class="card__image" alt="" />' +
            '<div class="card__overlay">' +
            '<div class="card__header">' +
            '<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>    ' +
            '<img class="card__thumb" src="../img/logo_marcas/' + el.marca.imagenLogo + '" alt="" />' +
            '<div class="card__header-text">' +
            '<h3 class="card__title">' + el.nombreCoche + '</h3>     ' +
            '<span class="card__status">' + el.precioDia + ' €</span>' +
            '</div>' +
            '</div>' +
            '<div  class="card__description">' +
            '<div class="card__iconos">' +
            '<img src="../img/iconos/kmh.png" alt="">' +
            '<p>' + el.velocidadMax + 'Km/h</p>' +
            '</div>' +
            '<div class="card__iconos">' +
            '<img src="../img/iconos/cv.png" alt="">' +
            ' <p>' + el.potenciaMax + ' CV</p>' +
            '</div>' +
            ' <div class="card__iconos">' +
            ' <img src="../img/iconos/transmision.png" alt="">' +
            ' <p>' + el.cambio + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</li>'
        });
      })
      .catch(err => console.error(err));
  } else {
    fetch('http://localhost:8083/coche/marca/' + idMarca, options)
      .then(response => response.json())
      .then(response => {
        document.querySelector('#tituloMarca').innerHTML = response[0].marca.nombreMarca;
        document.querySelector('.cards').innerHTML = '';
        response.forEach(el => {
          document.querySelector('.cards').innerHTML +=
            '<li>' +
            '<a href="coche.html" onclick="recogerIdCoche('+ el.idCoche +', '+ el.precioDia +')" class="card">' +
            '<img src="../img/coches/' + el.imagen1 + '" class="card__image" alt="" />' +
            '<div class="card__overlay">' +
            '<div class="card__header">' +
            '<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>    ' +
            '<img class="card__thumb" src="../img/logo_marcas/' + el.marca.imagenLogo + '" alt="" />' +
            '<div class="card__header-text">' +
            '<h3 class="card__title">' + el.nombreCoche + '</h3>     ' +
            '<span class="card__status">' + el.precioDia + ' €</span>' +
            '</div>' +
            '</div>' +
            '<div  class="card__description">' +
            '<div class="card__iconos">' +
            '<img src="../img/iconos/kmh.png" alt="">' +
            '<p>' + el.velocidadMax + 'Km/h</p>' +
            '</div>' +
            '<div class="card__iconos">' +
            '<img src="../img/iconos/cv.png" alt="">' +
            ' <p>' + el.potenciaMax + ' CV</p>' +
            '</div>' +
            ' <div class="card__iconos">' +
            ' <img src="../img/iconos/transmision.png" alt="">' +
            ' <p>' + el.cambio + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</li>'
        });
      })
      .catch(err => console.error(err));
  }
}


function recogerIdCoche(idCoche, precio) {
  localStorage.setItem("idCoche", idCoche);
  localStorage.setItem("precioDia",precio)
}

function mostrarMenorMayor() {
  let idMarca = localStorage.getItem("idMarca");
  const options = { method: 'GET' };


  if (idMarca == 0) {

    fetch('http://localhost:8083/coche/todos/menorMayor', options)
      .then(response => response.json())
      .then(response => {
        document.querySelector('.cards').innerHTML = '';
        response.forEach(el => {
          document.querySelector('.cards').innerHTML +=
            '<li>' +
            '<a href="coche.html" onclick="recogerIdCoche('+ el.idCoche +', '+ el.precioDia +')" class="card">' +
            '<img src="../img/coches/' + el.imagen1 + '" class="card__image" alt="" />' +
            '<div class="card__overlay">' +
            '<div class="card__header">' +
            '<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>    ' +
            '<img class="card__thumb" src="../img/logo_marcas/' + el.marca.imagenLogo + '" alt="" />' +
            '<div class="card__header-text">' +
            '<h3 class="card__title">' + el.nombreCoche + '</h3>     ' +
            '<span class="card__status">' + el.precioDia + ' €</span>' +
            '</div>' +
            '</div>' +
            '<div  class="card__description">' +
            '<div class="card__iconos">' +
            '<img src="../img/iconos/kmh.png" alt="">' +
            '<p>' + el.velocidadMax + 'Km/h</p>' +
            '</div>' +
            '<div class="card__iconos">' +
            '<img src="../img/iconos/cv.png" alt="">' +
            ' <p>' + el.potenciaMax + ' CV</p>' +
            '</div>' +
            ' <div class="card__iconos">' +
            ' <img src="../img/iconos/transmision.png" alt="">' +
            ' <p>' + el.cambio + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</li>'
        });
        console.log(response)
      })
      .catch(err => console.error(err));
  } else {
    fetch('http://localhost:8083/coche/menorMayor/' + idMarca, options)
      .then(response => response.json())
      .then(response => {
        document.querySelector('.cards').innerHTML = '';
        response.forEach(el => {
          document.querySelector('.cards').innerHTML +=
            '<li>' +
            '<a href="coche.html" onclick="recogerIdCoche('+ el.idCoche +', '+ el.precioDia +')" class="card">' +
            '<img src="../img/coches/' + el.imagen1 + '" class="card__image" alt="" />' +
            '<div class="card__overlay">' +
            '<div class="card__header">' +
            '<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>    ' +
            '<img class="card__thumb" src="../img/logo_marcas/' + el.marca.imagenLogo + '" alt="" />' +
            '<div class="card__header-text">' +
            '<h3 class="card__title">' + el.nombreCoche + '</h3>     ' +
            '<span class="card__status">' + el.precioDia + ' €</span>' +
            '</div>' +
            '</div>' +
            '<div  class="card__description">' +
            '<div class="card__iconos">' +
            '<img src="../img/iconos/kmh.png" alt="">' +
            '<p>' + el.velocidadMax + 'Km/h</p>' +
            '</div>' +
            '<div class="card__iconos">' +
            '<img src="../img/iconos/cv.png" alt="">' +
            ' <p>' + el.potenciaMax + ' CV</p>' +
            '</div>' +
            ' <div class="card__iconos">' +
            ' <img src="../img/iconos/transmision.png" alt="">' +
            ' <p>' + el.cambio + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</li>'
        });
        console.log(response)
      })
      .catch(err => console.error(err));
  }



}

function mostrarMayorMenor() {
  let idMarca = localStorage.getItem("idMarca");
  const options = { method: 'GET' };


  if (idMarca==0) {
    fetch('http://localhost:8083/coche/todos/mayorMenor', options)
    .then(response => response.json())
    .then(response => {
      document.querySelector('.cards').innerHTML = '';
      response.forEach(el => {
        document.querySelector('.cards').innerHTML +=
          '<li>' +
          '<a href="coche.html" onclick="recogerIdCoche('+ el.idCoche +', '+ el.precioDia +')" class="card">' +
          '<img src="../img/coches/' + el.imagen1 + '" class="card__image" alt="" />' +
          '<div class="card__overlay">' +
          '<div class="card__header">' +
          '<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>    ' +
          '<img class="card__thumb" src="../img/logo_marcas/' + el.marca.imagenLogo + '" alt="" />' +
          '<div class="card__header-text">' +
          '<h3 class="card__title">' + el.nombreCoche + '</h3>     ' +
          '<span class="card__status">' + el.precioDia + ' €</span>' +
          '</div>' +
          '</div>' +
          '<div  class="card__description">' +
          '<div class="card__iconos">' +
          '<img src="../img/iconos/kmh.png" alt="">' +
          '<p>' + el.velocidadMax + 'Km/h</p>' +
          '</div>' +
          '<div class="card__iconos">' +
          '<img src="../img/iconos/cv.png" alt="">' +
          ' <p>' + el.potenciaMax + ' CV</p>' +
          '</div>' +
          ' <div class="card__iconos">' +
          ' <img src="../img/iconos/transmision.png" alt="">' +
          ' <p>' + el.cambio + '</p>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</a>' +
          '</li>'
      });
      console.log(response)
    })
    .catch(err => console.error(err));
  } else {
    fetch('http://localhost:8083/coche/mayorMenor/' + idMarca, options)
    .then(response => response.json())
    .then(response => {
      document.querySelector('.cards').innerHTML = '';
      response.forEach(el => {
        document.querySelector('.cards').innerHTML +=
          '<li>' +
          '<a href="coche.html" onclick="recogerIdCoche('+ el.idCoche +', '+ el.precioDia +')" class="card">' +
          '<img src="../img/coches/' + el.imagen1 + '" class="card__image" alt="" />' +
          '<div class="card__overlay">' +
          '<div class="card__header">' +
          '<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>    ' +
          '<img class="card__thumb" src="../img/logo_marcas/' + el.marca.imagenLogo + '" alt="" />' +
          '<div class="card__header-text">' +
          '<h3 class="card__title">' + el.nombreCoche + '</h3>     ' +
          '<span class="card__status">' + el.precioDia + ' €</span>' +
          '</div>' +
          '</div>' +
          '<div  class="card__description">' +
          '<div class="card__iconos">' +
          '<img src="../img/iconos/kmh.png" alt="">' +
          '<p>' + el.velocidadMax + 'Km/h</p>' +
          '</div>' +
          '<div class="card__iconos">' +
          '<img src="../img/iconos/cv.png" alt="">' +
          ' <p>' + el.potenciaMax + ' CV</p>' +
          '</div>' +
          ' <div class="card__iconos">' +
          ' <img src="../img/iconos/transmision.png" alt="">' +
          ' <p>' + el.cambio + '</p>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</a>' +
          '</li>'
      });
      console.log(response)
    })
    .catch(err => console.error(err));
  }

  
}

window.addEventListener('load', mostrarCochesPorMarca);