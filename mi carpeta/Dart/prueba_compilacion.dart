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
print(arreglo[0]);
print(arreglo[1]);
print(arreglo[0].runtimeType);
print(arreglo[1].runtimeType);
var esUnArreglo = 'List<num>' != arreglo[0].runtimeType;
print(esUnArreglo);
if(esUnArreglo){
  print('${arreglo[0]} es un arreglo');
}else{
  print('No es un arreglo');
}
for(var i = 0; i < arreglo.length; i++){
  var filaActual = arreglo[i];
  print(arreglo.indexOf(filaActual));
}

}
