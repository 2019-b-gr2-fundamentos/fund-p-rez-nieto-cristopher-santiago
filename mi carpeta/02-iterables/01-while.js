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
do {
    numeroDeDeberes = numeroDeDeberes + 1;
    if (numeroDeDeberes % 3 == 0) {
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
} while (numeroDeDeberes < 50);
console.log("Hice " + compiladores + " deberes de compiladores");
console.log("Hice " + algebra + " deberes de algebra");
console.log("Hice " + analisisSocio + " deberes de analisis socioeconomico");
// hasta 50, analisis17 algebra17 compiladores16 
