// FOR

// sintaxis clásica
// for (elemento_inicial; condición; criterio de incremento) {
//     ..
// }

let arrayFrutas = ["kiwi", "manzana", "cereza", "naranja"]
console.log(arrayFrutas);
console.log(arrayFrutas[0]);
console.log(arrayFrutas[1]);

for (let i=0; i < arrayFrutas.length; i++) {
    const mensaje = `El índice ${i} corresponde al ${arrayFrutas[i]}`
    console.log(mensaje);
}

for (fruta of arrayFrutas) {
    console.log(fruta);
}

let palabra = "Abracadabra"

for (letra of palabra) {
    console.log(letra);
}

