import 'dart:io';
import 'dart:math';

bool validarLosElementosDeLasMatrices(List<List<dynamic>> matriz){
  // Para declarar un for loop:
  for(var i = 0; i < matriz.length; i++){
    var filaActual = matriz[i];
    var esUnaMatriz = filaActual.runtimeType != 'List <dynamic>';
    if (!esUnaMatriz){
      return false;
    }
  }
  return true;
}

dynamic primeraDimension(List<List<num>> matrizUno){
  final esUnaMatriz = validarLosElementosDeLasMatrices(matrizUno);
  if(esUnaMatriz){
    final dimensionMatrizUno = matrizUno.length;
    return dimensionMatrizUno;
  }else{
    return false;
  }
}

dynamic segundaDimension(List<List<num>> matrizUno){
  final esUnaMatriz = validarLosElementosDeLasMatrices(matrizUno);
  if(esUnaMatriz){
    var maxLength = 0;
    var minLength = -1;
    for(var i = 0; i < matrizUno.length; i++){
      final elementoActual = matrizUno[i];
      final actualLength = elementoActual.length;
      if(maxLength < actualLength){
        maxLength = actualLength;
      }
      if(minLength == -1){
        minLength = actualLength;
      }else{
        if(actualLength < minLength){
          minLength = actualLength;
        }
      }
    }
    if(maxLength != minLength){
      return false;
    }else{
      return matrizUno[0].length;
    }
  }else{
    return false;
  }
}

bool matricesTienenIgualesDimensiones(List<List<dynamic>> matrizUno, List<List<dynamic>> matrizDos){
  final primeraDimensionDeLaMatrizUno = primeraDimension(matrizUno);
  final segundaDimensionDeLaMatrizUno = segundaDimension(matrizUno);
  final primeraDimensionDeLaMatrizDos = primeraDimension(matrizDos);
  final segundaDimensionDeLaMatrizDos = segundaDimension(matrizDos);

  var noHayErrores = primeraDimensionDeLaMatrizUno != false &&
                     segundaDimensionDeLaMatrizUno != false &&
                     primeraDimensionDeLaMatrizDos != false &&
                     segundaDimensionDeLaMatrizDos != false;
  
  if(noHayErrores){
    final tienenIgualesDimensiones =  primeraDimensionDeLaMatrizUno == primeraDimensionDeLaMatrizDos &&
                                      segundaDimensionDeLaMatrizUno == segundaDimensionDeLaMatrizDos;
    if(tienenIgualesDimensiones){
      return true;
    }else{
      return false;
    }
}else{
  return false;
}
  }

bool tienenLosMismosElementos(List<List<num>> matrizUno, List<List<num>> matrizDos){
  final primeraDimension = matrizUno.length;
  final segundaDimension = matrizUno[0].length;
  var banderaSonIguales = true;
  for(var i = 0; i < primeraDimension; i++){
    for(var j = 0; j < segundaDimension; j++){
      final valorActualMatrizUno = matrizUno[i][j];
      final valorActualMatrizDos = matrizDos[i][j];
      if(valorActualMatrizUno != valorActualMatrizDos){
        banderaSonIguales = false;
      }
    }
  }
  return banderaSonIguales;
}

bool compararMatrices(List<List<num>> matrizUno, List<List<num>> matrizDos){
  final tienenLasMismasDimensiones = matricesTienenIgualesDimensiones(matrizUno, matrizDos);
  if(tienenLasMismasDimensiones){
    return tienenLosMismosElementos(matrizUno, matrizDos);
  }else{
    return false;
  }
}

///////////////////////////////////////////////////////////////////////////////

bool verificarSiLaMatrizEsCuadrada(List<List<num>> matrizUno){
  final matrizUnoPrimeraDimension = primeraDimension(matrizUno);
  final matrizUnoSegundaDimension = segundaDimension(matrizUno);
  if(matrizUnoPrimeraDimension != matrizUnoSegundaDimension){
    return false;
  }else{
    return true;
  }
}

cambiarLasDiagonales(){
  var matrizUno = [
   [1, 2, 3,  4],
   [4, 5, 6,  7],
   [7, 8, 9, 10],
   [10,11,12,13]
];
print(matrizUno[0]);
print(matrizUno[1]);
print(matrizUno[2]);
print(matrizUno[3]);

  final esUnaMatrizCuadrada = verificarSiLaMatrizEsCuadrada(matrizUno);
  final indiceElemento14 = matrizUno[0].length - 1;
  final indiceElemento23 = matrizUno[1].length - 2;
  final indiceElemento32 = matrizUno[2].length - 3;
  final indiceElemento41 = matrizUno[3].length - 4;
  if(esUnaMatrizCuadrada){
    var elementoA11 = matrizUno[0][0];
    var elementoA14 = matrizUno[0][indiceElemento14];
    var elementoA22 = matrizUno[1][1];
    var elementoA23 = matrizUno[1][indiceElemento23];
    var elementoA33 = matrizUno[2][2];
    var elementoA32 = matrizUno[2][indiceElemento32];
    var elementoA44 = matrizUno[3][3];
    var elementoA41 = matrizUno[3][indiceElemento41];

    var indiceElementoA11 = matrizUno[0].indexOf(elementoA11);
    var indiceElementoA14 = matrizUno[0].indexOf(elementoA14);
    var indiceElementoA22 = matrizUno[1].indexOf(elementoA22);
    var indiceElementoA23 = matrizUno[1].indexOf(elementoA23);
    var indiceElementoA33 = matrizUno[2].indexOf(elementoA33);
    var indiceElementoA32 = matrizUno[2].indexOf(elementoA32);
    var indiceElementoA44 = matrizUno[3].indexOf(elementoA44);
    var indiceElementoA41 = matrizUno[3].indexOf(elementoA41);

    matrizUno[0].removeAt(indiceElementoA11);
    matrizUno[0].insert(indiceElementoA11,elementoA14);
    matrizUno[0].removeAt(indiceElementoA14);
    matrizUno[0].insert(indiceElementoA14,elementoA11);

    matrizUno[1].removeAt(indiceElementoA22);
    matrizUno[1].insert(indiceElementoA22,elementoA23);
    matrizUno[1].removeAt(indiceElementoA23);
    matrizUno[1].insert(indiceElementoA23,elementoA22);

    matrizUno[2].removeAt(indiceElementoA33);
    matrizUno[2].insert(indiceElementoA33,elementoA32);
    matrizUno[2].removeAt(indiceElementoA32);
    matrizUno[2].insert(indiceElementoA32,elementoA33);

    matrizUno[3].removeAt(indiceElementoA44);
    matrizUno[3].insert(indiceElementoA44,elementoA41);
    matrizUno[3].removeAt(indiceElementoA41);
    matrizUno[3].insert(indiceElementoA41,elementoA44);

    print('El resultado de cambiar las diagonales es:');
    print(matrizUno[0]);
    print(matrizUno[1]);
    print(matrizUno[2]);
    print(matrizUno[3]);
  }
}

main(){
  cambiarLasDiagonales();
}

determinarSiDosMatricesSonIguales(){
  final matrizUno = [
    [3,3],
    [3,2]
  ];
  final matrizDos = [
    [3,3],
    [3,3]
  ];
  var resultado = compararMatrices(matrizUno, matrizDos);
  if(resultado != true){
    print('Las matrices NO son iguales');
  }else{
    print('Las matrices SI son iguales');
  }
}

