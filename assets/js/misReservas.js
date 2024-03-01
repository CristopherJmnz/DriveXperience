window.addEventListener("load",mostrarReservas);

function mostrarReservas() {
    

    

    if (!comprobarSesion()) {
        document.querySelector("h1").style.fontSize="50px";
        document.querySelector("h1").innerHTML ='Necesitas iniciar sesión para realizar reservas';
    }else{

        const options = { method: 'GET' };

        let email=JSON.parse(localStorage.getItem("usuario")).email;
        fetch('http://localhost:8083/usuario/reservas/' + email, options)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            data.forEach(el => {
                document.querySelector("main").innerHTML += '<button onclick="desplegar('+ el.idReserva +')" class="w3-button w3-block w3-hover-red w3-black">'+ el.coche.nombreCoche + ' ' + el.fechaInicio + '</button>'+
                    '<div id = "'+ el.idReserva +'" class="w3-hide w3-animate-zoom">'+
                        '<div class="w3-block w3-left-align car-info">'+
                            '<div class="car-img">'+
                                '<img src="../img/coches/'+ el.coche.imagen1 +'" alt="">'+
                            '</div>'+
                            '<div class="car-data">'+
                                '<h3>Marca: '+ el.coche.marca.nombreMarca +'</h3>'+
                                '<div>Desde: '+ el.fechaInicio +'</div>'+
                                '<div>Hasta: '+ el.fechaFin +'</div>'+
                            '</div>'+
                        '</div>'+
                '</div > '
            });

            
        })
        .catch(err => console.error(err));
    }
}



function desplegar(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}