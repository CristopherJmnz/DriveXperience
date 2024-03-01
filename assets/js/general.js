document.querySelector(".nav-logo").addEventListener("click",goIndex);
document.querySelector("#login").addEventListener("click",goLogIn);
document.querySelector(".sesion").addEventListener("click",cerrarSesion);

/**
 * Sirve para redireccionar a la pagina principal independientemente del html en el que el usuario se encuentre.
 */
function goIndex(){
    switch (window.location.pathname) {
        case "/index.html":
            window.location="index.html"
            break;
        default:
            window.location="../../index.html"
            break;
    }
}


function goLogIn(){
    switch (window.location.pathname) {
        case "/index.html":
            window.location="assets/html/login.html"
            break;
        default:
            window.location="login.html"
            break;
    }
}



function recogerIdMarca(idMarca) {
    localStorage.setItem("idMarca", idMarca);
}


/**
 * Comprueba si hay una sesión iniciada.
 * @returns {boolean} - True si hay una sesión iniciada, false si no la hay
 */

function comprobarSesion(){
    if (localStorage.getItem("usuario")!=null) {
        return true;
    }
    else{
        return false;
    }
}


if (localStorage.getItem("usuario")!=null) {
    document.querySelector(".sesion").style.display="block";
    document.querySelector(".fa-user").style.display="none";
}
else{
    document.querySelector(".sesion").style.display="none";
    document.querySelector(".fa-user").style.display="block";
}


/**
 * Hace una petición POST al servidor para comprobar que los credenciales introducidos en el formulario coinciden con un usuario existente.
 * Si se realiza el inicio de sesión se redirecciona al index, sino se avisa al usuario de que algo ha fallado. 
 */
function iniciarSesion(){

    let email=document.querySelector("#email1");
    let password=document.querySelector("#password1");

    let emailnombre=email.value;
    let password1=password.value;


    const options = {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: '{"email": "'+ emailnombre +'","password":"'+ password1 +'"}'
    };
      
    fetch('http://localhost:8083/usuario/login', options)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("usuario",JSON.stringify(data));
        document.querySelector(".sesion").style.display="block";
        document.querySelector(".fa-user").style.display="none";
        
        switch (window.location.pathname) {
            case "/index.html":
                window.location="index.html"
                break;
            default:
                window.location="../../index.html"
                break;
        }
    })
    .catch(err => alert("Usuario incorrecto"));
}


function cerrarSesion(){
    localStorage.removeItem("usuario");
    switch (window.location.pathname) {
        case "/index.html":
            window.location="index.html"
            break;
        default:
            window.location="../../index.html"
            break;
    }
}

/**
 * Realiza una petición POST al servidor enviando un json con los datos del usuario para asi poder registrarse.
 * Solo se permite el registro a personas mayores de edad y si el email no esta previamente registrado.
 */
function registro(){

    let nombre=document.querySelector("#nombre");
    let apellidos=document.querySelector("#apellidos");
    let fecha=document.querySelector("#fecha");
    let email=document.querySelector("#email");
    let password=document.querySelector("#password");

    let year=new Date();

    if(year.getFullYear()-fecha.value.split("-")[0]<=18){
        alert("No puedes registrarte si eres menor de edad");
    }
    else{
        const options = {
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: '{"nombre":"'+ nombre.value +'","apellidos":"'+ apellidos.value +'","fechaNacimiento":"'+ fecha.value +'","email":"'+ email.value +'","password":"' + password.value + '"}'
        };
          
        fetch('http://localhost:8083/usuario/registro', options)
        .then(response => response.json())
        .then(data => {
            if (data==1) {
                alert("Registro realizado correctamente");
                goLogIn();
            }
            else{
                alert("error al registarse")
            }
        })
    }
}






const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});



