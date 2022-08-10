import { carritoIndex } from "./components/carrito/carritoIndex.js";
import productosController from "./controllers/productosController.js";

export const mostrarProductos = async () => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  const productos = await productosController()

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img} class="imagenesJs">
                        <span class="card-title">${producto.nombre}</span>
                        <a id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p class="precioCards">$${producto.precio}</p>
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      carritoIndex(producto.id);
    });
  });
};

