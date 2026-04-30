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

console.log(corregirNombre("maRia De LOS anGeles")); // "Maria de los Angeles"

function corregirNombre (nombre) {
    
}