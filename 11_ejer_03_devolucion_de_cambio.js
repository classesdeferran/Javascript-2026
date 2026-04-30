// DEVOLUCIÓN DE CAMBIO EN TIENDA
//===============================

// Una tienda te ha encargado que gestiones el cambio que debes devolver
// a los clientes después de pagar una compra.

// La tienda tiene el criterio de devolver la menor cantidad de
// billetes y/o monedas posible.

// No trabajamos con billetes de 500€ ni de 200€

// Ejemplo 1 : hay que devolver 404€
// 8 * 50€ = 400 + 4 * 1€ <-- NO!
// 4 * 100€ + 2 * 2€ <-- SÍ!

let precioArticulo = 100;
let pagoCliente = 135.26;
let cambio = pagoCliente - precioArticulo
const cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
const textoCambio = []

if (precioArticulo > pagoCliente) {
  console.log(`Faltan ${precioArticulo - pagoCliente}€`);
} else if (precioArticulo === pagoCliente) {
  console.log(`Muchas gracias por su compra`);
} else {
    console.log(`Hay que devolver ${cambio}`);
    for (let i = 0; i < cash.length; i++) {
        cambio = Math.round(cambio * 100) / 100
        if (cambio >= cash[i]) {            
            console.log(cambio);
            let cantidad = parseInt(cambio / cash[i])
            console.log(cantidad);
            // cambio = cambio - (cantidad * cash[i])
            cambio = cambio % cash[i]
            console.log(cambio);
            textoCambio.push(`${cantidad} de ${cash[i]}`)
            console.log(textoCambio);
        }
    }
    console.log(`Devolver al cliente: ${textoCambio.join(', ')}`);
}
