// OBJETOS

let array1 = ["Manuel", "Ferran", 28, "Badalona", "mp@ejemplo.com" ]
let array2 = ["Manuel",  28, "Badalona", "mp@ejemplo.com" ]

console.log(array1[1]);

const objeto2 = {}
const objeto3 = new Object()

let persona = {
    nombre : "Manuel",
    apellido : "Perez",
    "nombre completo": "Manuel Pérez",
    edad: 28,
    ciudad: "Badalona",
    email: "mp@ejemplo.com",
    saludar: function(){return ("Hola")},
    despedir: () => "Adiós",
    caminar: () => console.log("Estoy andando"),
    amigos: ["Anna", "Pepe", "Miguel"],
    padres: {padre: "Paco", madre: "Eva"},
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido
    }
}



console.log(persona['apellido']);
console.log(persona.apellido);
console.log(persona.saludar());
console.log(persona.despedir());
console.log(persona["nombre completo"]);
console.log(persona.nombreCompleto());

console.log("mañana es festivo".toLocaleUpperCase());

// Sintaxis JSON
let objetoJSON = {
    "nombre" : "Manuel",
    "apellido" : "Perez",
    "edad": 28,
    "ciudad": "Badalona",
    "email": "mp@ejemplo.com",
    "saludar": 'function(){return ("Hola")}' // <-- no lo hagas
}

const listaAlumnos = [
    {nombre: "Ferran", apellido: "Spiderman", ciudad: "Barcelona"},
    {nombre: "Felip", apellido: "Spiderman", ciudad: "Cornellà"},
    {nombre: "Carmen", apellido: "Spiderman", ciudad: "Barcelona"},
]

persona['nombre'] = "Clark" // persona.nombre
console.log(persona['nombre']);
console.log(persona.nombre);
console.log(persona.nombreCompleto());

delete persona["nombre completo"]
console.log(persona["nombre completo"]);

for (propiedad in persona) {
    console.log(propiedad, persona[propiedad]);
}

console.log("nombre" in persona);
console.log("name" in persona);

console.log(Object.keys(persona));
console.log(Object.entries(persona))

const coche = {}
coche.marca = "Seat"
coche['modelo'] = "Arona"

console.log(coche);

function addFruits (nombre, precio, unidad) {
    return {
        nombre,
        precio,
        unidad: unidad,
        textoCompleto: `${nombre}: ${precio.toFixed(2)}${unidad}`
    }
}

const fruta1 = addFruits("fresas", 5, "€/kg")
console.log(fruta1);
const fruta2 = addFruits('manzanas', 3.5, "€/kg")
console.log(fruta2);
console.log(fruta1.textoCompleto);

