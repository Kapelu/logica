/*
Programa una función que cuente cuantas veces aparece un elemento específico en un array. La función debe retornar el número de veces que el elemento aparece en el array. Por ejemplo, si el array es [1, 2, 3, 2, 4] y el elemento a contar es 2, la función debe retornar 2. 
*/

function contarElementos(arr) {
  if (arr === undefined) {
    return 'No ingresaste un arreglo de números'
  }

  if (!Array.isArray(arr)) {
    return 'El valor que ingresaste no es un arreglo'
  }

  return new Set(arr).size
}

module.exports = { contarElementos };

/*
Explicación:
1. La función `contarElementos` toma un array como argumento.
2. Se verifica si el argumento es `undefined` y se retorna un mensaje de error si es así.
3. Se verifica si el argumento no es un array utilizando `Array.isArray()`, y se retorna un mensaje de error si no es un array.
4. Se utiliza `new Set(arr)` para crear un conjunto a partir del array, lo que elimina los elementos duplicados, y luego se obtiene la cantidad de elementos únicos utilizando `.size`.
5. Finalmente, la función retorna el número de elementos únicos en el array.    
*/