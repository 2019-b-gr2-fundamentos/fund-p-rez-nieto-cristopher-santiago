var arregloDeNumeros = [1, 2, 3, 4, 5, 9, 6, 7, 8, 9, 10];
// Acceder 
// Necesito: Indice 
console.log(arregloDeNumeros[6]); // 7
// Añadir al final
// Necesito: El elemento a añadirse 
arregloDeNumeros.push(11);
// Borrar el final
arregloDeNumeros.pop();
// Añadir en un indice
//Necesito: Indice 
//          Elemento
arregloDeNumeros.splice(1, 0, 1.1);
console.log(arregloDeNumeros);
// o Borrar
arregloDeNumeros.splice(7, 1);
console.log(arregloDeNumeros);
// BUSCAR EL INDICE DE UN ELEMENTO
arregloDeNumeros.indexOf(5); // 5
arregloDeNumeros.indexOf(7); //
console.log(arregloDeNumeros.indexOf(5));
console.log(arregloDeNumeros.indexOf(7));
console.log(arregloDeNumeros.indexOf(9));
arregloDeNumeros[0] = 999;
console.log(arregloDeNumeros);
/*
Pseudocodigo para utilizar el splice que añade

1) crear el arreglo
2) recibir el indice donde se quiere colocar el elemento
3) indicar que no se quiere borrar ningun elemento
4) indicar el elemento que se quiere agregar





*/ 
