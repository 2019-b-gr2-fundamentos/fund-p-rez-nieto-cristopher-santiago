"use strict";
exports.__esModule = true;
var Deber_juego_1_1 = require("../Deber-juego-1");
var matrizJuego = Deber_juego_1_1.generarJuego();
function moverFichaD4() {
    console.log('#  ', '1  ', '2  ', '3  ', '4  ');
    console.log('A', matrizJuego[0]);
    console.log('B', matrizJuego[1]);
    console.log('C', matrizJuego[2]);
    console.log('D', matrizJuego[3]);
}
exports.moverFichaD4 = moverFichaD4;
function main() {
    moverFichaD4();
}
;
main();
