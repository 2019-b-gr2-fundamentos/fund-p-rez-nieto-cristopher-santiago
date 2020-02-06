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
var prompts = require("C:/Users/USREPS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts");
var _02_leer_archivo_1 = require("../../mi carpeta/07-archivos/02-leer-archivo");
var _03_escribir_archivo_1 = require("../../mi carpeta/07-archivos/03-escribir-archivo");
var id = 0;
var contenidoArchivo = _02_leer_archivo_1.leerArchivo('./registro-vengadores.txt');
var arregloVengadoresCargadoDeArchivo = JSON.parse(contenidoArchivo);
var minimoAid = 0;
arregloVengadoresCargadoDeArchivo
    .forEach(function (valorActual) {
    var idActual = valorActual.Aid;
    if (idActual > minimoAid) {
        minimoAid = idActual;
    }
});
minimoAid = minimoAid + 1;
id = minimoAid;
var Vengadores = arregloVengadoresCargadoDeArchivo;
function crearDatosSuperHeroes() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntasVengador, respuestaPreguntas, nuevoRegistroVengador, arregloParseado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntasVengador = [
                        {
                            type: 'text',
                            name: 'Nombre',
                            message: 'Inserte el nombre real del vengador'
                        },
                        {
                            type: 'text',
                            name: 'SuperHeroe',
                            message: 'Inserte el nombre de super heroe del vengador'
                        },
                        {
                            type: 'text',
                            name: 'Poder',
                            message: 'Inserte el superpoder del vengador'
                        },
                        {
                            type: 'text',
                            name: 'Grupo',
                            message: 'Inserte los grupo a los que pertece'
                        },
                        {
                            type: 'text',
                            name: 'Ciudad',
                            message: 'Ciudad natal del vengador'
                        }
                    ];
                    return [4 /*yield*/, prompts(preguntasVengador)];
                case 1:
                    respuestaPreguntas = _a.sent();
                    nuevoRegistroVengador = {
                        Aid: id,
                        Nombre: respuestaPreguntas.Nombre,
                        SuperHeroe: respuestaPreguntas.SuperHeroe,
                        SuperPoder: respuestaPreguntas.Poder,
                        Grupo: respuestaPreguntas.Grupo,
                        Ciudad: respuestaPreguntas.Ciudad
                    };
                    id = id + 1;
                    Vengadores.push(nuevoRegistroVengador);
                    arregloParseado = JSON.stringify(Vengadores);
                    _03_escribir_archivo_1.escribirArchivo('./registro-vengadores.txt', arregloParseado);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/];
            }
        });
    });
}
;
function queDeseaHacer() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, respuesta1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'respuestas',
                        message: '¿Que desea hacer? \n 1-crear otro registro \n 2-leer los registros actuales \n 3-actualizar datos \n 4-eliminar registros \n 5-SALIR'
                    })];
                case 1:
                    preguntas = _a.sent();
                    respuesta1 = preguntas.respuestas;
                    if (respuesta1 == 1) {
                        crearDatosSuperHeroes().then().catch();
                    }
                    else if (respuesta1 == 2) {
                        leerRegistros().then().catch();
                    }
                    else if (respuesta1 == 3) {
                        editarRegistro().then().catch();
                    }
                    else if (respuesta1 == 4) {
                        eliminarRegistro().then().catch();
                    }
                    else if (respuesta1 == 5) {
                        console.log('ADIOS');
                    }
                    else {
                        console.log('Elija una opcion valida');
                        queDeseaHacer().then().catch();
                    }
                    ;
                    return [2 /*return*/, preguntas.respuestas];
            }
        });
    });
}
;
function leerRegistros() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('El archivo cuenta con el siguiente registro: \n', Vengadores);
            queDeseaHacer().then().catch();
            return [2 /*return*/];
        });
    });
}
;
function editarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var AidAEditar, AidEncontrado, queDeseaEditar, respuestaCampo, nuevoNombre, nuevoSuperHeroe, nuevoSuperPoder, nuevoGrupo, nuevaCiudad, nuevoRegistroStringificado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Aid',
                        message: 'Ingrese el Aid del Vengador cuya informacion desea editar'
                    })];
                case 1:
                    AidAEditar = _a.sent();
                    AidEncontrado = Vengadores.findIndex(function (valorActual) {
                        return valorActual.Aid == AidAEditar.Aid;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'campoAEditar',
                            message: '¿Que campo desea editar?'
                        })];
                case 2:
                    queDeseaEditar = _a.sent();
                    respuestaCampo = queDeseaEditar.campoAEditar;
                    if (!(respuestaCampo == 'Nombre')) return [3 /*break*/, 4];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoNombre',
                            message: 'Ingrese el nombre real del nuevo Vengador'
                        })];
                case 3:
                    nuevoNombre = _a.sent();
                    Vengadores[AidEncontrado].Nombre = nuevoNombre.nuevoNombre;
                    return [3 /*break*/, 13];
                case 4:
                    if (!(respuestaCampo == 'SuperHeroe')) return [3 /*break*/, 6];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoSuper',
                            message: 'Ingrese el nobre de SuperHeroe del nuevo vengador'
                        })];
                case 5:
                    nuevoSuperHeroe = _a.sent();
                    Vengadores[AidEncontrado].SuperHeroe = nuevoSuperHeroe.nuevoSuper;
                    return [3 /*break*/, 13];
                case 6:
                    if (!(respuestaCampo == 'SuperPoder')) return [3 /*break*/, 8];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nuevoPoder',
                            message: 'Ingrese el nuevo SuperPoder'
                        })];
                case 7:
                    nuevoSuperPoder = _a.sent();
                    Vengadores[AidEncontrado].SuperPoder = nuevoSuperPoder.nuevoPoder;
                    return [3 /*break*/, 13];
                case 8:
                    if (!(respuestaCampo == 'Grupo')) return [3 /*break*/, 10];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'newGroup',
                            message: 'Ingrese el nuevo grupo al que pertenece el Vengador'
                        })];
                case 9:
                    nuevoGrupo = _a.sent();
                    Vengadores[AidEncontrado].Grupo = nuevoGrupo.newGroup;
                    return [3 /*break*/, 13];
                case 10:
                    if (!(respuestaCampo == 'Ciudad')) return [3 /*break*/, 12];
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'City',
                            message: 'Ingrese la nueva ciudad'
                        })];
                case 11:
                    nuevaCiudad = _a.sent();
                    Vengadores[AidEncontrado].Ciudad = nuevaCiudad.City;
                    return [3 /*break*/, 13];
                case 12:
                    console.log('Ingrese un campo valido');
                    _a.label = 13;
                case 13:
                    ;
                    console.log('El registro de Vengadores actualizado es:', Vengadores);
                    nuevoRegistroStringificado = JSON.stringify(Vengadores);
                    _03_escribir_archivo_1.escribirArchivo('./registro-vengadores.txt', nuevoRegistroStringificado);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/, Vengadores];
            }
        });
    });
}
;
function eliminarRegistro() {
    return __awaiter(this, void 0, void 0, function () {
        var AidAEliminar, AidEncontrado, registroBorrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'Aid',
                        message: 'Ingrese el Aid del Vengador cuya informacion desea eliminar'
                    })];
                case 1:
                    AidAEliminar = _a.sent();
                    AidEncontrado = Vengadores.findIndex(function (valorActual) {
                        return valorActual.Aid == AidAEliminar.Aid;
                    });
                    Vengadores.splice(AidEncontrado, 1);
                    registroBorrado = JSON.stringify(Vengadores);
                    _03_escribir_archivo_1.escribirArchivo('./registro-vengadores.txt', registroBorrado);
                    console.log('El nuevo registro de Vengadores es:', Vengadores);
                    queDeseaHacer().then().catch();
                    return [2 /*return*/, Vengadores];
            }
        });
    });
}
;
function main() {
    crearDatosSuperHeroes().then().catch();
}
main();
