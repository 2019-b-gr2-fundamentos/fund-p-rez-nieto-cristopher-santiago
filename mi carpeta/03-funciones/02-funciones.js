function sumar(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
function restar(numeroUno, numeroDos) {
    return numeroUno - numeroDos;
}
function multiplicar(numeroUno, numeroDos) {
    return numeroUno * numeroDos;
}
function dividir(numeroUno, numeroDos) {
    return numeroUno / numeroDos;
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt('Selecciona una operacion: "suma-1", "resta-2"; "multiplicacion-3", "division-4", terminamos-5"');
    var esSuma = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    var esResta = operacion == 'resta' || operacion == '2' || operacion == 'resta-2';
    var esMultiplicacion = operacion == 'multiplicacion' || operacion == '3' || operacion == 'multiplicacion-3';
    var esDivision = operacion == 'division' || operacion == '4' || operacion == 'division-4';
    var seTermino = operacion == 'terminamos' || operacion == '5' || operacion == 'terminamos-5';
    var estaValida = esSuma || esResta || esMultiplicacion || esDivision;
    if (estaValida) {
        var numeroUno = +prompt("Numero 1");
        var numeroDos = +prompt("Numero 2");
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numeroUno, numeroDos);
        }
        if (esResta) {
            resultado = restar(numeroUno, numeroDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numeroUno, numeroDos);
        }
        if (esDivision) {
            resultado = dividir(numeroUno, numeroDos);
        }
        console.log(resultado);
        calculadora();
    }
    else {
        if (seTermino) {
            console.log("Adios ='(");
        }
        else {
            calculadora();
        }
    }
}
/*
1) Seleccionar una operacion
2.1) la seleccion no es valida
    2.1.1) Vuelve a seleccionar la operacion
2.2) la seleccion es valida
    2.2.1) Ingresar primero numero
    2.2.2) Ingresar segundo numero
    2.2.3) Ejecutar la operacion

*/ 
