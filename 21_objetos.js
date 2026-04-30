// OBJETOS

let array1 = ["Manuel", "Ferran", 28, "Badalona", "mp@ejemplo.com" ]
let array2 = ["Manuel",  28, "Badalona", "mp@ejemplo.com" ]

console.log(array1[1]);

let objeto1 = {
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
    padres: {padre: "Paco", madre: "Eva"}
}

console.log(objeto1['apellido']);
console.log(objeto1.apellido);
console.log(objeto1.saludar());
console.log(objeto1.despedir());
console.log(objeto1["nombre completo"]);

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