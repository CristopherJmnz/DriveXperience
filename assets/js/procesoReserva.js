// const tarjeta = document.querySelector('#tarjeta'),
// 	btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
// 	formulario = document.querySelector('#formulario-tarjeta'),
// 	numeroTarjeta = document.querySelector('#tarjeta .numero'),
// 	nombreTarjeta = document.querySelector('#tarjeta .nombre'),
// 	logoMarca = document.querySelector('#logo-marca'),
// 	firma = document.querySelector('#tarjeta .firma p'),
// 	mesExpiracion = document.querySelector('#tarjeta .mes'),
// 	yearExpiracion = document.querySelector('#tarjeta .year');
// ccv = document.querySelector('#tarjeta .ccv');

// // * Volteamos la tarjeta para mostrar el frente.
// const mostrarFrente = () => {
// 	if (tarjeta.classList.contains('active')) {
// 		tarjeta.classList.remove('active');
// 	}
// }

// // * Rotacion de la tarjeta
// tarjeta.addEventListener('click', () => {
// 	tarjeta.classList.toggle('active');
// });

// // // * Boton de abrir formulario
// // btnAbrirFormulario.addEventListener('click', () => {
// // 	btnAbrirFormulario.classList.toggle('active');
// // 	formulario.classList.toggle('active');
// // });

// // * Select del mes generado dinamicamente.
// for (let i = 1; i <= 12; i++) {
// 	let opcion = document.createElement('option');
// 	opcion.value = i;
// 	opcion.innerText = i;
// 	formulario.selectMes.appendChild(opcion);
// }

// // * Select del año generado dinamicamente.
// const yearActual = new Date().getFullYear();
// for (let i = yearActual; i <= yearActual + 8; i++) {
// 	let opcion = document.createElement('option');
// 	opcion.value = i;
// 	opcion.innerText = i;
// 	formulario.selectYear.appendChild(opcion);
// }

// // * Input numero de tarjeta
// formulario.inputNumero.addEventListener('keyup', (e) => {
// 	let valorInput = e.target.value;

// 	formulario.inputNumero.value = valorInput
// 		// Eliminamos espacios en blanco
// 		.replace(/\s/g, '')
// 		// Eliminar las letras
// 		.replace(/\D/g, '')
// 		// Ponemos espacio cada cuatro numeros
// 		.replace(/([0-9]{4})/g, '$1 ')
// 		// Elimina el ultimo espaciado
// 		.trim();

// 	numeroTarjeta.textContent = valorInput;

// 	if (valorInput == '') {
// 		numeroTarjeta.textContent = '#### #### #### ####';

// 		logoMarca.innerHTML = '';
// 	}

// 	if (valorInput[0] == 4) {
// 		logoMarca.innerHTML = '';
// 		const imagen = document.createElement('img');
// 		imagen.src = 'img/logos/visa.png';
// 		logoMarca.appendChild(imagen);
// 	} else if (valorInput[0] == 5) {
// 		logoMarca.innerHTML = '';
// 		const imagen = document.createElement('img');
// 		imagen.src = 'img/logos/mastercard.png';
// 		logoMarca.appendChild(imagen);
// 	}

// 	// Volteamos la tarjeta para que el usuario vea el frente.
// 	mostrarFrente();
// });

// // * Input nombre de tarjeta
// formulario.inputNombre.addEventListener('keyup', (e) => {
// 	let valorInput = e.target.value;

// 	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
// 	nombreTarjeta.textContent = valorInput;
// 	firma.textContent = valorInput;

// 	if (valorInput == '') {
// 		nombreTarjeta.textContent = 'Jhon Doe';
// 	}

// 	mostrarFrente();
// });

// // * Select mes
// formulario.selectMes.addEventListener('change', (e) => {
// 	mesExpiracion.textContent = e.target.value;
// 	mostrarFrente();
// });

// // * Select Año
// formulario.selectYear.addEventListener('change', (e) => {
// 	yearExpiracion.textContent = e.target.value.slice(2);
// 	mostrarFrente();
// });

// // * CCV
// formulario.inputCCV.addEventListener('keyup', () => {
// 	if (!tarjeta.classList.contains('active')) {
// 		tarjeta.classList.toggle('active');
// 	}

// 	formulario.inputCCV.value = formulario.inputCCV.value
// 		// Eliminar los espacios
// 		.replace(/\s/g, '')
// 		// Eliminar las letras
// 		.replace(/\D/g, '');

// 	ccv.textContent = formulario.inputCCV.value;
// });

window.addEventListener("load", calcularPrecio);

function calcularPrecio() {
  let arrayInicio = localStorage.getItem("fechaInicio").split("-");
  let fechaInicio = new Date(arrayInicio[0], arrayInicio[1], arrayInicio[2]);

  let arrayFin = localStorage.getItem("fechaFin").split("-");
  let fechaFin = new Date(arrayFin[0], arrayFin[1], arrayFin[2]);

  let dias = (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24);
  console.log(dias);

  let total = localStorage.getItem("precioDia") * dias;
  localStorage.setItem("precioTotal", total);

  document.querySelector("#precio").innerHTML =
    "Total a pagar: " + total + " €";
}

function addTarjeta() {
  let numTarj = document.querySelector("#inputNumero").value;
  let titular = document.querySelector("#inputNombre").value;
  let mes = document.querySelector("#mes").value;
  let year = document.querySelector("#year").value;
  let cvv = document.querySelector("#inputCCV").value;

  let fecha = year + "-" + mes + "-" + "01";

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body:
      '{"numTarjeta":"' +
      numTarj +
      '","cvv":' +
      cvv +
      ',"fechaCaducidad":"' +
      fecha +
      '","nombreTitular":"' +
      titular +
      '"}',
  };

  fetch(
    "http://localhost:8083/usuario/tarjeta/add/" +
      JSON.parse(localStorage.getItem("usuario")).email,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

function reservar() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body:
      '{"idReserva":0,"idCoche":' +
      localStorage.getItem("idCoche") +
      ',"email":"' +
      JSON.parse(localStorage.getItem("usuario")).email +
      '","fechaInicio":"' +
      localStorage.getItem("fechaInicio") +
      '","fechaFin":"' +
      localStorage.getItem("fechaFin") +
      '","precioTotal":' +
      localStorage.getItem("precioTotal") +
      " }",
  };

  fetch("http://localhost:8083/usuario/reserva", options)
    .then((response) => response.json())
    .then((response) => {
      if ((response.status = 200)) {
        console.log(response);
        addTarjeta();
        goIndex();
      }
    })
    .catch((err) => console.error(err));
}
