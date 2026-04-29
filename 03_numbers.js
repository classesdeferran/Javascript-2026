const IVA18 = 0.18

// Tipo numérico
let num1 = 20
let num2 = 20.5
let num3 = -20

console.log(typeof num1)

let suma = num1 + num2
let resta = num1 - num2
let multi = num1 * num2
let division = num1 / num2
let potencia = 2**3
let raizQ = 9**0.5
console.log(raizQ)

let resto = 20 % 2 // % <-- para obtener el módulo o resto
console.log(resto)

let variable = "lunes"
console.log(typeof variable);

variable = 27
console.log(typeof variable);

let saludo = "buenas " + "tardes"

console.log("2" + 1);
console.log("2" - 1);
console.log("dos" - 1);

// Precisión : OJO!
num1 = 0.1
num2 = 0.2
suma = num1 + num2
console.log(suma);
console.log(num1+num2 == 0.3);

let numGrande1 = 12345678901234567890
console.log(numGrande1 == 12345678901234567890);
console.log(numGrande1 == 12345678901234567891);

let numGrande2 = 12345678901234567890n
let numGrande3 = 12345678901234567891n
console.log(numGrande2 == numGrande3);