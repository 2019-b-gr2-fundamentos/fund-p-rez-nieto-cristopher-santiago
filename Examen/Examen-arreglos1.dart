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
    
  }

}