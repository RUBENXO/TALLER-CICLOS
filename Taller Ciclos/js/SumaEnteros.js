/*Escriba un programa que pida 2 números enteros positivos y calcule la suma total de todos
los enteros desde el primer número hasta el segundo.
Ejemplo: si el usuario digita 1 y 5, se deberá imprimir la suma de todos los números
comprendidos en ese rango: 1+2+3+4+5 =15*/

let pollo = parseInt(prompt("Ingrese el primer número entero positivo: "))
let frito = parseInt(prompt("Ingrese el segundo número entero positivo: "))

let pollofrito = 0

for (let i = pollo; i <= frito; i++) {
    pollofrito += i;
}

alert("La suma de todos los enteros entre " + pollo + " y " + frito + " es: " + pollofrito)
