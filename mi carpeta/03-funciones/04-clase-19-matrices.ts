const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8,6],
    [9],
    [],
];

export function compararMatriz(
    matrizUno: any[][],
    matrizDos: any[][]
): boolean {
    const esValido = tienenMatricesIgualesDimensiones(
        matrizUno,
        matrizDos
    );
    if(esValido){
        // Comparar los valores
        return tienenMismosValores(
            matrizUno,
            matrizDos
        ); // boolean
    } else {
        return false;
    }
}

export function tienenMismosValores(
    matrizUno: any[][],
    matrizDos: any[][]
):boolean{
    const primeraDimension = matrizUno.length;
    const segundaDimension = matrizUno[0].length;
    let banderaSonIguales = true;
    for(let i = 0; i < primeraDimension; i++){
        for(let j = 0; j < segundaDimension; j++){
            const valorActualM1 = matrizUno[i][j]; 
            const valorActualM2 = matrizDos[i][j]; 
            if(valorActualM1 != valorActualM2){
                banderaSonIguales = false;
            }
        }
    }
    return banderaSonIguales;
}

export function tienenMatricesIgualesDimensiones(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {
    const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
        matrizUno
        );
    const matrizUnoSegundaDimension = obtenerSegundaDimension(
        matrizUno
        );
    const matrizDosPrimeraDimension = obtenerPrimeraDimension(
        matrizDos
        );
    const matrizDosSegundaDimension = obtenerSegundaDimension(
        matrizDos
        );
    const noHayFalsos = matrizUnoPrimeraDimension != false && 
    matrizUnoSegundaDimension != false &&
    matrizDosPrimeraDimension != false && 
    matrizDosSegundaDimension != false;
    if( noHayFalsos ){
        const tienenIgualesDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
        matrizUnoSegundaDimension == matrizDosSegundaDimension;
        if( tienenIgualesDimensiones ){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export function obtenerPrimeraDimension(matrizUno: any[][]): number | boolean{
    // VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else{
        return false;
    }
}

export function obtenerSegundaDimension(matrizUno: any[][]): number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        let longitudActualMaxima = 0; // Auxiliar
        let longitudActualMinima = -1; // Auxiliar
        for(let i = 0; i < matrizUno.length; i++){
            const elementoActual = matrizUno[i]; // arreglo
            const longitudActual = elementoActual.length; // segunda dimension
            if(longitudActualMaxima < longitudActual){
                longitudActualMaxima = longitudActual;
            }
            if(longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }else{
                if(longitudActual < longitudActualMinima){
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if(longitudActualMaxima != longitudActualMinima){
            return false;
        }else{
            return matrizUno[0].length;
        }
    }else{
        return false;
    }
}

export function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[]
):boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
                            elementoActual.indexOf; // Truty
        if(!esUnArreglo){
            return false;
        }
    }
    return true;
}


function main(){
    const x = [
        [1,2,3],
        [3,3,3]
    ];
    const y = [
        [1,2,3],
        [3,3,2]
    ];
    const resultado = compararMatriz(x, y);
    if(resultado != true){
        console.log('Las matrices NO son iguales');
    }else{
        console.log('Las matrices son iguales');
    }
}

main();