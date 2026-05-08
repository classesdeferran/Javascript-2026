import {
  corregirNombreCompuesto,
  verificarLongitud,
} from "./29_corregir_nombre.js";

// Obtener el formulario por el nombre
// console.log(document.forms);

const errorNombre = document.getElementById("errorNombre");
const formularioSencillo = document.forms["formularioSencillo"];
const errorApellido = document.getElementById("errorApellido");
const menorEdad = document.getElementById("menorEdad");

formularioSencillo.addEventListener("submit", (event) => {
  event.preventDefault();
  menorEdad.textContent = "";
  // limpiar los mensajes anteriores
  errorNombre.textContent = "";
  let todoOK = true;

  // Obtener los datos de los inputs
  let nombre = formularioSencillo["nombre"].value.trim();
  if (!verificarLongitud(nombre)) {
    errorNombre.textContent = "Nombre incorrecto";
    todoOK = false;
  }
  nombre = corregirNombreCompuesto(nombre);
//   console.log(nombre);

  let apellido = formularioSencillo["apellido"].value.trim();
  if (!verificarLongitud(apellido)) {
    errorNombre.textContent = "Apellido incorrecto";
    todoOK = false;
  }
  apellido = corregirNombreCompuesto(apellido);

  let email = formularioSencillo["email"].value;
  let password = formularioSencillo["password"].value;

  let fechaNacimiento = formularioSencillo["fechaNacimiento"].value;
  //   console.log(fechaNacimiento);
  fechaNacimiento = fechaNacimiento.split("-");
  //   console.log(fechaNacimiento);
  const bornYear = fechaNacimiento[0];
  const bornMonth = fechaNacimiento[1];
  const bornDay = fechaNacimiento[2];
  //   console.log(bornYear, bornMonth, bornDay);

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();
  // console.log(todayYear, todayMonth, todayDay);

  let edad = todayYear - bornYear;
  console.log(edad);
  if (bornMonth > todayMonth) {
    edad--;
    todoOK = false;
  } else if (bornMonth == todayMonth && bornDay > todayDay) {
    edad--;
    todoOK = false;
  }
  if (edad < 18) {
    menorEdad.textContent = `Solo tienes ${edad}`;
  }
  //   console.log(edad);
  if (!todoOK) {
    console.log("Función finalizada por datos inválidos");
    return;
  }

  const dialog = document.getElementById('dialog')
  let datos = `<p>Nombre Completo: <span>${nombre} ${apellido}</span></p>`
  datos += `<p>Email: <span>${email}</span></p>`
  datos += `<p>Edad: <span>${edad} años<span></p>`

  document.getElementById('datosIntroducidos').innerHTML = datos
  dialog.showModal()
  formularioSencillo.reset()

});
