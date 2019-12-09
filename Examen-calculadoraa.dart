import 'dart:ffi';
import 'dart:io'; // habilita operaciones, como la de ingresar datos desde el teclado.

double sumar(double numeroUno, double numeroDos){
  return numeroUno + numeroDos;
}
double restar(double numeroUno, double numeroDos){
  return numeroUno - numeroDos;
}
double multiplicar(double numeroUno, double numeroDos){
  return numeroUno * numeroDos;
}
double dividir(double numeroUno, double numeroDos){
  return numeroUno / numeroDos;
}

double pitagoras(double numeroUno, double numeroDos){
  return Math.sqrt(numeroUno * numeroUno + numeroDos * numeroDos);
}

main(){
  calculadora();
}

calculadora(){
  
  stdout.write("Seleccione una operacion");

}