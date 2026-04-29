// FUNCIONES EN JAVASCRIPT
//========================
// Una función es un bloque de código diseñado para realizar una tarea específica.

// Las funciones se definen utilizando la palabra clave "function", seguida del nombre de la función, paréntesis y llaves.
// EJEMPLO DE FUNCIÓN

function saludar() {
    console.log("Hola, ¿cómo estás?")
}
// LLAMAR A UNA FUNCIÓN
saludar() // Hola, ¿cómo estás?

// Las funciones pueden recibir parámetros, que son valores que se pasan a la función para que los utilice en su ejecución.
function saludarPersona(nombre) {
    console.log(`Hola, ${nombre}, ¿cómo estás?`)
}
saludarPersona("Juan") // Hola, Juan, ¿cómo estás?
// Las funciones también pueden devolver un valor utilizando la palabra clave "return".
function sumar(a, b) {
    return a + b
}
const resultado = sumar(2, 3) // 5
console.log(resultado) // 5

// Las funciones pueden ser anónimas, es decir, no tienen un nombre y se asignan a una variable.
const multiplicar = function(a, b) {
    return a * b
}
const resultado2 = multiplicar(2, 3) // 6
console.log(resultado2) // 6
// Las funciones también pueden ser flecha, que son una forma más concisa de escribir funciones anónimas.
const dividir = (a, b) => {
    return a / b
}
const resultado3 = dividir(6, 3) // 2
console.log(resultado3) // 2
// Si la función tiene una sola expresión, se puede omitir la palabra clave "return" y las llaves.
const restar = (a, b) => a - b
const resultado4 = restar(5, 2) // 3
console.log(resultado4) // 3    


    