import 'dart:io'; // habilita operaciones, como la de ingresar datos desde el teclado.
import 'dart:math';
main() {
int numeroDeOperacion;
    do {
      print("BIENVENIDO :)");
      print("Ingrese el numero de operacion que desea realizar:");
      print("1 suma");
      print("2 resta");
      print("3 multiplicacion");
      print("4 division");
      print("5 discriminante");
      print("6 producto punto");
      print("7 modulo de un vector");
      print("8 calculo de la velocidad en un MRU ");
      print("9 calculo de la distancia en un MRU");
      print("10 calculo del tiempo en un MRU");
      print("11 salir");
        stdout.write("Seleccione el numero de la operacion que desea realizar:");
        numeroDeOperacion = int.parse(stdin.readLineSync());
          if (numeroDeOperacion >=1 && numeroDeOperacion <=4){
            num a,b;
              stdout.write('Digite el primer numero:');
              a = num.parse(stdin.readLineSync());
              stdout.write('Digite el segundo numero:');
              b = num.parse(stdin.readLineSync());
                switch (numeroDeOperacion) {
                  case 1:
                    print("El resultado de la suma es: ${a + b}");
                  break;
                  case 2:
                    print("El resultado de la resta es: ${a - b}");
                  break;
                  case 3:
                    print("El resultado de la multiplicacion es: ${a * b}");
                  break;
                    case 4:
                    print("El resultado de la division es: ${a / b}");
                    break;
                default:
                print("VALOR incorrecto");
              }     
          }else{
              if (numeroDeOperacion == 5) {
                num c,d,e;
                stdout.write("Ingrese el valor del termino independiente:");
                c = num.parse(stdin.readLineSync());
                stdout.write("Ingrese el valor que esta acompañado por la X:");
                d = num.parse(stdin.readLineSync());
                stdout.write("ingrese el valor que esta acompañado por x^2:");
                e = num.parse(stdin.readLineSync());
                num valorDiscriminante;
                  valorDiscriminante = d*d - 4*e*c;
                    print("El valor del discriminate es:$valorDiscriminante");
                    if (valorDiscriminante >0) {  
                    print("El polinomio de segundo grado posee dos soluciones reales distintas");
                    }else{
                      if (valorDiscriminante ==0) {
                        print("El polinomio de segundo grado posee dos soluciones reales iguales");
                      } else {
                        if(valorDiscriminante <0){
                          print("El polinomio de segundo grado no posee solucion en los Reales");
                        }else{
                          print("Digite correctamente los numeros");
                        }
                      }
                    }
              }else{ 
                if(numeroDeOperacion==6 || numeroDeOperacion ==7){
                  num f,g,h;
                    stdout.write("Ingrese el valor de la componente i del primer vector:");
                    f = num.parse(stdin.readLineSync());
                    stdout.write("Ingrese el valor de la componente j del primer vector:");
                    g = num.parse(stdin.readLineSync());
                    stdout.write("Ingrese el valor de la componente k del primer vector:");
                    h = num.parse(stdin.readLineSync());
                    switch (numeroDeOperacion) {
                      case 6:
                        num i,j,k;
                        stdout.write("Ingrese el valor de la componente i del segundo vector:");
                        i = num.parse(stdin.readLineSync());
                        stdout.write("Ingrese el valor de la componente j del segundo vector:");
                        j = num.parse(stdin.readLineSync());
                        stdout.write("Ingrese el valor de la componente k del segundo vector:");
                        k = num.parse(stdin.readLineSync());
                        print("El valor del producto punto es:${f*i + g*j + h*k}");
                        break;
                      case 7:
                        var moduloVector;
                        moduloVector = f*f +g*g + h*h;
                        print("El valor del modulo del vector es: ${sqrt(moduloVector)}");
                        break;
                    default:
                  }
                }else{
                    if (numeroDeOperacion == 8) {
                        num l,m;
                          stdout.write("ingrese la distancia en metros:");
                          l = num.parse(stdin.readLineSync());
                          stdout.write("Ingrese el tiempo en segundos:");
                          m = num.parse(stdin.readLineSync());
                          print("La velocidad es:${l/m}m/s");
                    }else{
                      if(numeroDeOperacion == 9){   
                        num n,o;
                          stdout.write("ingrese la velocidad en m/s:");
                          n = num.parse(stdin.readLineSync());
                          stdout.write("ingrese el tiempo en segundos:");
                          o = num.parse(stdin.readLineSync());
                          print("La distancia es:${n*o}m");
                      }else{
                        if(numeroDeOperacion == 10){
                        num p,q;
                        stdout.write("ingrese la distancia en metros:");
                        p = num.parse(stdin.readLineSync());
                        stdout.write("ingrese la velocidad en m/s:");
                        q= num.parse(stdin.readLineSync());
                        print("el tiempo es ${p/q}s");      
                        }else{
                          if(numeroDeOperacion == 11);
                          print("Nos vemos ;)");
                        }  
                      }
                    }                  
                  }
                }
        }
  }while ( numeroDeOperacion >=1 && numeroDeOperacion<=10); 

}  