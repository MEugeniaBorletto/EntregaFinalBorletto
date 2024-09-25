const cardContenedor = document.getElementById("contenedorDeCartas");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

fetch("../productos.json")
.then((response) => response.json())
.then((data) => {
    data.forEach((item) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card"  >
    <img src= ${item.imageUrl} alt="Imagen del producto">
    <h2>${item.Nombre}</h2>
    <p>${item.descripcion}</p>
    <p>$${item.precio}</p>
    <button class = "nuevoBtn" >Agregar al carrito</button>
    </div>
    `;
    cardContenedor.appendChild(card);

    const botonAdd = card.querySelector(".nuevoBtn");
    botonAdd.addEventListener("click", () => {
        agregarAlCarrito(item);
    });
    });
});

function agregarAlCarrito(item) {
carrito.push(item);
localStorage.setItem("carrito", JSON.stringify(carrito));
Toastify({
    text: `${item.Nombre} fue agregado al carrito`,
    duration: 3000,
}).showToast();
}

document.getElementById("mostarCarro").addEventListener("click", () => {
carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoContainer = document.getElementById("carritoContainer");

carritoContainer.innerHTML = "";

carrito.forEach((item) => {
    const card = document.createElement("div");

    card.innerHTML = `
    <div class="card" >
    <img src= ${item.imageUrl} alt="Imagen del producto">
    <h2>${item.Nombre}</h2>
    <p>${item.descripcion}</p>
    <p>$${item.precio}</p>
    <button class = "boton-eliminar">Eliminar del carrito</button>
    </div> `;

    carritoContainer.appendChild(card);

    const botonRem = card.querySelector(".boton-eliminar");
    botonRem.addEventListener("click", () => {
    eliminarDelCarrito(item.id);
    });
});
});

function eliminarDelCarrito(id) {
const index = carrito.findIndex((item) => item.id === id);
if (index !== -1) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("carritoContainer").innerHTML = "";
    document.getElementById("mostarCarro").click();

    Toastify({
    text: `Se ha eliminado correctamente`,
    duration: 3000,
    }).showToast();
}
}
document
.getElementById("buttonConfirm")
.addEventListener("click", mostrarTotalCompra);

function mostrarTotalCompra() {
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = 0;

carrito.forEach((item) => {
    total += item.precio;
});
Swal.fire({
    title: `Compra Realizada el total es de $ ${total}`,
    text: "Gracias por comprar en Indumentaria JS",
    icon: "success",
  }); // Sumad del importe total

};