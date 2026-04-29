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

// SWITCH
// switch (valor) {
//   case "1":
//     ...
//     break;
//   case 2:
//     ...
//     break;
//   default:
//     ...
// }

let diaEnNumero = 3
// Ejemplo:
switch (diaEnNumero) {
  case "27":
    alert("Hoy es lunes 27 de abril");
    break;
  case "28":
    alert("Hoy es martes 28 de abril");
    break;
  case "29":
    alert("Hoy es miércoles 29 de abril");
    break;
  case "30":
    alert("Hoy es jueves 30 de abril");
    break;
  case "1":
    alert("Hoy es viernes 1 de mayo");
    break;
  case "2":
    alert("Hoy es sábado 2 de mayo");
    break;
  case "3":
    alert("Hoy es domingo 3 de mayo");
    break;
  default:
    alert("Valor no aceptado");
}