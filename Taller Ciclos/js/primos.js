/*Crear un programa que pida al usuario un número entero positivo y muestre por pantalla
si el número es primo o no. Para este ejercicio deberá usar ciclo for y condicional if.
Para resolver este ejercicio consulte que es un número primo.*/

let num = parseInt(prompt("Ingrese un número entero positivo: "))
let hijodediomedez = true
for (let i = 2; i * i <= num; i++) {
  if (i <= 2) {
    hijodediomedez  = num > 1
  } else if (i * i === num) {
    hijodediomedez  = false
  } else if (num / i === Math.floor(num / i)) {
    hijodediomedez  = false
  }
}
if (hijodediomedez ) {
  alert(num + " Es un número primo bien ahí cole")
} else {
  alert(num + " No es un número primo pues atembado(a)")
}


