const productos = [
    {
        id: 1,
        nombre: "iPhone 13",
        precio: 500,
        cantidad: 1
    }
    ,
    {
        id: 2,
        nombre: "iPhone 13 Pro",
        precio: 600,
        cantidad: 1
    }
    ,
    {
        id: 3,
        nombre: "iPhone 13 Pro Max",
        precio: 700,
        cantidad: 1
    }
    ,
    {
        id: 4,
        nombre: "iPhone 14",
        precio: 800,
        cantidad: 1
    }
    ,
    {
        id: 5,
        nombre: "iPhone 14 Pro",
        precio: 900,
        cantidad: 1
    }
    ,
    {
        id: 6,
        nombre: "iPhone 14 Pro Max",
        precio: 1000,
        cantidad: 1
    }
    ,
    {
        id: 7,
        nombre: "iPhone 15",
        precio: 1100,
        cantidad: 1
    }
    ,
    {
        id: 8,
        nombre: "iPhone 15 Pro",
        precio: 1200,
        cantidad: 1
    }
    ,
    {
        id: 9,
        nombre: "iPhone 15 Pro Max",
        precio: 1300,
        cantidad: 1
    }
    ,
    {
        id: 10,
        nombre: "iPhone 16",
        precio: 1400,
        cantidad: 1
    }
]

let carrito = []

let productCard = document.getElementById("product-card")

function mostrarProductos(arrayProductos) {
    arrayProductos.forEach(producto => {
        const cards = document.createElement("div")
        cards.className = "cards-productos"
        cards.innerHTML = `<img src="https://tienda.personal.com.ar/images/320/webp/Iphone13pro_Graphite_min_4a8b32a8ff.png" alt="${producto.nombre}">
                            <h3>${producto.nombre}</h3>
                            <span class="precio">$${producto.precio}</span>
                            <button class="add-cart" id="${producto.id}">Comprar</button>`
        productCard.appendChild(cards)
    })
    agregarAlCarrito()
}

mostrarProductos(productos)

function agregarAlCarrito() {
    const botones = document.querySelectorAll(".add-cart")
    botones.forEach(boton => {
        boton.onclick = (e) => {
            const productoId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productoId)
            if (carrito){
                carrito = JSON.parse(localStorage.getItem("carrito"))
            } else {
                carrito = []
            }
            carrito.push(selectedProduct)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
    })
}

