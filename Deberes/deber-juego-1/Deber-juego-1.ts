
let matrizCorrecta = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12],
    [13, 14 , 15, '']
];
let nuevoNumero = 0;
let i = 0;
let j = 0;
let numeroActual = -1;
const tamañoDeCadaFila = 4;
let matrizJuego = [
    [],
    [],
    [],
    []
];
let primeraFila = [];
let segundaFila = [];
let terceraFila = [];
let cuartaFila = [];


export async function generarJuego(){
    primeraFila = [-1,-1,-1,-1];
    do{
        nuevoNumero = Math.floor(Math.random() * 15);
        if(nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]){
            j = j;
        }else{
            matrizJuego[0].push(nuevoNumero);
            numeroActual = nuevoNumero;
            primeraFila[j] = numeroActual;
            primeraFila = primeraFila;
            j = j + 1;
        };
    }while(j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    //console.log(primeraFila)
    //console.log(numeroActual);
    j = 0;
    segundaFila = [-1,-1,-1,-1];
    do{
        nuevoNumero = Math.floor(Math.random() * 15);
        if(nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]||
                                          nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3]){
            j = j;
        }else{
            matrizJuego[1].push(nuevoNumero);
            numeroActual = nuevoNumero;
            segundaFila[j] = numeroActual;
            segundaFila = segundaFila;
            j = j + 1;
        };
    }while(j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    j = 0;
    terceraFila = [-1,-1,-1,-1];
    do{
        nuevoNumero = Math.floor(Math.random() * 15);
        if(nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]||
                                          nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3]||
                                          nuevoNumero == terceraFila[0] || nuevoNumero == terceraFila[1] || nuevoNumero == terceraFila[2] || nuevoNumero == terceraFila[3]){
            j = j;
        }else{
            matrizJuego[2].push(nuevoNumero);
            numeroActual = nuevoNumero;
            terceraFila[j] = numeroActual;
            terceraFila = terceraFila;
            j = j + 1;
        };
    }while(j < tamañoDeCadaFila);
    //console.log(matrizJuego);
    j = 0;
    cuartaFila = [-1,-1,-1,''];
    do{
        nuevoNumero = Math.floor(Math.random() * 15);
        if(nuevoNumero == numeroActual || nuevoNumero == primeraFila[0] || nuevoNumero == primeraFila[1] || nuevoNumero == primeraFila[2] || nuevoNumero == primeraFila[3]||
                                          nuevoNumero == segundaFila[0] || nuevoNumero == segundaFila[1] || nuevoNumero == segundaFila[2] || nuevoNumero == segundaFila[3]||
                                          nuevoNumero == terceraFila[0] || nuevoNumero == terceraFila[1] || nuevoNumero == terceraFila[2] || nuevoNumero == terceraFila[3]||
                                          nuevoNumero == cuartaFila[0]  || nuevoNumero == terceraFila[1]){
            j = j;
        }else{
            matrizJuego[3].push(nuevoNumero);
            numeroActual = nuevoNumero;
            cuartaFila[j] = numeroActual;
            cuartaFila = cuartaFila;
            j = j + 1;
        };
    }while(j < 4);
    matrizJuego[3].splice(3,1,'');
    //console.log(matrizJuego);
    console.log('#  ', '1  ', '2  ', '3  ', '4  ');
    console.log('A', matrizJuego[0]);
    console.log('B', matrizJuego[1]);
    console.log('C', matrizJuego[2]);
    console.log('D', matrizJuego[3]);
    
   

};

function main(){
    generarJuego().then().catch();
    //generarSegundaFila();
    
};

main();