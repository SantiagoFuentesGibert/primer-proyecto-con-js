//let opcion = parseInt(prompt("Eliga el numero del producto: 1-mother, 2-ram, 3-cooler y 4-procesador"));
class Producto {
    constructor(nombre,precio,codigo){
        this.nombre = nombre
        this.precio = precio
        this.codigo = codigo
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
let precioFinal = document.getElementById("productos");
let li = document.createElement("li");
/* switch (opcion) {
    case 1:
        let btn1 = document.getElementById("1")
        li.innerHTML = `<h2>Producto: ${mother.nombre}</h2>
                        <b>$${mother.precio}</b>
                        `;
        precioFinal.append (li);
        break;

    case 2:
        li.innerHTML = `<h2>Producto: ${ram.nombre}</h2>
                        <b>$${ram.precio}</b>
                        `;
        precioFinal.append (li);
        break;

    case 3:
        li.innerHTML = `<h2>Producto: ${cooler.nombre}</h2>
                        <b>$${cooler.precio}</b>
                        `;
        precioFinal.append (li);
        break;
    
    case 4:
        li.innerHTML = `<h2>Producto: ${procesador.nombre}</h2>
                        <b>$${procesador.precio}</b>
                        `;
        precioFinal.append (li);
        break;
    
    default:
        break;
}  */

//Mother
const btnMother = () => {
    li.innerHTML = `<h2>Producto: ${mother.nombre}</h2>
                    <b>$${mother.precio}</b>
                    `;
    precioFinal.append (li);
}

let boton1 = document.getElementById(1);
    boton1.addEventListener("click", btnMother);

//Ram
const btnRam = () => {
    li.innerHTML = `<h2>Producto: ${ram.nombre}</h2>
                    <b>$${ram.precio}</b>
                    `;
    precioFinal.append (li);
}

let boton2 = document.getElementById(2);
    boton2.addEventListener("click", btnRam);

//Cooler
const btnCooler = () => {
    li.innerHTML = `<h2>Producto: ${cooler.nombre}</h2>
                    <b>$${cooler.precio}</b>
                    `;
    precioFinal.append (li);
}

    let boton3 = document.getElementById(3);
    boton3.addEventListener("click", btnCooler);

//Procesador
const btnProcesador = () => {
    li.innerHTML = `<h2>Producto: ${procesador.nombre}</h2>
                    <b>$${procesador.precio}</b>
                    `;
    precioFinal.append (li);
}

    let boton4 = document.getElementById(4);
    boton4.addEventListener("click", btnProcesador);








// Carrito de compras

/* const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');

registrarEventListeners();
function registrarEventListeners() {
    listaProductos.addEventListener('click', agregarProducto);
}

function agregarProducto(e) {
    console.log(e.target.classList)
} */