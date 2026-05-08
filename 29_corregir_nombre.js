
function corregirNombre(nombre) {
    // Paso 1 : poner el nombre completo en minúsculas
    nombre = nombre.trim().toLocaleLowerCase()
    // Paso 2 : ¿cuántos caracteres tiene la palabra?
    const numCars = nombre.length
    let minusculas = nombre.slice(1, numCars)
    // Paso 3 :  solucionar la inicial
    let inicial = nombre[0].toLocaleUpperCase()
    // Paso 4 : completar el nombre 
    let nombreCompleto = inicial + minusculas
    return nombreCompleto
}

function corregirNombreCompuesto(nombre) {
    // Paso 1 : poner el nombre completo en minúsculas
    nombre = nombre.trim().split(" ")
    console.log(nombre)
    let arrayNombreCorregido = []
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] === "") continue
        let nombreActual = nombre[i].trim()
        let nombreCorregido = corregirNombre(nombreActual)
        arrayNombreCorregido.push(nombreCorregido)
    }
    return arrayNombreCorregido.join(" ")
}

function verificarLongitud(nombre) {
    nombre = nombre.trim()
    if (nombre.length < 2) return false  
    
    nombre = nombre.split(" ")
    
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i].length < 2) return false  
           
    }

   return true
}

// export default corregirNombreCompuesto

// exportar la función para que pueda ser utilizada en otros archivos
export { corregirNombreCompuesto, verificarLongitud }