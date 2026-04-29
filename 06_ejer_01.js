// console.log("Hola");

// alert("Buenas tardes")

// let mayorDeEdad = confirm("¿Eres mayor de edad?")

// let numeroDiaSemana = prompt("Dime que número de día es")

// Resultado esperado
// Preguntaremos al usuario qué día es (en número)
// y le daremos una respuesta como esta:
// Hoy es lunes 27 de abril

const diaEnNumero = prompt("Que día de la semana es (en número)?");

/*
if (diaEnNumero == 27) {
    alert("Hoy es lunes 27 de abril")
} else if (diaEnNumero == 28) {
    alert("Hoy es martes 28 de abril")
} else if (diaEnNumero == 29) {
    alert("Hoy es miércoles 29 de abril")
} else if (diaEnNumero == 30) {
    alert("Hoy es jueves 30 de abril")
} else if (diaEnNumero == 1) {
    alert("Hoy es viernes 1 de mayo")
} else if (diaEnNumero == 2) {
    alert("Hoy es sábado 2 de mayo")
} else if (diaEnNumero == 3) {
    alert("Hoy es domingo 3 de mayo")
} else {
    alert("No determinado")
}
*/

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
console.log(diaEnNumero);
