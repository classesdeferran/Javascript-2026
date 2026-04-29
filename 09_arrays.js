// ARRAYS

const variable1 = 1
const variable2 = "Hola"
const variable3 = true

let arrayVacio1 = []
let arrayVacio2 = new Array()

let ejemploArray1 = [1,2,3,4,5]
//                    0      1        2         3
let ejemploArray2 = [567, "martes", false, variable1]

const string = "Soy un string"
console.log(string[1]);

console.log(ejemploArray2[0]);
console.log(ejemploArray2[1].toLocaleUpperCase());
console.log(ejemploArray2[1]);
console.log(ejemploArray2[4]);

const longString = string.length
console.log(longString);
console.log(ejemploArray2.length);

let arrayFrutas = ["kiwi", "fresa", "pomelo"]
console.log(typeof arrayFrutas);

// push --> añade un elemento al final del array
arrayFrutas.push("pera")
console.log(arrayFrutas);

// pop --> quita el último elemento del array
let ultimoElemento = arrayFrutas.pop()
console.log(arrayFrutas);
console.log(ultimoElemento);

// unshift --> añade un elemento al principio del array
arrayFrutas.unshift("pera")
console.log(arrayFrutas);

// shift --> quita el primer elemento del array
arrayFrutas.shift()
console.log(arrayFrutas);

// toString --> crear un string desde un array
let arrayToString = arrayFrutas.toString()
console.log(arrayToString);

// join--> crear un string desde un array
let arrayToString2 = arrayFrutas.join("-")
console.log(arrayToString2);

// indexOf --> posición de un elemento
console.log(arrayFrutas.indexOf("pomelo"));
console.log(arrayFrutas.indexOf("mandarina"));
console.log(arrayFrutas.indexOf("melón"));

// reverse -- invierte el orden de los elementos
arrayFrutas.reverse()
console.log(arrayFrutas);
let arrayFrutas2 = arrayFrutas.reverse()
console.log(arrayFrutas2);

let arrayFrutasCambiado = arrayFrutas.toReversed()
console.log(arrayFrutasCambiado);

// toSorted --> crea un array ordenado
let arrayFrutasOrdenado = arrayFrutas.toSorted()
console.log(arrayFrutasOrdenado);
let arrayNumeros = [1,2,3,4,10,20,30]
console.log(arrayNumeros.toSorted());

// sort
console.log(arrayFrutasCambiado);
console.log(arrayFrutasCambiado.sort());
console.log(arrayFrutasCambiado);

// slice
arrayFrutas.push("melón")
arrayFrutas.push("cereza")
console.log(arrayFrutas);
console.log(arrayFrutas.slice(2,4));