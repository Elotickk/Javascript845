///Desafio Simulador interactivo ////
//Productos con sus propiedades////
class Productos{
    constructor(nombre,precio,stock){
        this.nombre = nombre.toUpperCase()
        this.precio = precio
        this.stock = stock
    }
    imprimir(objeto){
        for(const clave in objeto){
            alert(`${clave} : ${objeto[clave]}`)
        }
    }
}
const producto1 = new Productos("Televisor",140000,1)
const producto2 = new Productos("Celular",45000,2)
const producto3 = new Productos("Parlante",50000,3)
const producto4 = new Productos("Playstation 5",150000,3)

for(const prop in producto1){
    console.log(producto1[prop])
}
// Saludo al Cliente //
const nombrecliente = prompt("ingrese su nombre")
alert("hola " + nombrecliente + " bienvenido a Fravegas")

// Pregunta que producto va querer llevar dandole precio //
let producto = parseInt(prompt(`Que producto va a querer llevar? opcion 1 ${producto1.nombre} $ ${producto1.precio} opcion 2 ${producto2.nombre} $ ${producto2.precio} opcion 3 ${producto3.nombre} $ ${producto3.precio} opcion 4 ${producto4.nombre} $ ${producto4.precio}`))

while(producto !=1 && producto != 2 && producto != 3 && producto !=4) {
    alert("el producto no existe")
    producto = parseInt(prompt(`Que producto va a querer llevar? opcion 1 ${producto1.nombre} $ ${producto1.precio} opcion 2 ${producto2.nombre} $ ${producto2.precio} opcion 3 ${producto3.nombre} $ ${producto3.precio} opcion 4 ${producto4.nombre} $ ${producto4.precio}`))
}
if(producto == 1 ){
    precio = producto1.precio
} else if (producto == 2) {
    precio = producto2.precio
} else if (producto == 3) {
    precio = producto3.precio
} else if (producto == 4) {
    precio = producto4.precio
}


/// Precio del producto////
alert (`El precio del producto es ${precio}`)

// Como lo va a querer pagar //
let productoPrecio=0
let meses
let banco
let interes
let precioConInteres
let cuota
ingresarDatos()

function ingresarDatos (){
    let productoPrecio = precio
    let meses = parseInt(prompt("Ingresa la cantidad de cuotas"))
    let banco = prompt("Ingresa de que banco es su tarjeta")
    let interes = calcInteres(banco)
    let precioConInteres = productoConInteres(productoPrecio,interes)
    let cuota = calcCuota(precioConInteres,meses)
    mostrar(precioConInteres,banco,interes,cuota,meses)
}
function productoConInteres (productoPrecio,interes){
    let precioconinteres = productoPrecio * (1 + interes/100)
    return precioconinteres.toFixed(2)
}

function calcCuota (precioConInteres,meses){
    cuota = precioConInteres / meses
    return cuota.toFixed(2)
}

function calcInteres (banco){
    switch (banco){
        case "visa":
            return 10
        case "mastercard":
            return 10
        case "naranja":
            return 15
        default:
            return 0
    }
}

// Muestra el interes de la tarjeta,cuantas cuota lo lleva y el precio con su respectivo interes //
function mostrar(precioConInteres,banco,interes,cuota,meses){
    alert(`el precio del producto es de $${precioConInteres} con la tarjeta del banco ${banco} tiene un interes de ${interes}% a pagar en cuotas de $${cuota} durante ${meses} meses`)
}
