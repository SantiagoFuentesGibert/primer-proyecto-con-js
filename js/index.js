//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let productosCarrito = [];
// Local storage Carrito
let saveProductosLocalStorage = [];
let productosLocalStorage = [];

registrarEventListeners();
function registrarEventListeners() {
    // Agregas un producto usando "Agregar al carrito"
    listaProductos.addEventListener('click', agregarProducto);
    // Elimina productos del carrito
    carrito.addEventListener('click', eliminarProducto);
    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        productosCarrito = []; // Reseteo del array
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El carrito se vacío correctamente',
            showConfirmButton: false,
            timer: 1000
        })
        limpiarHTML(); // Elminamos todo el HTML
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

    //RESOLVER PROBLEMA DE LOCAL STORAGE Y CARRITO CON ACTUALIZACION DE CANTIDAD
    //Guardando en el Local Storage 
    saveProductosLocalStorage.push(infoProducto);
    localStorage.setItem("infoProducto", JSON.stringify(saveProductosLocalStorage));

    productosLocalStorage = JSON.parse(localStorage.getItem("infoProducto"));

    // Verifica si un elemento ya existe en el carrito
    const existeProducto = productosCarrito.some( producto => producto.id === infoProducto.id);
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