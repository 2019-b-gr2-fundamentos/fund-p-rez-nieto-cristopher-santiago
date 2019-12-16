const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9],
]


function compararMatrices(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {
   return true; 
}

function obtenerPrimeraDimension(matrizUno: number[][]):number | false{
    // VALIDACIONES = verificar que todos sean los arreglos
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    if(esValido){
        const primeraDimensionArrelgo = matrizUno.length;
        return primeraDimensionArrelgo;
    }else{
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number[][]):number | false{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    let longitudActualMaxima = 0; // Variable Auxiliar: GUARDAR EL VALOR Y MANTENERLO DURANTE TODA LA ITERACION
    let longitudActualMinima = -1; // auxiliar 
    for(let i = 0; i < matrizUno.length; i++){
        const elementoActual = matrizUno[i]; // arreglo
        const longitudActual = elementoActual.length // segunda dimension
        if(longitudActualMaxima < longitudActual){
            longitudActualMaxima = longitudActual;
        }
        if(longitudActualMinima == -1){
            longitudActualMinima = longitudActual;
        }else{
            if(longitudActual < longitudActualMinima && longitudActualMinima >= 0){
                longitudActualMinima = longitudActual;
        }// PROBAR
    }
}
return false
}

function verificarTodosLosElementosDeUnArregloSonArreglos(
    arreglo: any[]
):boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' && elementoActual.indexOf // Truty
        if(!esUnArreglo){
            console.log('No es un arreglo');
            return false;
        }
    }
    return true;
}

function verificarTamañoDeCadaArregloDentroDelArreglo(matrizUno: number[][]):boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglos(matrizUno);
    const longitudPrimerArreglo = matrizUno[0].length;
    if(esValido){
    for(let i = 1; i <= matrizUno.length ; i++){
        const longitudDemasArreglos = matrizUno[i].length;
        if(longitudPrimerArreglo == longitudDemasArreglos){
            return true;
        }else{
            return false;
        }
    }
}
}

// como sacar la longitud maxima y minima y comparar 






function main(){
//    compararMatriz()
}