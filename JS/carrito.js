let carritoCompra = document.getElementById("carrito-content")

let carritoCargado = localStorage.getItem("carrito") || "[]"
carritoCargado = JSON.parse(carritoCargado)

function mostrarCarrito(itemCarrito) {
    itemCarrito.forEach(product => {
        const cardCompra = document.createElement("div")
        cardCompra.className = "cards-compras"
        cardCompra.innerHTML = `<img class="img-compra" src="${product.imagen}" alt="${product.nombre}">
                                <h3>${product.nombre}</h3>
                                <p>$${product.precio}</p>
                                <button class="eliminar-item" id="${product.id}">Eliminar</button>`
        carritoCompra.appendChild(cardCompra)
    })
}

mostrarCarrito(carritoCargado)

// eliminar item del carrito

const eliminarItem = document.querySelectorAll(".eliminar-item")
eliminarItem.forEach(boton => {
    boton.onclick = (e) => {
        const itemId = e.currentTarget.id
        carritoCargado = carritoCargado.filter(item => item.id != itemId)
        localStorage.setItem("carrito", JSON.stringify(carritoCargado))
        Toastify({
            text: "Producto eliminado del carrito",
            duration: 1500,
            destination: "pages/carrito.html",
            newWindow: true,
            close: false,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #e5e5e7, #f5f5f7)",
                color: "black",
                borderRadius: "10px"
            },
            }).showToast();
        setTimeout(() => {
                location.reload()
        }, 1000)
    }
})

// total del carrito

const totalCompra = carritoCargado.reduce((acc, item) => acc + item.precio, 0)
const mostrarTotal = document.createElement("div")
mostrarTotal.className = "total-compra"
mostrarTotal.innerHTML = `<h3>Total: $${totalCompra}</h3>
                        <button class="compra-final" id="compra-final">Finalizar compra</button>
                        `
carritoCompra.appendChild(mostrarTotal)

const finalCompra = document.getElementById("compra-final")
.addEventListener("click", () => {
    if (carritoCargado.length === 0) {
        Toastify({
            text: "Tu carrito aún está vacío. Ve a la tienda",
            duration: 1500,
            destination: "../index.html",
            newWindow: true,
            close: false,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #e5e5e7, #f5f5f7 )",
              color: "black",
              borderRadius: "10px"
            },
          }).showToast();
        return
    }
    
    window.location.href = "../pages/formulario.html"
    localStorage.removeItem("carrito")
})