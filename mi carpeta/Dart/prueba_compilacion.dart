/*
sumarLasFilasDeUnaMatriz(){
  final matrizUno = [
    [1,2,3],
    [4,5,6],
  ];
  for(var f = 0; f < matrizUno.length; f++){
    for(var c = 0; c < matrizUno.length; c++){
      var filaActual = matrizUno[f];
      var elementoActual = matrizUno[f][c];
      var indicePrimerElemento = matrizUno[c].indexOf(elementoActual);
      final primerElemento = elementoActual;

    }
    
  }
}
*/
/*
void main(){
  List<num> matrizUno = [1,2,3];
  matrizUno.removeAt(0);
  matrizUno.insert(0,3);
  matrizUno.removeAt(2);
  matrizUno.insert(2,1);
  print(matrizUno);

}
*/


functionFibonacci(){
  var serie = [1,2,3,4,5];
  var elemento = 0;
  for(var i = 0; i < serie.length; i++){
    var elementoActual = serie[i];
    elemento = elemento + elementoActual;
    print(elemento);
  }
}



main(){
  functionFibonacci();
}

  



