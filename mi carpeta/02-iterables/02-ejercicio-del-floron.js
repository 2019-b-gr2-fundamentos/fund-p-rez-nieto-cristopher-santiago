// 1) crear un arreglo de 5 elementos
var arregloss = [];
// 2) cada elemento va a ser un 1 o un 0
// ej: [0, 0, 1, 1, 0]
// 3) exista al menos un elemento "1"
// ej: [0, 0, 0 ,0, 0] NO ES VALIDO
// ej: [0, 0, 0, 0, 1] ES VALIDO
Math.floor(Math.random() * 2); // -> genera un numero random de 0 a 1 // [0 , 2[
Math.floor(Math.random() * 11); // -> genera un numero random de 0 a 10 // [0 , 11[
var numeroDeJugadores = 5;
var indicePrimerElemento = 0;
var indiceSegundoElemento = 1;
var indiceTercerElemento = 2;
var indiceCuartoElemento = 3;
var indiceQuintoElemento = 4;
for (var arreglo = []; arreglo.push(Math.floor(Math.random() * 2)) <= numeroDeJugadores;) {
    if (arreglo[indicePrimerElemento] == 0 && arreglo[indiceSegundoElemento] == 0 && arreglo[indiceTercerElemento] == 0 && arreglo[indiceCuartoElemento] == 0 && arreglo[indiceQuintoElemento] == 0) {
        console.log('Intente de nuevo');
    }
    else {
        console.log(arreglo);
    }
}
/*
const arreglo = [200, 2, 3];
const indicePrimerElemento = 0;
const indiceSegundoElemento = 1;
const indiceTercerElemento = 2;
arreglo[indicePrimerElemento];
arreglo[indiceSegundoElemento];
arreglo[indiceTercerElemento];
console.log(arreglo[indicePrimerElemento]);
*/ 
