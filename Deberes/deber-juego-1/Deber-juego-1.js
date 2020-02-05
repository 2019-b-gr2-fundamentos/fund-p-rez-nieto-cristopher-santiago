"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pregunta_mover_ficha_1 = require("C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/Deberes/deber-juego-1/funciones-mover-fichas/pregunta-mover-ficha");
var _04_clase_19_matrices_1 = require("../../mi carpeta/03-funciones/04-clase-19-matrices");
var matrizCorrecta = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 'x']
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
function generarJuego() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            primeraFila = [-1, -1, -1, -1];
            do {
                nuevoNumero = Math.floor(Math.random() * 15);
                if (nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]) {
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
                nuevoNumero = Math.floor(Math.random() * 15);
                if (nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3] ||
                    nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3]) {
                    j = j;
                }
                else {
                    matrizJuego[1].push(nuevoNumero);
                    numeroActual = nuevoNumero;
                    segundaFila[j] = numeroActual;
                    segundaFila = segundaFila;
                    j = j + 1;
                }
                ;
            } while (j < tamañoDeCadaFila);
            //console.log(matrizJuego);
            j = 0;
            terceraFila = [-1, -1, -1, -1];
            do {
                nuevoNumero = Math.floor(Math.random() * 15);
                if (nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3] ||
                    nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3] ||
                    nuevoNumero == terceraFila[0] || nuevoNumero == terceraFila[1] || nuevoNumero == terceraFila[2] || nuevoNumero == terceraFila[3]) {
                    j = j;
                }
                else {
                    matrizJuego[2].push(nuevoNumero);
                    numeroActual = nuevoNumero;
                    terceraFila[j] = numeroActual;
                    terceraFila = terceraFila;
                    j = j + 1;
                }
                ;
            } while (j < tamañoDeCadaFila);
            //console.log(matrizJuego);
            j = 0;
            cuartaFila = [-1, -1, -1, ''];
            do {
                nuevoNumero = Math.floor(Math.random() * 15);
                if (nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3] ||
                    nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3] ||
                    nuevoNumero == terceraFila[0] || nuevoNumero == terceraFila[1] || nuevoNumero == terceraFila[2] || nuevoNumero == terceraFila[3] ||
                    nuevoNumero == cuartaFila[0] || nuevoNumero == terceraFila[1]) {
                    j = j;
                }
                else {
                    matrizJuego[3].push(nuevoNumero);
                    numeroActual = nuevoNumero;
                    cuartaFila[j] = numeroActual;
                    cuartaFila = cuartaFila;
                    j = j + 1;
                }
                ;
            } while (j < 4);
            matrizJuego[3].splice(3, 1, 'x');
            //console.log(matrizJuego);
            console.log('#  ', '1  ', '2  ', '3  ', '4  ');
            console.log('A', matrizJuego[0]);
            console.log('B', matrizJuego[1]);
            console.log('C', matrizJuego[2]);
            console.log('D', matrizJuego[3]);
            return [2 /*return*/, matrizJuego];
        });
    });
}
;
function main() {
    generarJuego().then().catch();
}
;
main();
var auxD4 = matrizJuego[3][3];
var auxD3 = matrizJuego[3][2];
var auxC4 = matrizJuego[2][3];
var auxA1 = matrizJuego[0][0];
var auxA2 = matrizJuego[0][1];
var auxA3 = matrizJuego[0][2];
var auxA4 = matrizJuego[0][3];
var auxB1 = matrizJuego[1][0];
var auxB2 = matrizJuego[1][1];
var auxB3 = matrizJuego[1][2];
var auxB4 = matrizJuego[1][3];
var auxC1 = matrizJuego[2][0];
var auxC2 = matrizJuego[2][1];
var auxC3 = matrizJuego[2][2];
var auxD1 = matrizJuego[3][0];
var auxD2 = matrizJuego[3][1];
var espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][3]);
function vovlerACargarLosAuxiliares() {
    auxD4 = matrizJuego[3][3];
    auxD3 = matrizJuego[3][2];
    auxC4 = matrizJuego[2][3];
    auxA1 = matrizJuego[0][0];
    auxA2 = matrizJuego[0][1];
    auxA3 = matrizJuego[0][2];
    auxA4 = matrizJuego[0][3];
    auxB1 = matrizJuego[1][0];
    auxB2 = matrizJuego[1][1];
    auxB3 = matrizJuego[1][2];
    auxB4 = matrizJuego[1][3];
    auxC1 = matrizJuego[2][0];
    auxC2 = matrizJuego[2][1];
    auxC3 = matrizJuego[2][2];
    auxD1 = matrizJuego[3][0];
    auxD2 = matrizJuego[3][1];
    return auxA1 && auxA2 && auxA3 && auxA4 && auxB1 && auxB2 && auxB3 && auxB4 && auxC1 && auxC2 && auxC3 && auxC4 && auxD1 && auxD2 && auxD3 && auxD4;
}
;
function moverFicha() {
    return __awaiter(this, void 0, void 0, function () {
        var fichaAMover, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales, sonIguales;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, pregunta_mover_ficha_1.preguntarMoverFicha().then().catch()];
                case 1:
                    fichaAMover = _a.sent();
                    if (fichaAMover == 'D3' || fichaAMover == 'd3' && espacioEnBlanco == 3) {
                        matrizJuego[3][3] = auxD3;
                        matrizJuego[3][2] = auxD4;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D3' || fichaAMover == 'd3' && espacioEnBlanco == 2) {
                        matrizJuego[2][2] = auxD3;
                        matrizJuego[3][2] = auxC3;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D3' || fichaAMover == 'd3' && espacioEnBlanco == 1) {
                        matrizJuego[3][1] = auxD3;
                        matrizJuego[3][2] = auxD2;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D2' || fichaAMover == 'd2' && espacioEnBlanco == 0) {
                        matrizJuego[3][0] = auxD2;
                        matrizJuego[3][1] = auxD1;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D2' || fichaAMover == 'd2' && espacioEnBlanco == 1) {
                        matrizJuego[2][1] = auxD2;
                        matrizJuego[3][1] = auxC1;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D2' || fichaAMover == 'd2' && espacioEnBlanco == 2) {
                        matrizJuego[3][2] = auxD2;
                        matrizJuego[3][1] = auxD3;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D1' || fichaAMover == 'd1' && espacioEnBlanco == 0) {
                        matrizJuego[2][0] = auxD1;
                        matrizJuego[3][0] = auxC1;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D1' || fichaAMover == 'd1' && espacioEnBlanco == 1) {
                        matrizJuego[3][1] = auxD1;
                        matrizJuego[3][0] = auxD2;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D4' || fichaAMover == 'd4' && espacioEnBlanco == 3) {
                        matrizJuego[2][3] = auxD4;
                        matrizJuego[3][3] = auxC4;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'D4' || fichaAMover == 'd4' && espacioEnBlanco == 2) {
                        matrizJuego[3][2] = auxD4;
                        matrizJuego[3][3] = auxD3;
                        espacioEnBlanco = matrizJuego[3].indexOf(matrizJuego[3][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C1' || fichaAMover == 'c1' && matrizJuego[3][0] == 'x') {
                        matrizJuego[3][0] = auxC1;
                        matrizJuego[2][0] = auxD1;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C1' || fichaAMover == 'c1' && matrizJuego[1][0] == 'x') {
                        matrizJuego[1][0] = auxC1;
                        matrizJuego[2][0] = auxB1;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C1' || fichaAMover == 'c1' && espacioEnBlanco == 1) {
                        matrizJuego[2][1] = auxC1;
                        matrizJuego[2][0] = auxC2;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C2' || fichaAMover == 'c2' && espacioEnBlanco == 0) {
                        matrizJuego[2][0] = auxC2;
                        matrizJuego[2][1] = auxC1;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C2' || fichaAMover == 'c2' && espacioEnBlanco == 2) {
                        matrizJuego[2][2] = auxC2;
                        matrizJuego[2][1] = auxC3;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C2' || fichaAMover == 'c2' && matrizJuego[1][1] == 'x') {
                        matrizJuego[1][1] = auxC2;
                        matrizJuego[2][1] = auxB2;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C2' || fichaAMover == 'c2' && matrizJuego[3][1] == 'x') {
                        matrizJuego[3][1] = auxC2;
                        matrizJuego[2][1] = auxD2;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C3' || fichaAMover == 'c3' && espacioEnBlanco == 1) {
                        matrizJuego[2][1] = auxC3;
                        matrizJuego[2][2] = auxC2;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C3' || fichaAMover == 'c3' && matrizJuego[2][3] == 'x') {
                        matrizJuego[2][3] = auxC3;
                        matrizJuego[2][2] = auxC4;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C3' || fichaAMover == 'c3' && matrizJuego[1][2] == 'x') {
                        matrizJuego[1][2] = auxC3;
                        matrizJuego[2][2] = auxB3;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C3' || fichaAMover == 'c3' && matrizJuego[3][2] == 'x') {
                        matrizJuego[3][2] = auxC3;
                        matrizJuego[2][2] = auxD3;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C4' || fichaAMover == 'c4' && matrizJuego[1][3] == 'x') {
                        matrizJuego[1][3] = auxC4;
                        matrizJuego[2][3] = auxB4;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C4' || fichaAMover == 'c4' && matrizJuego[3][3] == 'x') {
                        matrizJuego[3][3] = auxC4;
                        matrizJuego[2][3] = auxD4;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'C4' || fichaAMover == 'c4' && espacioEnBlanco == 2) {
                        matrizJuego[2][2] = auxC4;
                        matrizJuego[2][3] = auxC3;
                        espacioEnBlanco = matrizJuego[2].indexOf(matrizJuego[2][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B1' || fichaAMover == 'b1' && matrizJuego[0][0] == 'x') {
                        matrizJuego[0][0] = auxB1;
                        matrizJuego[1][0] = auxA1;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B1' || fichaAMover == 'b1' && matrizJuego[2][0] == 'x') {
                        matrizJuego[2][0] = auxB1;
                        matrizJuego[1][0] = auxC1;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B1' || fichaAMover == 'b1' && espacioEnBlanco == 1) {
                        matrizJuego[1][1] = auxB1;
                        matrizJuego[1][0] = auxB2;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B2' || fichaAMover == 'b2' && espacioEnBlanco == 0) {
                        matrizJuego[1][0] = auxB2;
                        matrizJuego[1][1] = auxB1;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B2' || fichaAMover == 'B2' && espacioEnBlanco == 2) {
                        matrizJuego[1][2] = auxB2;
                        matrizJuego[1][1] = auxB3;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B2' || fichaAMover == 'b2' && matrizJuego[0][1] == 'x') {
                        matrizJuego[0][1] = auxB2;
                        matrizJuego[1][1] = auxA2;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B2' || fichaAMover == 'b2' && matrizJuego[2][1] == 'x') {
                        matrizJuego[2][1] = auxB2;
                        matrizJuego[1][1] = auxC2;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B3' || fichaAMover == 'b3' && espacioEnBlanco == 1) {
                        matrizJuego[1][1] = auxB3;
                        matrizJuego[1][2] = auxB2;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B3' || fichaAMover == 'b3' && espacioEnBlanco == 3) {
                        matrizJuego[1][3] = auxB3;
                        matrizJuego[1][2] = auxB4;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B3' || fichaAMover == 'b3' && matrizJuego[0][2] == 'x') {
                        matrizJuego[0][2] = auxB3;
                        matrizJuego[1][2] = auxA3;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B3' || fichaAMover == 'b3' && matrizJuego[2][2] == 'x') {
                        matrizJuego[2][2] = auxB3;
                        matrizJuego[1][2] = auxC3;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B4' || fichaAMover == 'b4' && matrizJuego[0][3] == 'x') {
                        matrizJuego[0][3] = auxB4;
                        matrizJuego[1][3] = auxA4;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B4' || fichaAMover == 'b4' && matrizJuego[2][3] == 'x') {
                        matrizJuego[2][3] = auxB4;
                        matrizJuego[1][3] = auxC4;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'B4' || fichaAMover == 'b4' && espacioEnBlanco == 2) {
                        matrizJuego[1][2] = auxB4;
                        matrizJuego[1][3] = auxB3;
                        espacioEnBlanco = matrizJuego[1].indexOf(matrizJuego[1][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A4' || fichaAMover == 'a4' && espacioEnBlanco == 3) {
                        matrizJuego[1][3] = auxA4;
                        matrizJuego[0][3] = auxB4;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A4' || fichaAMover == 'a4' && espacioEnBlanco == 2) {
                        matrizJuego[0][2] = auxA4;
                        matrizJuego[0][3] = auxA3;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][3]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A3' || fichaAMover == 'a3' && espacioEnBlanco == 3) {
                        matrizJuego[0][3] = auxA3;
                        matrizJuego[0][2] = auxA4;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A3' || fichaAMover == 'a3' && espacioEnBlanco == 2) {
                        matrizJuego[1][2] = auxA3;
                        matrizJuego[0][2] = auxB3;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A3' || fichaAMover == 'a3' && espacioEnBlanco == 1) {
                        matrizJuego[0][1] = auxA3;
                        matrizJuego[0][2] = auxA2;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][2]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A2' || fichaAMover == 'a2' && espacioEnBlanco == 2) {
                        matrizJuego[0][2] = auxA2;
                        matrizJuego[0][1] = auxA3;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A2' || fichaAMover == 'a2' && espacioEnBlanco == 1) {
                        matrizJuego[1][1] = auxA2;
                        matrizJuego[0][1] = auxB2;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A2' || fichaAMover == 'a2' && espacioEnBlanco == 0) {
                        matrizJuego[0][0] = auxA2;
                        matrizJuego[0][1] = auxA1;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][1]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A1' || fichaAMover == 'a1' && espacioEnBlanco == 0) {
                        matrizJuego[1][0] = auxA1;
                        matrizJuego[0][0] = auxB1;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 'A1' || fichaAMover == 'a1' && espacioEnBlanco == 1) {
                        matrizJuego[0][1] = auxA1;
                        matrizJuego[0][0] = auxA2;
                        espacioEnBlanco = matrizJuego[0].indexOf(matrizJuego[0][0]);
                        console.log('#  ', '1  ', '2  ', '3  ', '4  ');
                        console.log('A', matrizJuego[0]);
                        console.log('B', matrizJuego[1]);
                        console.log('C', matrizJuego[2]);
                        console.log('D', matrizJuego[3]);
                        vovlerACargarLosAuxiliares();
                        sonIguales = _04_clase_19_matrices_1.compararMatriz(matrizJuego, matrizCorrecta);
                        if (sonIguales) {
                            console.log('¡HA GANADO!');
                        }
                        else {
                            moverFicha().then().catch();
                        }
                    }
                    else if (fichaAMover == 's' || fichaAMover == 'salir' || fichaAMover == 'SALIR') {
                        console.log('GRACIAS POR JUGAR, ADIOS :D');
                    }
                    else {
                        console.log('Seleccione un movimiento valido');
                        vovlerACargarLosAuxiliares();
                        moverFicha().then().catch();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function main2() {
    moverFicha().then().catch();
}
main2();
