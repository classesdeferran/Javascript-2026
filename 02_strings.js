// STRINGS = TEXTO
let texto1 = "Soy un texto"
let texto2 = 'Soy un texto'
let texto3 = "I'm a teacher"
// let texto3 = 'I'm a teacher'
let texto4 = 'Shakespeare escribió "To be or not to be..."'
let texto5 = 'Shakespeare escribió "To be or not to be..." and I\'m a writer'
console.log(texto5.length)

let palabra = "Abracadabra"
console.log(palabra.length)

console.log(palabra[0])
console.log(palabra[1])
console.log(palabra[11])

console.log(palabra.at(-1))

console.log(palabra.toLocaleUpperCase())
palabra = palabra.toLocaleUpperCase()
console.log(palabra)
let palabra2 = (palabra.toLocaleLowerCase())

console.log(1/0)

let saludo1 = "Buenas"
let saludo2 = "tardes"
let saludoTotal = saludo1 + " " + saludo2
console.log(saludoTotal)
let saludo_parcial = saludoTotal - saludo2
console.log(saludo_parcial)
let prueba = "a" * 5
console.log(prueba)

let prueba2 = 1 + "2"
console.log(prueba2)

let nombre = "       seRGI         "
console.log(nombre.length)
nombre = nombre.trim()
console.log(nombre.length)
console.log(nombre)
// Paso 1 : poner el nombre completo en minúsculas
nombre = nombre.toLocaleLowerCase()
// Paso 2 : ¿cuántos caracteres tiene la palabra?
const numCars = nombre.length
let minusculas = nombre.slice(1, numCars)
// Paso 3 :  solucionar la inicial
let inicial = nombre[0].toLocaleUpperCase()
console.log(inicial)
// Paso 4 : completar el nombre 
let nombreCompleto = inicial + minusculas
console.log(nombreCompleto)

console.log(palabra2)
let nuevaPalabra = palabra2.replace("a", "i")
console.log(nuevaPalabra)
nuevaPalabra = nuevaPalabra.replaceAll("ra", "ri")
console.log(nuevaPalabra)

let nombrePila = "Ferran"

let verdadero = true
let falso = false

let cumpleCondicion = nombrePila.length < 7
console.log(cumpleCondicion)

let preguntaDeLaInicial = nombrePila.startsWith("Z")
console.log(preguntaDeLaInicial)

let preguntaDelFinal = nombrePila.endsWith("n")
console.log(preguntaDelFinal)

let nombreUsuario = "Peter"
let apellidoUsuario = "Parker"
let saludoUsuario = "buenas tardes " + nombreUsuario + " " + apellidoUsuario + "!"
console.log(saludoUsuario);

// template string
let saludoUsuario2 = `buenas tardes ${nombreUsuario} ${apellidoUsuario} !`
console.log(saludoUsuario2);