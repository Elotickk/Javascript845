//Peluqueria//
const nombre =prompt("ingrese su nombre")
let precio = 0
alert("hola " + nombre + " bienvenido a la peluqueria de Don Mateo")

let corte = prompt("Ingrese que tipo de corte quiere (opcion 1:Corte de Hombre, Opcion 2:Corte de Mujer")

while(corte !=1 && corte != 2) {
    alert("el corte no existe")
    corte = prompt("Ingrese que tipo de corte quiere (opcion 1:Corte de Hombre, Opcion 2:Corte de Mujer")
}
if(corte == 1 ){
    precio = 500
}else {
    precio = 900
}
alert ("El precio del corte es "+ precio)

let dinero = prompt("Con cuanto va a pagar")
while(dinero < precio) {
    alert("El pago es insuficiente")
    dinero = prompt("Con cuanto va a pagar")
}
let vuelto = dinero - precio
alert("Su pago es de "+ precio + " y su cambio es "+ vuelto)
