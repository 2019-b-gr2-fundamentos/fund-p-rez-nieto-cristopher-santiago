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
var prompts = require("C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts");
function obtenerDatosSuperHeroes() {
    return __awaiter(this, void 0, void 0, function () {
        var infoSuperHeros, infoDelPersonaje;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    infoSuperHeros = [
                        {
                            type: 'text',
                            name: 'Nombre',
                            message: 'Inserte su nombre real'
                        },
                        {
                            type: 'text',
                            name: 'SuperHeroe',
                            message: 'Cual es su nombre de Super Heroe'
                        },
                        {
                            type: 'number',
                            name: 'Universo',
                            message: 'Universo al que pertenece'
                        },
                        {
                            type: 'text',
                            name: 'Grupo',
                            message: 'Inserte los grupos a los que pertenece'
                        },
                        {
                            type: 'text',
                            name: 'SuperPoder',
                            message: 'Cual es su superpoder?'
                        }
                    ];
                    return [4 /*yield*/, prompts(infoSuperHeros)];
                case 1:
                    infoDelPersonaje = _a.sent();
                    console.log('informacion del personaje', infoDelPersonaje);
                    return [2 /*return*/];
            }
        });
    });
}
function Crud() {
    return __awaiter(this, void 0, void 0, function () {
        var pregunta1, preguntaParaIniciarCrud, preguntaCrear, preguntaLeer, preguntaActualizar, preguntaEliminar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pregunta1 = {
                        type: 'text' || 'number',
                        name: 'Pregunta1',
                        message: 'Qué desea hacer ahora? (crear-1, leer, actualizar, eliminar o nada)'
                    };
                    return [4 /*yield*/, prompts(pregunta1)];
                case 1:
                    preguntaParaIniciarCrud = _a.sent();
                    preguntaCrear = {
                        type: 'text',
                        name: 'Pregunta Crear',
                        message: 'Desea crear info para otro personaje?'
                    };
                    preguntaLeer = {
                        type: 'text',
                        name: 'Pregunta Leer',
                        message: 'Desea leer la info actual?'
                    };
                    preguntaActualizar = {
                        type: 'text',
                        name: 'Pregunta Actualizar',
                        message: 'Desea Actualizar la info de su personaje?'
                    };
                    preguntaEliminar = {
                        type: 'text',
                        name: 'Pregunta Eliminar',
                        message: 'Desea eliminar la info de algun personaje?'
                    };
                    if (!(preguntaParaIniciarCrud == 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, prompts(preguntaCrear)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function main() {
    //obtenerDatosSuperHeroes().then().catch();
    Crud().then().catch();
}
main();
