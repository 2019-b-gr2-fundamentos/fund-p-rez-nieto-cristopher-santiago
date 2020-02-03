var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Referencias 
function main() {
    var uno = 1;
    var dos = uno; //Valor
    var tres = dos; //Valor
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglito = [1, 2, 3];
    var miOtroArrelgito = [];
    var a = arreglito[0]; // Valor
    var b = arreglito[1]; // Valor
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b);
    miOtroArrelgito = __spreadArrays(arreglito); // -> se puede copiar varios arreglos si se desea 
    // Ref -> Direccion de memoria
    // ASIGNAR A MI OTRO ARREGLITO UNA NUEVA DIRECCION DE MEMORIA
    // 1-> For llenenmos un nuevo arreglo
    // 2-> Filter -> Siempre true -> Nuevo arreglo
    // 3-> Map -> Nuevo arreglo
    // INMUTABILIDAD
    // JS -> Arrelgos u Objetos -> Clon!
    // CLON DEL ARREGLO -> PARA TRABAJAR EN EL CLON
    miOtroArrelgito.push(2);
    arreglito[0] = 9;
    arreglito[1] = 10;
    console.log('arreglito', arreglito);
    console.log('miOtroArreglito', miOtroArrelgito);
    console.log('a', a);
    console.log('b', b);
    var adrian = {
        id: 1,
        nombre: 'Adrian',
        sueldo: 1.12
    };
    var soloElNombre = __assign({}, adrian);
    var copia1 = __assign({}, adrian);
    var copia2 = __assign({}, adrian);
    var copia3 = __assign({}, adrian);
    console.log('adrian', adrian);
    console.log('SoloElNombre', soloElNombre);
    delete adrian.nombre; //ELIMINAR EL NOMBRE DEL OBJETO
    soloElNombre['edad'] = 22,
        // soloElNombre.edad = 22;
        console.log('adrian', adrian);
    console.log('SoloElNombre', soloElNombre);
    console.log('copia1', copia1);
    console.log('copia2', copia2);
    console.log('copia3', copia3);
}
;
main();
