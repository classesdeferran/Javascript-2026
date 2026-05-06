let p_rojo = document.getElementById("p_rojo");
console.log(p_rojo);
p_rojo.style.color = "red";

let p_verde = document.getElementById("p_verde");
p_verde.style.color = "white";
p_verde.style.backgroundColor = "darkgreen";
p_verde.style.fontSize = "2rem";
p_verde.textContent = "Viva el verde";

let h1 = document.querySelector("h1");
h1.style.fontFamily = "Arial";
// onclick = "cambiarColortexto()"
// FORMA 2 de asociar eventos a la página
// h1.onclick() = function() {}
h1.onclick = () => {
  h1.style.color = "orange";
};

// FORMA 3 (y la mejor, normalmente)
const pListener = document.querySelector("#pListener");
const textoOriginal = pListener.textContent;
// Listeners ("escuchadores")
pListener.addEventListener("dbclick", () => {
  pListener.textContent += ", pero esto viene de Javascript";
});
pListener.addEventListener("click", () => {
  pListener.textContent = textoOriginal;
});

function cambiarAAzul() {
  let p_azul = document.querySelector("#p_azul");
  p_azul.style.backgroundColor = "darkblue";
  p_azul.style.color = "white";
  p_azul.style.padding = "1rem";
}

let p = document.querySelector("p");
p.style.borderBottom = "2px solid black";

let h2 = document.querySelectorAll("h2");
console.log(h2);
for (let i = 0; i < h2.length; i++) {
  h2[i].style.color = "steelblue";
}
// h2.style.color = "steelblue"


const pSinClase = document.getElementById('pSinClase')
pSinClase.addEventListener('click', (event) => {
    // console.log(event);
    pSinClase.classList.add('pClase')
    pSinClase.innerHTML = "Este texto viene de <span style='font-weight: bold'>Javascript</span>"
})

pSinClase.addEventListener('mouseover', () => {
    pSinClase.classList.remove('pClase')
    pSinClase.textContent = "Volvemos al principio"
})

const pSinClase2 = document.querySelector('#pSinClase2')
pSinClase2.addEventListener('click', () => {
    pSinClase2.classList.toggle('pClase')
})