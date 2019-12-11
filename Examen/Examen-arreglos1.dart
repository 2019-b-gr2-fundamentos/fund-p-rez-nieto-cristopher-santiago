import 'dart:io';
List<String> main(){
  num n, m;
  String heroe;
  print('Los superheroes que seleccionara a continuacion formaran un nuevo grupo de Vengadores');
  stdout.write('Inserte el numero de Vengadores ');
  n = num.parse(stdin.readLineSync());
  m = 0;
  List <String> superHeroesMarvel = [];
  for(superHeroesMarvel; m < n; m++){
    superHeroesMarvel.add('');
  }
  m = 0;
  List <String> nuevosHeroes;
  while(m < n){
    stdout.write('Inserte un Superheroe de MARVEL ');
    heroe = stdin.readLineSync();
    superHeroesMarvel[m] = heroe;
    m = m + 1;
    nuevosHeroes = superHeroesMarvel;
  }
  print('Los Vengadores que selecciono son ${nuevosHeroes}');
  stdout.write('Escriba ON para acceder a mas funciones, escriba OFF para salir ');
  String interruptor = stdin.readLineSync();
  
  while(interruptor == 'ON'){
  print('Seleccione una accion para los Vengadores ');
  print('1-cambiar un vengador por otro');
  print('2-agregar un vengador a la lista actual');
  print('3-borrar un vengador de la lista');
  stdout.write('Selecciona una operacion ');
  num operacion = int.parse(stdin.readLineSync());
// cambiar o actualizar un registro
if(operacion == 1){
  stdout.write('Esta seguro que desea cambiar a un vengador? digite 1 para si y 0 para no! ');
  num cambio = num.parse(stdin.readLineSync());
  while(cambio == 1){
  stdout.write('Escriba el nombre del vengador que quiere reemplazar ');
  String vengadorASalir = stdin.readLineSync();
  stdout.write('Escriba el nombre del vengador que entrara como reemplzo ');
  String vengadorNuevo = stdin.readLineSync();
  final indiceVengadorSalida = nuevosHeroes.indexOf(vengadorASalir);
  nuevosHeroes[indiceVengadorSalida] = vengadorNuevo;
  print('El nuevo grupo de vengadores es ${nuevosHeroes}');
  stdout.write('Desea reemplazar otro vengador? digite 1 para si y 0 para no! ');
  cambio == num.parse(stdin.readLineSync());
  }
// agregar elementos al arreglo
}else if(operacion == 2){
  stdout.write('Esta seguro que desea agregar otro vengador? digite 1 para si y 0 para no! ');
  num aniadir = num.parse(stdin.readLineSync());
  while(aniadir == 1){
  stdout.write('Ingrese el nombre de otro SuperHeroe ');
  String otroHeroe = stdin.readLineSync();
  nuevosHeroes.add(otroHeroe);
  print('Ahora, los Vengadores son: ${nuevosHeroes}');
  stdout.write('Desea añadir otro vengador? digite 1 para si y 0 para no! ');
  aniadir = num.parse(stdin.readLineSync());
  }
// borrar registros
}else if(operacion == 3){
  stdout.write('Esta seguro que quiere eliminar un vengador de la lista? digite 1 para si y 0 para no! ');
  num borrar = num.parse(stdin.readLineSync());
  while(borrar == 'si'){
  stdout.write('Seleccione el vengador que será borrado de la lista ');
  String vengadorChasqueado = stdin.readLineSync();
  nuevosHeroes.remove(vengadorChasqueado);
  print('Los Vengadores que quedan son ${nuevosHeroes}');
  stdout.write('Desea Borrar otro vengador? digite 1 para si y 0 para no! ');
  borrar = num.parse(stdin.readLineSync());
  }
}
stdout.write('Escriba ON si quiere seguir ejecutando acciones para los Vengadores, y OFF si desea salir ');
interruptor = stdin.readLineSync();
}
print('Gracias por participar :)');
print('Los Vengadores que quedan son ${nuevosHeroes}');

}