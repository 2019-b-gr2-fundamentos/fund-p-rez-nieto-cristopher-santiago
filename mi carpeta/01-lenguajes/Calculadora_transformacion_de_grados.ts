//datoss ingresados por teclado 
const calculoString = prompt("¿Que operacion desea realizar?");
const pregunta = prompt("Si desea transformar, coloque el dato en valor1 y digite 0 en valor2. Escriba ok en el teclado");
const numeroString1 = prompt("Ingrese valor1");
const numeroString2 = prompt("Ingrese valor2");
// declaracion de variables 
const calculo1 = String(calculoString);
const numero1 = Number(numeroString1);
const numero2 = Number(numeroString2);
const pregunta1 = String(pregunta);
const π = 3.1416;
const cientoOchenta = 180;
const calculadora = calculo1;
// calculadora
switch(calculadora){
    case "sumar":
        console.log(numero1 + numero2);
        break;
    case "restar":
        console.log(numero1 - numero2);
        break;
    case "multiplicar":
        console.log(numero1 * numero2);
        break;
    case "dividir":
        console.log(numero1 / numero2);
        break;
    case "transformacion de grados":
        console.log(numero1 / cientoOchenta + "πrad");
        break;
}
