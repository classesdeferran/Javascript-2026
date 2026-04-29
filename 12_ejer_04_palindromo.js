// EJERCICIO 4: PALÍNDROMO

// Escribe un código que determine si una palabra o frase es un palíndromo, 
// es decir, se lee igual de izquierda a derecha que de derecha a izquierda. 
// Ignora los espacios, signos de puntuación y mayúsculas. 

// Ejemplos de palíndromo: "Anita lava la tina", "Anna", "Amor a Roma" 

const texto1 = "    Anna;      "

// Paso 1: quitar las comas
const textoSinComas = texto1.replaceAll(",", "")
const textoSinPuntos = textoSinComas.replaceAll(".", "")
const textoSinPuntoYComa = textoSinPuntos.replaceAll(";", "")
console.log(textoSinPuntoYComa);

let textoLimpio = texto1.replaceAll(",", "").replaceAll(".", "").replaceAll(";", "").replaceAll(" ", "")
console.log(textoLimpio);

// Paso 2: quita los espacios del principio y el final
const textoTrim = textoLimpio.trim()
console.log(textoTrim);

// Paso 3: pon el texto en minúsculas
const textoMinusculas = textoTrim.toLocaleLowerCase()
console.log(textoMinusculas);

// Paso 3: quita los espacios interiores
let texto
let textoSinEspaciosInteriores = textoMinusculas.split("")
console.log(textoSinEspaciosInteriores);

// Paso 4: crea una variable con el texto invertido
const textoInvertido = textoSinEspaciosInteriores.reverse().join("")
console.log(textoInvertido);

// Paso 5: compara el texto original y el invertido
if (textoMinusculas === textoInvertido) console.log("El texto es un palíndromo");
else console.log("El texto no es un palíndromo");
