let carritoCompra = document.getElementById("carrito-content")

let carritoCargado = localStorage.getItem("carrito") || "[]"
carritoCargado = JSON.parse(carritoCargado)

function mostrarCarrito(itemCarrito) {
    itemCarrito.forEach(product => {
        const cardCompra = document.createElement("div")
        cardCompra.innerHTML = `<img src="${product.imagen}" alt="${product.nombre}">
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
        location.reload()
    }
})

// total del carrito

const totalCompra = carritoCargado.reduce((acc, item) => acc + item.precio, 0)
const mostrarTotal = document.createElement("div")
mostrarTotal.innerHTML = `<h3>Total: $${totalCompra}</h3>
                        <button class="compra-final" id="compra-final">Finalizar compra</button>
                        `
carritoCompra.appendChild(mostrarTotal)

const finalCompra = document.getElementById("compra-final")
.addEventListener("click", () => {
    window.location.href = "../pages/formulario.html"
    localStorage.removeItem("carrito")
})