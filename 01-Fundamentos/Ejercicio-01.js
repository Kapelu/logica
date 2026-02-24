/*
Programa una función que determine si un número es par o impar.
Por ejemplo:
miFuncion(4) devolverá "Par"
miFuncion(3) devolverá "Impar"
*/

const esParOImpar = (num) => {
    if (typeof num !== "number") return "Error: debe ser un número";
    return num % 2 === 0 ? "Es número Par" : "Es número Impar";
};


module.exports = { esParOImpar };


/* Explicaion:
Usa funcion flecha para definir esParOImpar que recibe un parámetro num
Primero valida si num es un número usando typeof
Si no es un número, retorna un mensaje de error
Si es un número, usa el operador módulo (%) para determinar si es par o impar
num % 2 === 0 verifica si el residuo de dividir num entre 2 es 0 (número par)
Si es par, retorna "Es número Par", si no, retorna "Es número Impar"
El condicional valida que num sea un número usando typeof

Desarrollo en pseudocódigo
Proceso EsParOImpar
	Definir num Como Real
	Escribir 'Ingrese un n�mero:'
	Leer num

	Si num MOD 2=0 Entonces
		Escribir 'Es n�mero Par'
	SiNo
		Escribir 'Es n�mero Impar'
	FinSi

FinProceso
*/

