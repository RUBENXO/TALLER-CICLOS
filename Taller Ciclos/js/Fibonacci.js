/*Generar la serie de Fibonacci haciendo uso del ciclo for. Para ello se debe pedir al usuario
un número y generar la serie hasta el valor que sea menor o igual al digitado.
Serie de Fibonacci = 1 1 2 3 5 8 13 21 34...*/

let chinoynacho = parseInt(prompt("Ingrese un número límite para la serie de Fibonacci: "))
let a = 1, b = 0
let tegocalderon = 0

for (let i = 0; a <= chinoynacho; i++) {
  console.log(a)
  tegocalderon = a
  a = a + b
  b = tegocalderon
}


