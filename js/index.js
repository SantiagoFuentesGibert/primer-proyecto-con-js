/*let entrada = prompt ("Ingresar una letra");
let salida = entrada + " " + "ingresada";
alert(salida)

for (let i = 0; i < 5 ; i++) {
    console.log("Hola, buenas tardes", i);
}*/

/* let numero = parseInt(prompt("Ingrese un numero"))

for (let i = 0; i < 5; i++) {
    let result = numero + i;
    let mensaje = `${numero} + ${i} = ${result}`;
    alert(mensaje);
} */

/* let opcion = prompt("Eliga el numero del producto: 1-mother, 2-ram, 3-cooler y 4-procesador");
const iva = 0.21 
let mother = 5000 + iva;
let ram = 2000 + iva;
let cooler = 500 + iva;
let procesador = 10000 + iva;
if (opcion === "1") {
    mother
    console.log(mother);
}else if (opcion === "2") {
    ram
    console.log(ram);
}else if (opcion === "3") {
    cooler
    console.log(cooler);
}else {
    procesador
    console.log(procesador);
}
let mensaje = opcion 
alert(mensaje) */

let opcion = parseInt(prompt("Eliga el numero del producto: 1-mother, 2-ram, 3-cooler y 4-procesador"));
const suma = (a,b) => a + b
let mother = 5000;
let ram = 2000;
let cooler = 500;
let procesador = 10000;
//const iva = 0.21
const iva = x => x * 0.21
let nuevoMother = suma (mother, iva(mother));
let nuevoRam = suma (ram, iva(ram));
let nuevoCooler = suma (cooler, iva(cooler));
let nuevoProcesador = suma (procesador, iva(procesador));
switch (opcion) {
    case 1:
        let precioFinal = "Precio final" + " " + nuevoMother; 
        alert(precioFinal)
        break;
    
    case 2:
        let precioFinal2 = "Precio final" + " " + nuevoRam; 
        alert(precioFinal2)
        break;

    case 3:
        let precioFinal3 = "Precio final" + " " + nuevoCooler; 
        alert(precioFinal3)
        break;
    
    case 4:
        let precioFinal4 = "Precio final" + " " + nuevoProcesador; 
        alert(precioFinal4)
        break;
    
    default:
        break;
}