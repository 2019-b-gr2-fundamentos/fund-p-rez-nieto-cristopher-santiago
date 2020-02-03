// Referencias 
function main(){
    let uno = 1;
    let dos = uno; //Valor
    let tres = dos; //Valor
    console.log('uno', uno); 
    console.log('dos', dos); 
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);

    const arreglito = [1,2,3];
    let miOtroArrelgito = [];
    let a = arreglito[0]; // Valor
    let b = arreglito[1]; // Valor
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b);
    miOtroArrelgito = [
        ...arreglito,
        //...arreglito     // -> se puede copiar una o mas veces un arreglo dentro de otro
    ];                     // -> se puede copiar varios arreglos si se desea 
    
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
    arreglito[1] = 10
    console.log('arreglito', arreglito);
    console.log('miOtroArreglito', miOtroArrelgito);
    console.log('a', a);
    console.log('b', b);

    const adrian = {
        id: 1,
        nombre: 'Adrian',
        sueldo: 1.12
    };
    const soloElNombre = {
        ...adrian
    };
    const copia1 = {
        ...adrian
    };
    const copia2 = {
        ...adrian
    };
    const copia3 = {
        ...adrian
    };
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
};

main();