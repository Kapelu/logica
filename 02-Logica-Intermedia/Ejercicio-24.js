/*
Programa una función que ordene un array sin usar sort(). Por ejemplo ordenarArray([7,5,2,4,3,9]) devolverá [2,3,4,5,7,9]
*/
function ordenarArray(arr) {
  const resultado = [...arr]

  for (let i = 0; i < resultado.length; i++) {
    for (let j = 0; j < resultado.length - 1; j++) {
      if (resultado[j] > resultado[j + 1]) {
        const temp = resultado[j]
        resultado[j] = resultado[j + 1]
        resultado[j + 1] = temp
      }
    }
  }

  return resultado
}

module.exports = { ordenarArray };

/*
Explicación:
1. La función `ordenarArray` toma un array como argumento.
2. Se obtiene la longitud del array y se utiliza un bucle `for` para iterar a través de los elementos del array.
3. Dentro del primer bucle, se utiliza otro bucle `for` para comparar cada elemento con el siguiente.
4. Si el elemento actual es mayor que el siguiente, se intercambian los elementos utilizando una variable temporal `temp`.
5. Este proceso se repite hasta que el array esté completamente ordenado.
6. Finalmente, la función retorna el array ordenado.
*/