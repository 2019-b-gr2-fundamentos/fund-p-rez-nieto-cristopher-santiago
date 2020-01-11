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

main(){
  determinarSiDosMatricesSonIguales();
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

