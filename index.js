/*let entrada = prompt ("Ingresar una letra");
let salida = entrada + " " + "ingresada";
alert(salida)

for (let i = 0; i < 5 ; i++) {
    console.log("Hola, buenas tardes", i);
}*/

let numero = parseInt(prompt("Ingrese un numero"))

for (let i = 0; i < 5; i++) {
    let result = numero + i;
    let mensaje = `${numero} + ${i} = ${result}`;
    alert(mensaje);
}