//import * as prompts from 'C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts'
var cualuquierNumero = Math.floor(Math.random() * 14); // -> genera un numero random de 0 a 14 // [0 , 14[
var matrizCorrecta = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, '']
];
function generarNumeroRandom() {
    var numero = Math.floor(Math.random() * 15);
    return numero;
}
;
function generarJuego() {
    var nuevoNumero = 0;
    var tamañoDeCadaFila = 4;
    var matrizJuego = [
        [],
        [],
        [],
        []
    ];
    var numero1 = -1;
    var numero2 = -1;
    var numero3 = -1;
    var numero4 = -1;
    var numero5 = -1;
    var numero6 = -1;
    var numero7 = -1;
    var numero8 = -1;
    var numero9 = -1;
    var numero10 = -1;
    var numero11 = -1;
    var numero12 = -1;
    var numero13 = -1;
    var numero14 = -1;
    var numero15 = -1;
    var numero16 = -1;
    var i = 0;
    var j = 0;
    var numeroAhorita = -1;
    do {
        nuevoNumero = generarNumeroRandom();
        if (j == tamañoDeCadaFila) {
            i = i + 1;
            j = 0;
        }
        else {
            if (nuevoNumero != numeroAhorita && numero1 && numero2 && numero3 && numero4 && numero5 && numero6 && numero7 && numero8 && numero9 && numero10 && numero11 && numero12 && numero13 && numero14 && numero15 && numero16) {
                matrizJuego[i].push(nuevoNumero);
                numeroAhorita = nuevoNumero;
                if (j = 0, i = 0) {
                    numero1 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 1, i = 0) {
                    numero2 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 2, i = 0) {
                    numero3 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 3, i = 0) {
                    numero4 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 0, i = 1) {
                    numero5 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 1, i = 1) {
                    numero6 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 2, i = 1) {
                    numero7 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 3, i = 1) {
                    numero8 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 0, i = 2) {
                    numero9 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 1, i = 2) {
                    numero10 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 2, i = 2) {
                    numero11 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 3, i = 2) {
                    numero12 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 0, i = 3) {
                    numero13 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 1, i = 3) {
                    numero14 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 2, i = 3) {
                    numero15 = nuevoNumero;
                    j = j + 1;
                }
                else if (j = 3, i = 3) {
                    numero16 = nuevoNumero;
                    j = j + 1;
                }
                ;
            }
            else {
                j = j;
            }
            ;
        }
        ;
    } while (i < tamañoDeCadaFila);
    matrizJuego[3].splice(3, 1, '');
    console.log(matrizJuego);
}
;
function main() {
    generarJuego();
    //generarNumeroRandom();
}
;
main();
