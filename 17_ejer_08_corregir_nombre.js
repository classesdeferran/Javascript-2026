// Escribe una función que reciba un nombre (que puede ser compuesto)
// y devuelva el nombre corregido, es decir, con la primera letra de cada palabra en mayúscula 
// y el resto en minúscula. Pero hay que tener en cuenta que alguna partes del nombre
// pueden no ir en mayúscula, por ejemplo "de", "del", "la", "las", "los", "y", etc.
// Ejemplo: María de los Ángeles, Francesc Xavier de la Vall, Anna Maria de la Pau, etc.
// Por ejemplo, si el nombre es "juan perez", la función debería devolver "Juan Perez".

function corregirNombre(nombre) {
    // Convertir el nombre a minúsculas
    nombre = nombre.toLowerCase();
    
    // Dividir el nombre en palabras
    let palabras = nombre.split(" ");
    
    // Array de palabras que no van en mayúscula
    let sinMayuscula = ["de", "del", "la", "las", "los", "y"];
    
    // Recorrer cada palabra y capitalizarla si es necesario
    for (let i = 0; i < palabras.length; i++) {
        if (!sinMayuscula.includes(palabras[i])) {
            palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
        }
    }
    
    // Unir las palabras nuevamente
    return palabras.join(" ");
}