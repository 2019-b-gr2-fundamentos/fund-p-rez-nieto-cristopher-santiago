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
// agregar otro elemento al arreglo
  String desicion, otroHeroe;
  String heroeChasqueado, heroeActualizado, heroeSustituido;
  num blipeado; 
  stdout.write('Desea aniadir otro superheroe?, escriba SI o NO ');
  desicion = stdin.readLineSync();
  if(desicion == 'SI'){
     while(desicion == 'SI'){
     stdout.write('Ingrese el nombre de otro SuperHeroe ');
     otroHeroe = stdin.readLineSync();
     nuevosHeroes.add(otroHeroe);
     print('Ahora, los Vengadores son: ${nuevosHeroes}');
     stdout.write('Desea aniadir otro superheroe?, escriba SI o NO ');
     desicion = stdin.readLineSync();
     if(desicion == 'NO'){
     print('Oprimar 0 para salir');
     print('Puede borrar a un SuperHeroe de la lista de Vengadores actuales o puede cambiar a un vengador');
     print('Al digitar 1 hara que Thanos chasquee los dedos y borre a un vengador');
     print('Al digitar 2 podra cambiar al vengador que prefiera');
     stdout.write('Que desea hacer? ');
     blipeado = num.parse(stdin.readLineSync());
     if (blipeado == 0){
       print('Gracias por participar');
       print('El grupo de Vengadores que creo es ${nuevosHeroes}');
     }else if (blipeado == 1){
       stdout.write('Seleccione al vengador que quiere que Thanos elimine ');
       heroeChasqueado = stdin.readLineSync();
       nuevosHeroes.remove(heroeChasqueado);
       print('Thanos a eliminado a ${heroeChasqueado}');
       print('Los Vengadores que quedan son ${nuevosHeroes}');
     }else if (blipeado == 2){
       stdout.write('Inserte el nombre del SuperHeroe que formara parte del grupo de Vengadores ');
       heroeActualizado = stdin.readLineSync();
       stdout.write('Seleccione al heroe que desea dejar fuera de los Vegadores ');
       heroeSustituido = stdin.readLineSync();
       nuevosHeroes[nuevosHeroes.indexOf(heroeSustituido)] = nuevosHeroes[nuevosHeroes.indexOf(heroeActualizado)];
       print('Su nueva lista de Vengadores es: ${nuevosHeroes}'); 
     }
     }
  }
  }else if(desicion == 'NO'){
     print('Oprimar 0 para salir');
     print('Puede borrar a un SuperHeroe de la lista de Vengadores actuales o puede cambiar a un vengador');
     print('Al digitar 1 hara que Thanos chasquee los dedos y borre a un vengador');
     print('Al digitar 2 podra cambiar al vengador que prefiera');
     stdout.write('Que desea hacer? ');
     blipeado = num.parse(stdin.readLineSync());
     if (blipeado == 0){
       print('Gracias por participar');
       print('El grupo de Vengadores que creo es ${nuevosHeroes}');
     }else if (blipeado == 1){
       stdout.write('Seleccione al vengador que quiere que Thanos elimine ');
       heroeChasqueado = stdin.readLineSync();
       nuevosHeroes.remove(heroeChasqueado);
       print('Thanos a eliminado a ${heroeChasqueado}');
       print('Los Vengadores que quedan son ${nuevosHeroes}');
     }else if (blipeado == 2){
       stdout.write('Inserte el nombre del SuperHeroe que formara parte del grupo de Vengadores ');
       heroeActualizado = stdin.readLineSync();
       stdout.write('Seleccione al heroe que desea dejar fuera de los Vegadores ');
       heroeSustituido = stdin.readLineSync();
       print(nuevosHeroes.indexOf(heroeSustituido));
       
       
       //nuevosHeroes[nuevosHeroes.indexOf(heroeSustituido)] = nuevosHeroes[nuevosHeroes.indexOf(heroeActualizado)];
       //print('Su nueva lista de Vengadores es: ${nuevosHeroes}'); 
     }
     }
     
     

  }
