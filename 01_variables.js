// var es la forma antigua de crear una variable
var variable_1 = 1 // vamos a intentar no usarla
var variable_1 = 2

variable_2 = 3 // <-- ESTO NUNCA !!!

console.log (variable_1)

/* let es la forma moderna 
de crear una variable */
let variable2 = "hoy es viernes"
console.log("línea 6", variable2)

variable2 = "mañana será sábado"

const lenguaje = 'Javascript'

// instrucción para mostrar un resultado en la pantalla
console.log("línea 14", variable2)


const PI = 3.1416
// PI = 7 <-- ERROR: No se puede reasignar el valor de una constante

let costeProducto = "25"
let costeImpuestos = 1.2
console.log(costeProducto + costeImpuestos);

// Convertir tipos de datos (cast)
console.log(typeof costeProducto);
costeProducto = parseInt(costeProducto)
console.log(typeof costeProducto);
console.log(costeProducto + costeImpuestos);

costeProducto = "34.5"
costeProducto = parseFloat(costeProducto)
console.log(typeof costeProducto);
console.log(costeProducto + costeImpuestos);

let saludo = "Hola"
{
    let saludo = "Buenas tardes"
    console.log(saludo);
}
console.log(saludo);


let saludo2 = "Hola"
{
    saludo2 = "Buenas tardes"
    console.log(saludo2);
}
console.log(saludo2);

{
    let despedida = "Adiós"
    console.log(despedida);
}
// console.log(despedida);


{   
    var numero = 1
    console.log(numero);
}
console.log(numero);