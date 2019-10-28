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
1. Que operacion desea hacer?
2. Desea sumar?
    ssi ira a 
    sno ir a 
3. Desea restar?
4. Desea multiplicar?
5. Desea dividir?
6. desea hallar el factorial?





*/







