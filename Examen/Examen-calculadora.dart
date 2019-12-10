import 'dart:io'; // habilita operaciones, como la de ingresar datos desde el teclado.
import 'dart:math';
num sumar(num numeroUno, num numeroDos){
  return numeroUno + numeroDos;
}
num restar(num numeroUno, num numeroDos){
  return numeroUno - numeroDos;
}
num multiplicar(num numeroUno, num numeroDos){
  return numeroUno * numeroDos;
}
num dividir(num numeroUno, num numeroDos){
  return numeroUno / numeroDos;
}
double converisonDeGradosSexagesimalARadianes(numeroUno){
  final double gradoGeneral = 180;
  return numeroUno / gradoGeneral + "πrad";
}
double conversionDeGradosRadianesASexagesimales(num numeroUno){
  final double converter = 180 / 3.1416;
  return numeroUno * converter;
}
double volumenDeUnaEsferaDeRadioX(double radioDeLaEsfera){
  final double pi = 3.1416;
  final double constante = 4 / 3;
  final double formula = pi * constante;
  return formula * radioDeLaEsfera * radioDeLaEsfera * radioDeLaEsfera;
}
double hipotenusa(double cateto1, double cateto2){
  final double cateto1AlCuadrado = cateto1 * cateto1;
  final double cateto2AlCuadrado = cateto2 * cateto2;
  final double sumaCatetos = cateto1AlCuadrado + cateto2AlCuadrado;
  return sqrt(sumaCatetos);
}
double areaDeUnCuadrado(double ladoDelCuadrado){
  return ladoDelCuadrado * ladoDelCuadrado;
}
dynamic distanciaEntreDosPunto(List puntoInicial, List puntoFinal){
  final distX = puntoFinal[0] - puntoInicial[0];
  final distY = puntoFinal[1] - puntoInicial[1];
  final distXCuadrado = distX * distX;
  final distYCuadrado = distY * distY;
  return sqrt(distXCuadrado + distYCuadrado);

}

main() {
  calculadora();
}

   calculadora(){
     int numeroOperacion;
     int yes, no;
     double numeroUno, numeroDos;
     double radioDeLaEsfera;
     double cateto1, cateto2;
     double ladoDelCuadrado;
     double x1, x2, y1, y2;
     List puntoInicial, puntoFinal;
     print('Bienvenido a la calculadora mas chevere del mundo :)');
     print('Estos son los numeros asignados para cada operacion');
     print('OPERACIONES BASICAS: 1-suma, 2-resta, 3-multiplicacion, 4-division'); 
     print('CONVERSORES DE GRADOS: 5-transformar de sexagesimal a radian, 5-transformar de radian a sexagesimal');
     print('OTRAS OPERACIONES'); 
     print('7-volumen de una esfera');
     print('8-hipotenusa de un triangulo rectangulo');
     print('9-area de un cuadrado');
     print('10-distancia entre dos puntos');
     print('11-SALIR');
     stdout.write('Digita un numero plis ');
     numeroOperacion = num.parse(stdin.readLineSync());
     double resultado = 0;
     if(numeroOperacion == 11){
       print('Gracias por utilizarme :,v');
     }else if(numeroOperacion >= 1 && numeroOperacion <= 4){
       stdout.write('inserte el primer valor ');
       numeroUno = num.parse(stdin.readLineSync());
       stdout.write('inserte el segundo valor ');
       numeroDos = num.parse(stdin.readLineSync());
       final bool esSuma = numeroOperacion == 1;
       final bool esResta = numeroOperacion == 2;
       final bool esMultiplicacion = numeroOperacion == 3;
       final bool esDivision = numeroOperacion == 4;
       if (esSuma){
       resultado = sumar(numeroUno, numeroDos);
       }else if (esResta){
       resultado = restar(numeroUno, numeroDos);
       }else if(esMultiplicacion){
       resultado = multiplicar(numeroUno, numeroDos);
       }else if(esDivision){
       resultado = dividir(numeroUno, numeroDos);
       }
     }else if(numeroOperacion >= 5 && numeroOperacion <= 6){
       final bool esConversion1 = numeroOperacion == 5;
       final bool esConversion2 = numeroOperacion == 6;
       stdout.write('inserte el valor a convertir ');
       numeroUno = num.parse(stdin.readLineSync());
       if(esConversion1){
         resultado = converisonDeGradosSexagesimalARadianes(numeroUno);
       }else if(esConversion2){
         resultado = conversionDeGradosRadianesASexagesimales(numeroUno);
       }
       print(resultado);
       calculadora();
      }else if(numeroOperacion == 7){
        stdout.write('digite el radio de la esfera ');
        radioDeLaEsfera = double.parse(stdin.readLineSync());
        resultado = volumenDeUnaEsferaDeRadioX(radioDeLaEsfera);
        print('El volumen de la esfera de radio ${radioDeLaEsfera} es ${resultado}');
        calculadora();
      }else if(numeroOperacion == 8){
        stdout.write('digite el valor del primer cateto ');
        cateto1 = double.parse(stdin.readLineSync());
        stdout.write('digite el valor del segundo cateto ');
        cateto2 = double.parse(stdin.readLineSync());
        resultado = hipotenusa(cateto1, cateto2);
        print('La hipotensua del triangulo es ${resultado}');
        calculadora();
      }else if(numeroOperacion == 9){
        stdout.write('inserte la longitud del lado del cuadrado ');
        ladoDelCuadrado = double.parse(stdin.readLineSync());
        resultado = areaDeUnCuadrado(ladoDelCuadrado);
        print('El area del cuadrado de lado ${ladoDelCuadrado} es ${resultado}');
        calculadora();
      }else if(numeroOperacion == 10){
        stdout.write('inserte el valor en x del punto inicial ');
        x1 = double.parse(stdin.readLineSync());
        stdout.write('inserte el valor en y del punto inicial ');
        y1 = double.parse(stdin.readLineSync());
        puntoInicial = [x1,y1];
        stdout.write('inserte el valor en x del punto final ');
        x2 = double.parse(stdin.readLineSync());
        stdout.write('inserte el valor en y del punto final ');
        y2 = double.parse(stdin.readLineSync());
        puntoFinal = [x2,y2];
        resultado = distanciaEntreDosPunto(puntoInicial, puntoFinal);
        print('La distancia entre ${puntoInicial} y ${puntoFinal} es ${resultado}');
        calculadora();
      }else{
        print('ESCOGE UNA OPCION VALIDA CHCH!!!!!!! :v');
        calculadora();
      }

    }


