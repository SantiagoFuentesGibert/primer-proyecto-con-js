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

/* let opcion = parseInt(prompt("Eliga el numero del producto: 1-mother, 2-ram, 3-cooler y 4-procesador"));
const suma = (a,b) => a + b
let mother = 5000;
let ram = 2000;
let cooler = 500;
let procesador = 10000;
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
} */

/* let opcion = parseInt(prompt("Eliga el numero del producto: 1-mother, 2-ram, 3-cooler y 4-procesador"));
const suma = (a,b) => a + b
let mother = 5000;
let ram = 2000;
let cooler = 500;
let procesador = 10000; 
const iva = x => x * 0.21
const productos = [
    {id: 1, nombre: "mother", precio:5000},
    {id: 2, nombre: "ram", precio:2000},
    {id: 3, nombre: "cooler", precio:500},
    {id: 4, nombre: "procesador", precio:10000}
];
let nuevoMother = suma (productos[0].precio, iva(productos[0].precio));
let nuevoRam = suma (productos[1].precio, iva(productos[1].precio));
let nuevoCooler = suma (productos[2].precio, iva(productos[2].precio));
let nuevoProcesador = suma (productos[3].precio, iva(productos[3].precio));
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
} */

class Producto {
    constructor(nombre,precio,codigo){
        this.nombre = nombre
        this.precio = precio
    }
    calcularIva(){
        this.precio = this.precio * 1.21
    }
}
const mother = new Producto("Mohther Z690 Aorus", 56000,1);
const ram = new Producto("Ram Corsair", 25000,2);
const cooler = new Producto("Cooler 240mm", 10000,3);
const procesador = new Producto("Procesador i7", 80000,4);
mother.calcularIva ();
ram.calcularIva ();
cooler.calcularIva ();
procesador.calcularIva ();
const productos = [];
productos.push(mother)
productos.push(ram)
productos.push(cooler)
productos.push(procesador)
let opcion = parseInt(prompt("Eliga el numero del producto: 1-mother, 2-ram, 3-cooler y 4-procesador"));
switch (opcion) {
    case 1:
        let precioFinal = "Precio final de Mother Z690 + IVA es =" + " " + (mother.precio);
        alert(precioFinal)
        break;
    
    case 2:
        let precioFinal2 = "Precio final de Ram Corsair + IVA es =" + " " + (ram.precio);
        alert(precioFinal2)
        break;

    case 3:
        let precioFinal3 = "Precio final de Cooler 240mm + IVA es =" + " " + (cooler.precio);
        alert(precioFinal3)
        break;
    
    case 4:
        let precioFinal4 = "Precio final de Procesador i7 + IVA es =" + " " + (procesador.precio); 
        alert(precioFinal4)
        break;
    
    default:
        break;
}