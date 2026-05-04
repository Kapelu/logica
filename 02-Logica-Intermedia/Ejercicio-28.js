/*
Programa una función que permita aplanar un array de arrays en un solo array. Por ejemplo, si el array dado es [[1, 2], [3, 4], [5, 6]], la función debe retornar [1, 2, 3, 4, 5, 6].
*/
function aplanarArray(arr) {
  const resultado = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      resultado.push(arr[i][j])
    }
  }

  return resultado
}

module.exports = { aplanarArray };

/*
Explicación:
1. La función `aplanarArray` toma un array de arrays como argumento.
2. Se inicializa un array `resultado` para almacenar los elementos aplanados.
3. Se utilizan dos bucles `for` anidados para recorrer cada sub-array dentro del array principal. El primer bucle itera sobre cada sub-array, y el segundo bucle itera sobre los elementos dentro de cada sub-array.
4. Durante cada iteración del segundo bucle, se agrega el elemento actual al array `resultado` utilizando el método `push`.
5. Finalmente, la función retorna el array con todos los elementos aplanados en un solo nivel.
*/