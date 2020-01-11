/*
bool validarLosElementosDeLasMatrices(List<dynamic> matriz){
  // Para declarar un for loop:
  for(var i = 0; i < matriz.length; i++){
    var filaActual = matriz[i];
    var esUnaMatriz = filaActual.runtimeType == 'List<dynamic>';
    if (!esUnaMatriz){
      return false;
    }
    }
        return true;
  }



validar(){
  var x = [
    [1,1],
    [2,2]
  ];
  var y = [
    [1,1],
    [2,2]
  ];
  var xEsUnaMatriz = validarLosElementosDeLasMatrices(x);
  var yEsUnaMatriz = validarLosElementosDeLasMatrices(y);

  print(xEsUnaMatriz); // true
  print(yEsUnaMatriz); // true 

}


main(){
  validar();
}
*/


void main(){
  
  List<List<num>> arreglo = [
  [1,2,3],
  [4,5,6]
];

for(var i = 0; i <= arreglo[0].length; i++){
  var filaActual = arreglo[i];
  for(var j = 0; j <= arreglo.length; j++){
    var valorActual = filaActual[j];
    print(valorActual);
  }
}
print('esos son los numeros de la matriz');
}


