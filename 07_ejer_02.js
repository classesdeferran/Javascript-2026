// Pregunta al usuario qué nombre de día de la semana es
// (lunes, martes, etc.).
// También puede contestar con el nombre del día en mayúsculas o
// con la inicial en mayúscula (Lunes, Martes, etc.)
// La respuesta será "Lunes es laborable", "Sábado es festivo"
// Si responde otra cosa: "No conozco ese día de la semana"

let diaSemana = prompt("Dime el nombre del día de la semana");

// lunes, Lunes, LUNES, luNES
diaSemana = diaSemana.toLocaleLowerCase();

switch (diaSemana) {
  case "lunes":
  case "martes":
  case "miercoles":
  case "miércoles":
  case "jueves":
  case "viernes":
    alert(diaSemana + " es laborable");
    break;
  case "sabado":
  case "sábado":
  case "domingo":
    alert(diaSemana + " es festivo");
    break;
  default:
    alert("No conozco ese día de la semana");
}
