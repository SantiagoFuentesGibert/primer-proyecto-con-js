//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let productosCarrito = [];

registrarEventListeners();
function registrarEventListeners() {
    // Agregas un producto usando "Agregar al carrito"
    listaProductos.addEventListener('click', agregarProducto);
    // Elimina productos del carrito
    carrito.addEventListener('click', eliminarProducto);
    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        productosCarrito = [];
        limpiarHTML();
    })
}

//Funciones
function agregarProducto(e) {
    if( e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

function eliminarProducto(e) {
    console.log(e.target.classList);
    if(e.target.classList.contains('borrarProducto')) {
        const productoId = e.target.getAttribute('data-id');
        productosCarrito = productosCarrito.filter( producto => producto.id !== productoId);
        carritoHTML();
    }
}

// Lee el contenido del HTML que clickeamos y extrae la info
function leerDatosProducto(producto) {
    // Crear un objeto con el contenido del producto actual
    const infoProducto = {
        nombre: producto.querySelector('h3').textContent,
        precio: producto.querySelector('span').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    // Verifica si un elemento ya existe en el carrito
    const existeProducto = productosCarrito.some( producto => producto.id === infoProducto.id);
    console.log(existeProducto);
    if(existeProducto) {
        // Actualizamos la cantidad
        const productoMas = productosCarrito.map( producto => {
            if(producto.id === infoProducto.id){
                producto.cantidad++;
                return producto;
            }else {
                // Agregamos el elemento al arreglo del carrito
                return producto;
            }
        } );
        productosCarrito = [...productoMas];
    }else {
        productosCarrito = [...productosCarrito, infoProducto];
    }
    carritoHTML();
}

// Muestra el Carrito de compras en el HTML
function carritoHTML() {
    // Limpia el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    productosCarrito.forEach(producto => {
        const {nombre, precio, cantidad, id} = producto;
        const row = document.createElement('tr')
        row.innerHTML = `
                        <td>${nombre}</td>
                        <td>${precio}</td>
                        <td>${cantidad}</td>
                        <td>
                            <a href="#" class="borrarProducto" data-id="${id}"> X </a>
                        </td>
                        `;
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los productos del tbody
function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}