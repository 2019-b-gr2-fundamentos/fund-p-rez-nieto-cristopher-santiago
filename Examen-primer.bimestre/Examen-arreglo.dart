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
  while(desicion == 'SI'){
    if(desicion == 'SI'){
     while(desicion == 'SI'){
       num desicion3;
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
       stdout.write('Desea realizar algun otro cambio? Digite 1 para continuar o 0 para salir');
       desicion3 = num.parse(stdin.readLineSync());
       if(desicion3 == 0){
         print('Gracias por participar');
         print('El grupo de Vengadores que creo es ${nuevosHeroes}');
       }else if(desicion3 == 1){
     if (blipeado == 2){
       stdout.write('Inserte el nombre del SuperHeroe que formara parte del grupo de Vengadores ');
       heroeActualizado = stdin.readLineSync();
       stdout.write('Seleccione al heroe que desea dejar fuera de los Vegadores ');
       heroeSustituido = stdin.readLineSync();
       nuevosHeroes[nuevosHeroes.indexOf(heroeSustituido)] = nuevosHeroes[nuevosHeroes.indexOf(heroeActualizado)];
       print('Su nueva lista de Vengadores es: ${nuevosHeroes}');
       stdout.write('Desea realizar algun otro cambio? Digite 1 para continuar o 0 para salir');
       desicion3 = num.parse(stdin.readLineSync());
       if(desicion3 == 0){
         print('Gracias por participar');
         print('El grupo de Vengadores que creo es ${nuevosHeroes}');
       }else if(desicion3 == 1){
         desicion == 'NO';
       }
     }
     }
     }
     }
    }
    }
  }
  if(desicion == 'NO'){
      num segundaDecision;
     print('Puede borrar a un SuperHeroe de la lista de Vengadores actuales o puede cambiar a un vengador');
     print('Al digitar 1 hara que Thanos chasquee los dedos y borre a un vengador');
     print('Al digitar 2 podra cambiar al vengador que prefiera');
     print('Al digitar 0 podra salir');
     stdout.write('Que desea hacer? ');
     blipeado = num.parse(stdin.readLineSync());
     if(blipeado == 0){
       desicion == 'SI';
       print('Gracias por participar');
       print('El grupo de Vengadores que creo es ${nuevosHeroes}');
     }else if (blipeado == 1){
       stdout.write('Seleccione al vengador que quiere que Thanos elimine ');
       heroeChasqueado = stdin.readLineSync();
       nuevosHeroes.remove(heroeChasqueado);
       print('Thanos a eliminado a ${heroeChasqueado}');
       print('Los Vengadores que quedan son ${nuevosHeroes}');
       stdout.write('Desea realizar algun otro cambio? Digite 1 para continuar, 0 para salir ');
       segundaDecision = num.parse(stdin.readLineSync());
       if(segundaDecision == 0){
         print('Gracias por participar');
         print('El grupo de Vengadores que creo es ${nuevosHeroes}');
       }else{
      print('Puede borrar a un SuperHeroe de la lista de Vengadores actuales o puede cambiar a un vengador');
     print('Al digitar 1 hara que Thanos chasquee los dedos y borre a un vengador');
     print('Al digitar 2 podra cambiar al vengador que prefiera');
     print('Al digitar 0 podra salir');
     stdout.write('Que desea hacer? ');
     blipeado = num.parse(stdin.readLineSync());
      if(blipeado == 2){
       stdout.write('Seleccione al heroe que desea dejar fuera de los Vegadores ');
       heroeSustituido = stdin.readLineSync();
       num indiceDelHeroeQueSale = nuevosHeroes.indexOf(heroeSustituido);
       stdout.write('Inserte el nombre del SuperHeroe que formara parte del grupo de Vengadores ');
       heroeActualizado = stdin.readLineSync();
       nuevosHeroes[indiceDelHeroeQueSale] = heroeActualizado;
       print('Su nueva lista de Vengadores es: ${nuevosHeroes}'); 
       stdout.write('Desea realizar algun otro cambio? Digite 1 para continuar, 0 para salir ');
       segundaDecision = num.parse(stdin.readLineSync());
       if(segundaDecision == 0){
         print('Gracias por participar');
         print('Los Vengadores que quedan son ${nuevosHeroes}');
     }else if(segundaDecision == 1){
       desicion == 'NO';
     }
     }
     }
     }

       }
     
}

  

  
 


  