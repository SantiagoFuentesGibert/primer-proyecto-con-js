//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
// Creando listado de productos HTML
const creandoProductos = async() => {
    const response = await fetch("./data.json");
    const productosCreados = await response.json();
    productosCreados.forEach(producto => {
        const {img, nombre, precio, button, id} = producto;
        const article = document.createElement("article");
        article.innerHTML = `<article class="productos__fondo productos__borde productos__letrasOrdenadas animaciones">
                                <img src="${img}" class="productos__img"></img>
                                <div class="productos__info">
                                    <h3 class="p productos__letras">${nombre}</h3>
                                    <span class="productos__precios">$${precio}</span>
                                    <button class="agregar-carrito" data-id="${id}">${button}</button>
                                </div>
                            </article>
                            `;
        listaProductos.append(article);
    })
}
creandoProductos();
let productosCarrito = [];

// Local storage Carrito
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('productosCarrito')){
        productosCarrito = JSON.parse(localStorage.getItem('productosCarrito'))
        carritoHTML()
    }
})

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
    if(e.target.classList.contains('carritoEliminar')) {
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

    // Verifica si un elemento ya existe en el carrito para actualizar la cantidad
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
                            <a href="#" class="carritoEliminar" data-id="${id}"> X </a>
                        </td>
                        `;
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
        
        // Renderizado de localStorage en el carrito
        localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito))
    });
}

// Elimina los productos del tbody
function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}