// for
// 1) declarar una variable
// 2) condicion (expresion)
// 3) incrementar o disminuir la variable
for (var numeroExDeMiCrush = 7; numeroExDeMiCrush != 0; numeroExDeMiCrush--) {
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}
for (var numeroExDeMiCrushEscandalizados = 0; numeroExDeMiCrushEscandalizados < 7; numeroExDeMiCrushEscandalizados++) {
    console.log('ES CAN DA LOs!', numeroExDeMiCrushEscandalizados);
}
for (var numeroExDeMiCrushEscandalizados = 0; numeroExDeMiCrushEscandalizados <= 6; numeroExDeMiCrushEscandalizados++) {
    console.log('ES CAN DA LOS!', numeroExDeMiCrushEscandalizados);
}
// <=6 == <7
// >0 == >=1
// ARREGLOS
// 1 Elemento ( Variable const numero = 1)
// UN ARREGLO ES un conjunto del MISMO ELEMENTO ( [1, 2, 3, 4, 5] )
// Conjunto de diferentes elementos (dependiendo el lenguaje)
// ( [1, "abc", true] )
var arregloNumeros = [1, 2, 3, 4, 5];
// cuando ponemos el let, Reasignamos
// arregloNumeros = [1,2,3,4,5,6]; NO
arregloNumeros.push(6); //FUNCION
console.log('arregloNumeros', arregloNumeros);
// push ayuda al arreglo a agregar un elemento al final
arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros);
// pop para quitar el ultimo valor
//Accerder a cada elemento del arreglo mediante el indice
var indiceElementoUno = 0;
arregloNumeros[indiceElementoUno]; // 1
arregloNumeros[0]; // 1
var indiceElementoCinco = 4;
arregloNumeros[indiceElementoCinco]; // 5
arregloNumeros[4]; // 5
//Arreglo
// 1) Elementos
// 2) Indices (0 index based) -> POSICION de los elementos del arreglo, empiezan con 0 casi en cualquier lenguaje 
// 3) LONGITUD -> numero de elementos
console.log(arregloNumeros.length);
// FOR
// 1) let tamanio = arregloNumeros.length // 5
// 2) tamanio > 0
// 3) --
//acceder al elemento 5
// 1)indice
// [1, 2, 3, 4, 5]
//  0  1  2  3  4 
//      INDICES 
console.log(arregloNumeros[indiceElementoCinco]); // 5
