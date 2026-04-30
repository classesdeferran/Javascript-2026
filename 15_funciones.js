// FUNCIONES 
// Reutilización de código

sumar(3, 67)
saludar()

// Crear una función por declaración
function saludar () {
    console.log("Hola");
}

function sumar (num1, num2) {
    return num1 + num2;
    console.log("Hoy es jueves");
}

sumar(4, 25, 4)
let suma = sumar(8, 2)
console.log(suma);

console.log(sumar(5, 3));
sumar(9, 1)

// Mini ejercicio
// "frAncISco" --> "Francisco"
// "maRiA teREsA" --> "Maria Teresa"
// "maRia De LOS anGeles" --> "Maria de los Angeles"

/*
console.log(corregirNombre("maRia De LOS anGeles")); // "Maria de los Angeles"

function corregirNombre (nombre) {

}
*/

// ========================================================
// Sistema 2
// Crear una función por asignación
let saludar2 = function (nombre) {
    return `Hola, ${nombre}!`
}
console.log(saludar2('Paco'));

// ========================================================
// Sistema 3
let saludar3 = (nombre) => {
    return `Hola, ${nombre}!`
}

// ========================================================
// Sistema 4
let saludar4 = nombre => `Hola, ${nombre}!`

let sumar4 = (num1, num2) => num1 + num2

console.log(sumar4(2,6));

const frutas = ['naranja', 'fresa', 'cereza', 'pomelo']

frutas.forEach(fruta => {
    console.log(fruta.toLocaleUpperCase());
})

// ====================================
// valores por defecto
dividir (3, 4)
dividir (8)

function dividir (num1, num2=2 ) {
    console.log(num1 / num2);
}

console.log(nombreCompleto("Anna", "Pou", "Garcia"));
console.log(nombreCompleto("Peter", "Parker"));
function nombreCompleto (nombre, apellido1, apellido2="") {
    return `${nombre} ${apellido1} ${apellido2}`
}

// ==============================================
// ¿Qué pasa cuando no sabemos exactamente cuántos parámetros necesitamos?

sumar5(1 , 2)
sumar5(2, 3, 5, 5, 7, 8, ["a", "b", "c"])
sumar5('Caperucita', "Roja")

// operador spread
function sumar5 (...nums) {
    console.log(nums);
}