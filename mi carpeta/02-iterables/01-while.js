// DO WHILE
var vecesQueHeComido = 0;
do {
    console.log('Vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
            console.log("DESAYUNO");
            break;
        case 2:
            console.log("ALMUERZO");
            break;
        case 3:
            console.log("MERIENDA");
            break;
        default:
            console.log("GORDITOS");
    }
} while (vecesQueHeComido < 3);
while (vecesQueHeComido < 3) {
    console.log('Vamos a comer');
    vecesQueHeComido = 0;
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
            console.log("DESAYUNO");
            break;
        case 2:
            console.log("ALMUERZO");
            break;
        case 3:
            console.log("MERIENDA");
            break;
        default:
            console.log("GORDITOS");
    }
}
/*
1 Analisis socioeconomico
2 Algebra lineal
3 compiladores
5 programacion
7 calculo
11 fisica
13 ingles

pseudocodigo
Si el numero es impar, aumentamos a Analisis socioeconomico
Si el numero es par, aumentamos a Algebra
Si es multiplo de tres, aumentamos a compiladores


*/
var numeroDeDeberes = 0;
var analisisSocio = 0;
var algebra = 0;
var compiladores = 0;
var programacion = 0;
var calculo = 0;
var fisica = 0;
var ingles = 0;
do {
    numeroDeDeberes = numeroDeDeberes + 1;
    if (numeroDeDeberes % 13 == 0) {
        ingles = ingles + 1;
    }
    else if (numeroDeDeberes % 11 == 0) {
        fisica = fisica + 1;
    }
    else if (numeroDeDeberes % 7 == 0) {
        calculo = calculo + 1;
    }
    else if (numeroDeDeberes % 5 == 0) {
        programacion = programacion + 1;
    }
    else if (numeroDeDeberes % 3 == 0) {
        compiladores = compiladores + 1;
    }
    else if (numeroDeDeberes % 2 == 0) {
        algebra = algebra + 1;
    }
    else if (numeroDeDeberes % 2 !== 0) {
        analisisSocio = analisisSocio + 1;
    }
    else {
        console.log("No tiene deberes");
    }
} while (numeroDeDeberes < 1000);
console.log("Hice " + ingles + " deberes de ingles");
console.log("Hice " + fisica + " deberes de fisica");
console.log("Hice " + calculo + " deberes de calculo");
console.log("Hice " + programacion + " deberes de programacion");
console.log("Hice " + compiladores + " deberes de compiladores");
console.log("Hice " + algebra + " deberes de algebra lineal");
console.log("Hice " + analisisSocio + " deberes de analisis socioeconomico");
