// WHILE
// while (condicion) {
//     código que se ejecuta
// }

let indicador = -1

while ( indicador >= 0) {
    console.log(indicador);
    indicador = indicador - 1
}

while ( true ) {
    console.log(indicador);
    indicador = indicador - 1
    if (indicador <= -1) {
        break;
    }
}

const claveSecreta = "1234"
let respuestaUsuario = ""
do {
    respuestaUsuario = prompt("Dime la clave secreta")

} while (respuestaUsuario != claveSecreta)

alert("Has entrado en la base oculta")