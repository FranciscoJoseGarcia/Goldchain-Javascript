import { actualizarCarrito } from "./components/carrito/actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { actualizarProductosCarrito, obtenerCarritoStorage } from "./components/carrito/carritoIndex.js";


document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("/productos.html")) {
        mostrarProductos();
    }

    if (localStorage.getItem("carrito")) {
    
        const carritoStorage = obtenerCarritoStorage();
        actualizarProductosCarrito(carritoStorage);
        actualizarCarrito(carritoStorage);
    }
})