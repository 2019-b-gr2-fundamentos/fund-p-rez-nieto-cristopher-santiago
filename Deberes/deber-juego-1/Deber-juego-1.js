//import * as prompts from 'C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts'
//let numero1 = -1;let numero2 = -1;let numero3 = -1;let numero4 = -1; //let numero5 = -1;let numero6 = -1;let numero7 = -1;let numero8 = -1;let numero9 = -1;let numero10 = -1;let numero11 = -1;let numero12 = -1;let numero13 = -1;let numero14 = -1;let numero15 = -1;let numero16 = -1;
var matrizCorrecta = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, '']
];
var nuevoNumero = 0;
var i = 0;
var j = 0;
var numeroActual = -1;
var tamañoDeCadaFila = 4;
var matrizJuego = [
    [],
    [],
    [],
    []
];
var primeraFila = [];
var segundaFila = [];
var terceraFila = [];
var cuartaFila = [];
function generarPrimeraFila() {
    primeraFila = [-1, -1, -1, -1];
    do {
        var numerosAComparar = numeroActual || primeraFila[0] || primeraFila[1] || primeraFila[2] || primeraFila[3];
        nuevoNumero = Math.floor(Math.random() * 15);
        if (nuevoNumero == numerosAComparar) {
            j = j;
        }
        else {
            matrizJuego[0].push(nuevoNumero);
            numeroActual = nuevoNumero;
            primeraFila[j] = numeroActual;
            primeraFila = primeraFila;
            j = j + 1;
        }
        ;
    } while (j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    //console.log(primeraFila)
    //console.log(numeroActual);
    j = 0;
    segundaFila = [-1, -1, -1, -1];
    do {
        var numerosAComparar = numeroActual || primeraFila[0] || primeraFila[1] || primeraFila[2] || primeraFila[3]
            || segundaFila[0] || segundaFila[1] || segundaFila[2] || segundaFila[3];
        nuevoNumero = Math.floor(Math.random() * 15);
        if (nuevoNumero == numerosAComparar) {
            j = j;
        }
        else {
            matrizJuego[1].push(nuevoNumero);
            numeroActual = nuevoNumero;
            segundaFila[j] = numeroActual;
            j = j + 1;
        }
        ;
    } while (j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    j = 0;
    terceraFila = [-1, -1, -1, -1];
    do {
        var numerosAComparar = numeroActual || primeraFila[0] || primeraFila[1] || primeraFila[2] || primeraFila[3]
            || segundaFila[0] || segundaFila[1] || segundaFila[2] || segundaFila[3]
            || terceraFila[0] || terceraFila[1] || terceraFila[2] || terceraFila[3];
        nuevoNumero = Math.floor(Math.random() * 15);
        if (nuevoNumero == numerosAComparar) {
            j = j;
        }
        else {
            matrizJuego[2].push(nuevoNumero);
            numeroActual = nuevoNumero;
            terceraFila[j] = numeroActual;
            j = j + 1;
        }
        ;
    } while (j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    j = 0;
    cuartaFila = [-1, -1, -1, -1];
    do {
        var numerosAComparar = numeroActual || primeraFila[0] || primeraFila[1] || primeraFila[2] || primeraFila[3]
            || segundaFila[0] || segundaFila[1] || segundaFila[2] || segundaFila[3]
            || terceraFila[0] || terceraFila[1] || terceraFila[2] || terceraFila[3]
            || cuartaFila[0] || cuartaFila[1] || cuartaFila[2] || cuartaFila[3];
        nuevoNumero = Math.floor(Math.random() * 15);
        if (nuevoNumero == numerosAComparar) {
            j = j;
        }
        else {
            matrizJuego[3].push(nuevoNumero);
            numeroActual = nuevoNumero;
            cuartaFila[j] = numeroActual;
            j = j + 1;
        }
        ;
    } while (j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    console.log(primeraFila);
    console.log(segundaFila);
    console.log(terceraFila);
    console.log(cuartaFila);
}
;
function main() {
    generarPrimeraFila();
    //generarSegundaFila();
}
;
main();
