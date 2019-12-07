// 1) crear un arreglo de 5 elementos
// 2) cada elemento va a ser un 1 o un 0
// ej: [0, 0, 1, 1, 0]
// 3) exista al menos un elemento "1"
// ej: [0, 0, 0 ,0, 0] NO ES VALIDO
// ej: [0, 0, 0, 0, 1] ES VALIDO



Math.floor(Math.random() * 2) // -> genera un numero random de 0 a 1 // [0 , 2[
Math.floor(Math.random() * 11) // -> genera un numero random de 0 a 10 // [0 , 11[





const numeroDeJugadores = 5;
const indicePrimerElemento = 0;
const indiceSegundoElemento = 1;
const indiceTercerElemento = 2;
const indiceCuartoElemento = 3;
const indiceQuintoElemento = 4;

for (const arreglo = []; arreglo.push(Math.floor(Math.random() * 2)) <= numeroDeJugadores;){
    if (arreglo[indicePrimerElemento] == 0 && arreglo[indiceSegundoElemento] == 0 && arreglo[indiceTercerElemento] == 0 && arreglo[indiceCuartoElemento] == 0 && arreglo[indiceQuintoElemento] == 0 ){
        for (const arreglo = []; arreglo.push(Math.floor(Math.random() * 2)) <= numeroDeJugadores;){
            console.log(arreglo);
        }
    }else{
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



/*
1) crear un erreglo de 5 elementos
2) cada elemento del arreglo debe ser un numero aleatorio entre 0 y 1
3) si todos los elementos del arreglo son 0, el arreglo no sirve
4) redefinir un nuevo arreglo

PSEUDOCODIGO DEL PROFE

1) Definir el numero de jugadores
2) Asignar randomicamente si tiene o no un floron
3) Veriicar si al menos existe un floron
4) Adivinar donde esta el floron

*/

const numberOfPlayers = 5;
const firstPlayerIndex = 0;
const secondPlayerIndex = 1;
const thirdPlayerIndex = 2;
const fourthPlayerIndex = 3;
const fifthPlayerIndex = 4;
const cualquierIndice = firstPlayerIndex || secondPlayerIndex || thirdPlayerIndex || fourthPlayerIndex || fifthPlayerIndex;

//for (const array = []; arreglo.push(Math.floor(Math.random() * arreglo[first])))


