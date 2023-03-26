var email = "guillermomv05@gmail.com"
var password = "123456789"
var modal =document.getElementById("exampleModal")

var datos = []



let desaparecer = () =>{
    modal.style.display = "none"

    location.reload()
}

let recargar = () =>{
    alert("Datos incorrectos")

    location.reload()
}
// Pedido de datos
let ObtenerDatos = (emailIngresado, claveIngresada) => {

    emailIngresado = document.getElementById("exampleInputEmail1").value
    claveIngresada = document.getElementById("exampleInputPassword1").value

    // Agregado de datos al Array

    datos.push(emailIngresado, claveIngresada)

    // validacion

    if (email == datos[0] && password == datos[1]) {
        setTimeout(desaparecer, 1000)
    } else {
        setTimeout(recargar, 1000)
    }
}




let boton = document.getElementById("Ingresar")



boton.addEventListener("click", ObtenerDatos)

