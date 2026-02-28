/*
Programa una función que encuentre el número menor en un array de números, pe. miFuncion([4, 2, 8, 6]) devolverá 2. 
*/
const menorEnArray = (arr = undefined) => {
  if (arr === undefined) return "No ingresaste un arreglo de números";

  if (!(arr instanceof Array))
    return "El valor que ingresaste no es un arreglo";

  if (arr.length === 0) return "El arreglo está vacío";

  for (let num of arr) {
    if (typeof num !== "number") return `El valor "${num}" no es un número`;
  }

  return Math.min(...arr);
};

module.exports = { menorEnArray };

/*
Explicación:
1. La función `menorEnArray` toma un argumento `arr` que se espera sea un array de números.
2. Se realizan varias validaciones:
    - Si `arr` es `undefined`, se retorna un mensaje indicando que no se ingresó un arreglo de números.
    - Si `arr` no es una instancia de `Array`, se retorna un mensaje indicando que el valor ingresado no es un arreglo.
    - Si el arreglo está vacío, se retorna un mensaje indicando que el arreglo está vacío.
    - Se itera sobre cada elemento del arreglo para verificar que todos sean números. Si se encuentra un elemento que no es un número, se retorna un mensaje indicando cuál valor no es un número.
3. Si todas las validaciones pasan, se utiliza `Math.min(...arr)` para encontrar y retornar el número menor en el arreglo.  
*/  