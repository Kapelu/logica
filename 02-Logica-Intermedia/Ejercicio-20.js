/*
Programa una función que pueda sumar todos los valores de un array. Por ejemplo, miFuncion([1, 2, 3, 4]) devolverá 10.
*/

const sumarArray = (arr = undefined) => {
  if (arr === undefined) return "No ingresaste un arreglo de números" 

  if (!(arr instanceof Array))
    return "El valor que ingresaste no es un arreglo" 

  if (arr.length === 0) return "El arreglo está vacío" 

  let suma = 0 
  for (let num of arr) {
    if (typeof num !== "number") return `El valor "${num}" no es un número` 
    suma += num 
  }

  return suma 
} 

module.exports = { sumarArray } 

/*Explicación:
1. La función `sumarArray` toma un argumento `arr` que se espera sea un array de números.
2. Se realizan varias validaciones:
    - Si `arr` es `undefined`, se retorna un mensaje indicando que no se ingresó un arreglo de números.
    - Si `arr` no es una instancia de `Array`, se retorna un mensaje indicando que el valor ingresado no es un arreglo.
    - Si el arreglo está vacío, se retorna un mensaje indicando que el arreglo está vacío.
3. Se inicializa una variable `suma` en 0 para acumular la suma de los números.
4. Se itera sobre cada elemento del arreglo para verificar que todos sean números. Si se encuentra un elemento que no es un número, se retorna un mensaje indicando cuál valor no es un número.
5. Si el elemento es un número, se suma a la variable `suma`.
6. Finalmente, se retorna el valor acumulado en `suma`, que es la suma de todos los números en el arreglo.  
*/