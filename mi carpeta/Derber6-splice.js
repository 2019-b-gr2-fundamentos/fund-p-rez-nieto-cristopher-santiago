/*
1) Definir un arreglo
2) que operacion se quiere hacer
2.1) Si desea añadir
    2.1.1) Definir el elemento que se quiere añadir
    2.1.2) Definir el indice donde desea añadir el elemento
    2.1.3) añadir elelemento
2.2) Si desea borrar
    2.2.1) Mencione el indice del elemento que desea borrar
    2.2.2) borrar el elemento
3) imprimir el nuevo arreglo

*/
var arreglo = [1, 2, 3, 4];
var n = arreglo.length; //4
console.log(arreglo);
// añadir elemento
var elementoAAñadir = 1.1;
var indiceDondeSeInsertaElElemento = 1;
arreglo.push(elementoAAñadir);
var nuevoElemento = arreglo[n];
arreglo[n] = arreglo[n - 1];
arreglo[n - 1] = arreglo[n - 2];
arreglo[n - 2] = arreglo[n - 3];
//en caso de aumentar elementos al arreglo, aumentar una línea más justo aquí Ejemplo arreglo[n - 3] = arreglo[n - 4]
arreglo[indiceDondeSeInsertaElElemento] = nuevoElemento;
console.log(arreglo);
// borrar elemento 
var indiceElementoAEliminar = 2;
//en caso de aumentar elementos al arreglo, aumentar una línea más justo aquí Ejemplo arreglo[n - 4] = arreglo[n - 3]
arreglo[n - 2] = arreglo[n - 1];
arreglo[n - 1] = arreglo[n];
arreglo[n] = arreglo[indiceElementoAEliminar];
arreglo.pop();
console.log(arreglo);
