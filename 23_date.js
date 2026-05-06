// DATE para fechas

const ahora = new Date()
console.log(ahora);

const domingo = new Date(2026, 4, 10, 12, 30, 0)
console.log(domingo);

console.log(ahora.toLocaleString("es-ES"));
console.log(ahora.toLocaleString("es-CO"));

console.log(ahora.getFullYear());
console.log(ahora.getMonth());
console.log(ahora.getDay());
console.log(domingo.getDay());
console.log(ahora.getDate());
console.log(ahora.getHours());
console.log(ahora.getMinutes());
console.log(ahora.getSeconds());

console.log(domingo.toLocaleString("jp-JP"), {timezone: 'UTC'});

console.log(typeof ahora);
console.log(typeof Math.PI);
console.log(typeof NaN);
console.log(typeof ("hoy"/5));
const prueba = "hoy"/2
if (isNaN(prueba)) {
    console.log(`La variable prueba (${prueba}) No es un número`);
} else {
    console.log(`La variable prueba (${prueba}) es un número`);
}

// getTime devuelve los milisegundos transcuridos desde 1-1-1970
console.log(ahora.getTime());
let navidad = new Date(2026, 11, 25, 21, 0, 0)
console.log(navidad.getTime());

// Necesito una función que calcule los días entre dos fechas
function diferenciaDias (fecha1, fecha2) {

    const msFecha1 = fecha1.getTime()
    const msFecha2 = fecha2.getTime()

    const msResta = Math.abs(msFecha1-msFecha2)
    // Convertir ms en días
    // 1000 ms x 60 s x 60 m x 24 h
    const msDia = 1000 * 60 * 60 * 24
    const dias = msResta / msDia
    return Math.floor(dias)
}

console.log(diferenciaDias(ahora, navidad));
console.log(diferenciaDias(navidad, ahora));

const inicioVacaciones = new Date (2026, 7, 1)
console.log(diferenciaDias(ahora, inicioVacaciones));

// Prepara una función que convierta toneladas en gramos
function toneladasGramos (tons) {
    // gramos en una tonelada
    // 1TN = 1000kg - 1kg = 1000gr
    return tons * (1000 * 1000)
}

console.log(toneladasGramos(167.12345678));
