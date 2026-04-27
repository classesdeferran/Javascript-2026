// IF
// Si hace calor, me pondré sandalias
// sino, iré al cine

const haceCalor = false;

if (haceCalor) {
  console.log("Me pondré sandalias");
}

if (haceCalor) {
  console.log("Me pondré sandalias");
} else {
  console.log("iré al cine");
}

// Buenos días --> 7:00 hasta 14:00 incluidas: 7,8,9,10,11,12,13,14
// Buenas tardes --> desde 14:XX hasta 21:00 incluido
// Buenas noches --> el resto de horas

const horaActual = 16;
if (horaActual >= 7 && horaActual <= 14) {
  console.log("Buenos días");
} else if (horaActual > 14 && horaActual <= 21) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
