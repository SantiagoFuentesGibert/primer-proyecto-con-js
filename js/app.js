import { productos } from "./stock";

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor")
    productos.forEach( producto => {
        const article = document.createElement("article")
        article.innerHTML = `<img src="${producto.img}"
                            <div>
                            <h5>${producto.nombre}</h5>
                            <p>${producto.precio}</p>
                            <button id=boton${producto.id}>Agregar al carrito</button>
                            </div>
                            `
    })
}