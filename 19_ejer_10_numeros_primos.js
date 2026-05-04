// DETERMINAR SI UN NÚMERO ES PRIMO O NO, MOSTRANDO SU PRIMERA DIVISIÓN EXACTA SI NO LO ES

function esPrimo(num) {
    if (num < 2) {
        return false; // Los números menores que 2 no son primos
    }   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return `No es primo. Se divide exactamente por ${i}.`; // Retorna la primera división exacta
        }
    }
    return "Es primo."; // Si no se encuentra ningún divisor, es primo
}
// Ejemplo de uso
const numero = 15;
const resultado = esPrimo(numero);
console.log(resultado); // Output: No es primo. Se divide exactamente por 3.
    