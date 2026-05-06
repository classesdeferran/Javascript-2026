let p_rojo = document.getElementById("p_rojo")
console.log(p_rojo);
p_rojo.style.color = "red"

let p_verde = document.getElementById("p_verde")
p_verde.style.color = "white"
p_verde.style.backgroundColor = "darkgreen"
p_verde.style.fontSize = "2rem"
p_verde.textContent = "Viva el verde"

let h1 = document.querySelector('h1')
h1.style.fontFamily = "Arial"

function cambiarAAzul() {
    let p_azul = document.querySelector('#p_azul')
p_azul.style.backgroundColor = "darkblue"
p_azul.style.color = "white"
p_azul.style.padding = "1rem"    
}


let p = document.querySelector('p')
p.style.borderBottom = "2px solid black"

let h2 = document.querySelectorAll('h2')
console.log(h2);
for (let i = 0; i<h2.length; i++) {
    h2[i].style.color = "steelblue"
}
// h2.style.color = "steelblue"

