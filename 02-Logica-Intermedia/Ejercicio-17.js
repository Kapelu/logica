/*
Programar una función que verifique si un número es primo. Un número primo es aquel que solo es divisible por sí mismo y por 1. Por ejemplo, el número 7 es primo porque solo es divisible por 1 y por 7, mientras que el número 8 no es primo porque es divisible por 1, 2, 4 y 8. La función debe retornar true si el número es primo y false si no lo es.
*/

const esPrimo = (num) => {
    if (typeof num !== "number") return "Error: debe ser un número";
    if (num < 2) return false; // Los números menores que 2 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si es divisible por algún número, no es primo
    }
    return true; // Si no es divisible por ningún número, es primo
};

module.exports = { esPrimo };

/* Explicación:
Usa función flecha para definir esPrimo que recibe un parámetro num
Primero valida si num es un número usando typeof
Si no es un número, retorna un mensaje de error
Si num es menor que 2, retorna false porque los números menores que 2 no son primos
Usa un bucle for para iterar desde 2 hasta la raíz cuadrada de num  para verificar si num es divisible por algún número
Si num es divisible por algún número, retorna false porque no es primo
Si el bucle termina sin encontrar ningún divisor, retorna true porque num es primo
El condicional valida que num sea un número usando typeof

# Obtener el factorial de un numero de forma recursiva:
=======================================================

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
*/  