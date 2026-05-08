// Obtener el formulario por el nombre
// console.log(document.forms);


const formularioSencillo = document.forms['formularioSencillo']
const errorNombre = document.getElementById('errorNombre')

formularioSencillo.addEventListener('submit', (event) => {
    event.preventDefault()
    
    // Obtener los datos de los inputs
    let nombre = formularioSencillo['nombre'].value.trim()
    if (nombre.length < 2) {
        errorNombre.textContent = "Nombre incorrecto"
    }

    let email = formularioSencillo['email'].value
    let password = formularioSencillo['password'].value

    let fechaNacimiento = formularioSencillo['fechaNacimiento'].value
    console.log(fechaNacimiento);
    
})
