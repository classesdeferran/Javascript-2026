// Formas de obtener datos de un formulario
const nombre = document.getElementById('nombre')

nombre.addEventListener("change", () => {
    console.log(nombre.value.length);
    let nombreCorregido = nombre.value.trim()
    if (nombreCorregido.length < 2) alert(`Has puesto ${nombreCorregido.length} caracteres en el nombre`)
    
})
