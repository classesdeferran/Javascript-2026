// FOR

// sintaxis clásica
// for (elemento_inicial; condición; criterio de incremento) {
//     ..
// }

let arrayFrutas = ["kiwi", "manzana", "cereza", "naranja"]
console.log(arrayFrutas);
console.log(arrayFrutas[0]);
console.log(arrayFrutas[1]);

for (let i=0; i <arrayFrutas.length; i++) {
    const mensaje = `El índice ${i} corresponde al ${arrayFrutas[i]}`
    console.log(mensaje);
}

for (fruta of arrayFrutas) {
    console.log(fruta);
}

let palabra = "Abracadabra"
let palabraMinus = palabra.toLocaleLowerCase()
let letraABuscar = "b"
let contador = 0

for (letra of palabraMinus) {
    
    if (letra == letraABuscar) {
        contador = contador + 1
    }
    // console.log(letra);
}

console.log(`Hay ${contador} ${letraABuscar}`);

contador = 0
for (letra of palabra) {
    if (letra == "a" || letra == "A") {
        contador++
    }
}
console.log(`Hay ${contador} ${letraABuscar}`);

// ¿Cuántas palabras tiene este texto?
let texto = "    En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho que     "
texto = texto.trim()

// texto = "hola"
// texto = ""

// Solución A
contador = 0
for (letra of texto) {
    if (letra == " ") contador++
}
if (texto.length > 0) contador++

console.log(contador);

// Solución B
const arrayTexto = texto.split(" ").length
console.log(arrayTexto);

// Tabla de multiplicar de un número 
const numero = 6
/*
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
...
6 x 10 = 60
*/

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


