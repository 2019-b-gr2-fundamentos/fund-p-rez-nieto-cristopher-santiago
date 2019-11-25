function sumar(numeroUno:number, numeroDos:number): number{
    return numeroUno + numeroDos;
}
function restar(numeroUno:number, numeroDos:number): number{
    return numeroUno - numeroDos;
}
function multiplicar(numeroUno:number, numeroDos:number): number{
    return numeroUno * numeroDos;
}
function dividir(numeroUno:number, numeroDos:number): number{
    return numeroUno / numeroDos;
}

function main(){
    calculadora();
}
function  calculadora(){
    const operacion:string = prompt('Selecciona una operacion: "suma-1", "resta-2"; "multiplicacion-3", "division-4", terminamos-5"');
    const esSuma:boolean = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    const esResta:boolean = operacion == 'resta' || operacion == '2' || operacion == 'resta-2';
    const esMultiplicacion:boolean = operacion == 'multiplicacion' || operacion == '3' || operacion == 'multiplicacion-3';
    const esDivision:boolean = operacion == 'division' || operacion == '4' || operacion == 'division-4';
    const seTermino:boolean = operacion == 'terminamos' || operacion == '5' || operacion == 'terminamos-5';

    const estaValida:boolean = esSuma || esResta || esMultiplicacion || esDivision;

    if(estaValida){
        const numeroUno:number = +prompt("Numero 1");
        const numeroDos:number = +prompt("Numero 2");
        let resultado = 0;
        if(esSuma){
            resultado = sumar(numeroUno, numeroDos);
        }
        if(esResta){
            resultado = restar(numeroUno, numeroDos);
        }
        if(esMultiplicacion){
            resultado = multiplicar(numeroUno, numeroDos);
        }
        if(esDivision){
            resultado = dividir(numeroUno, numeroDos);
        }
        console.log(resultado);
        calculadora();
    }else{
        if(seTermino){
            console.log("Adios ='(");
        }else{
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