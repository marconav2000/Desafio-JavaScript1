const precio = 400000
let total = 0
let cantidad = 0


precioProducto = document.querySelector("#precio-producto");
precioProducto.innerHTML = precio

cantidadProducto = document.querySelector("#cantidad")
cantidadProducto.innerHTML = cantidad

totalValor = document.querySelector("#valor-total")

btnSumar = document.querySelector("#sumar")
btnRestar = document.querySelector("#restar")


btnSumar.addEventListener('click', () => {
    cantidad += 1
    cantidadProducto.innerHTML = cantidad
    total = precio * cantidad
    totalValor.innerHTML = total
}
)

btnRestar.addEventListener('click', () => {    

if (cantidad < 1) {
    cantidad = 0
} 
else {
    cantidad -= 1
}

cantidadProducto.innerHTML = cantidad
total = precio * cantidad
totalValor.innerHTML = total
}
)