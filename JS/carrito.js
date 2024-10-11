let carritoCompra = document.getElementById("carrito-content")

let carritoCargado = localStorage.getItem("carrito")
carritoCargado = JSON.parse(carritoCargado)

function mostrarCarrito(itemCarrito) {
    itemCarrito.forEach(producto => {
        const cardCompra = document.createElement("div")
        cardCompra.innerHTML = `<h3>${producto.nombre}</h3>
                                <p>$${producto.precio}</p>
                                <button class="eliminar-item" id="${producto.id}">Eliminar</button>`
        carritoCompra.appendChild(cardCompra)
    })
}

mostrarCarrito(carritoCargado)

// eliminar item del carrito
function eliminarItem() {
    const botonesEliminar = document.querySelectorAll(".eliminar-item")
    botonesEliminar.forEach(boton => {
        boton.onclick = (e) => {
            const productoId = e.currentTarget.id
            const index = carritoCargado.findIndex(producto => producto.id == productoId)
            carritoCargado.splice(index, 1)
            localStorage.setItem("carrito", JSON.stringify(carritoCargado))
            location.reload()
            console.log(carritoCargado)
        }
    })
}

