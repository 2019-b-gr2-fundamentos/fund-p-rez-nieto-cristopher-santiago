// 04-condicionalees.ts
const casado = true;
if(estaCasado) {
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

if(casado == false) { //(Expersion -> devuelve un booleano)
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}

if(casado != true) {
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}

if(casado != false) { 
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

const tengoMosa = false;
const estaCasado = casado == true; // expresion
const soyMosero = tengoMosa == true;                         //
const casadoYMosero = estaCasado == true && tengoMosa == true;
if(casadoYMosero){
    console.log("Casado y mosero");
} else{
    console.log("O casado O Mosero o Nada");
}

if(true) {
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

// AND -> && AMPERSET
// TRUE y TRUE = TRUE
// TRUE y FALSE = FALSE
// FALSE y TRUE = FALSE
// FALSE y FALSE = FALSE 

// OR -> || PIPES
// TRUE o TRUE = TRUE
// TRUE o FALSE = TRUE
// FALSE o TRUE = TRUE
// FALSE o FALSE = FALSE 

/*
apago la primera alarma
me hago bolita y lloro hasta la segunda
me levanto
celularDescargado == true;
celularDañado == true;
amaneceMuerto == true;
estaActivadaLaAlarma != true;
estaEnModoSilencio == true;

const seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto == true || estaActivadaLaAlarma != true || estaEnModoSilencio == true

Si el celular esta descargado o el celular esta dañado o amanece muerto o no esta activada la alarma o esta en modo silencio, Se pone a llorar, si no es feliz 





if(seAtrasoAClase){
    console.log("Se pone a llorar");
} else{
    console,log("Es feliz");
}

*/

/* 
0. INICIO
1. Que operacion desea hacer?
2. Desea sumar?
    ssi ira a 3
    sno ir a 7
3. inserte numero1
4. inserte numero2
5. imprimir "Resultado = numero1 + numero2" 
6. ir a 28
7. Desea restar?
    ssi ir a 8
    sno ir a 12
8. inserte numero1
9. inserte numero2
10. imprimir "Resultado = numero1 - numero2" 
11. ir a 28
12. Desea multiplicar?
    ssi ir a 13
    sno ir a 17
13. inserte numero1
14. inserte numero2
15. imprimir "Resultado = numero1 * numero2" 
16. ir a 28
17. Desea dividir?
    ssi ir a 18
    sno ir a 22
18. inserte numero1
19. inserte numero2
20. imprimir "Resultado = numero1 / numero2" 
21. ir a 28
22. Desea obtener la hipotenusa si estos valores fueran catetos?
    ssi ir a 23
    sno ir a 27
23. inserte numero1
24. inserte numero2
25. imprimir "Resultado = (numero1^2 + numero2^2)^1/2"
26. ir a 28
27. ir a 29
28. Desea realizar otra operacion?
    ssi ir a 1
    sno ir a 30
29. Imprimir "Seleccione una operacion"
30. FIN




*/

// TRUTY // FALSY

const nombreVacio = "";
if(undefined){
    console.log("Truty");
}else{
    console.log("Falsy");
}


let calculoString = prompt("Que operacion desea realizar"); // sumar restar multiplicar y dividir
const calculoNombre = String(calculoString);
switch(calculoNombre){
    case "sumar": // compara 1 vez
        break;
    case "restar": //compara 2 veces
        break;
    case "multiplicar": // compara 3 veces 
        break;
    case "dividir": //compara 4 veces
        break;
    default:
}

// 6 Guagua
// 18 Guambra
// 65 Longo
// 66 Ruku

/*
const edadString = prompt("Ingresar numero");
const edad = Number(edadString);
switch(edad) {
    case edad > 0 && edad <= 6:
        console.log("guagua");
        break;
    case edad > 6 && edad <= 18:
        console.log("guambra");
        break;
// NO SIRVE EL SWITCH PARA ESTOS CASOS. SOLO SIRVE PARA CASOS ESPECÍFICOS 
}

*/
const edadString = prompt("Ingresar Edad");
const edadUno = Number(edadString);
if (edad > 0 && edad <= 6){
    console.log("guagua");
}else {
if (edad > 6 && edad <= 18){
    console.log("guambra");
}else {
if (edad > 18 && edad <= 65){
    console.log("longo");
}else {
if (edad >= 66 && edad <150){
    console.log("ruku");
}else {
if (edad <= 0){
    console.log("Usted está en planes de nacer");
}else {(edad >= 150);
    console.log("USTED ES DON ALFONSO");
}}}}}



