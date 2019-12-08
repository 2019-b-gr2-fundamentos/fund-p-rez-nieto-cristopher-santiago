import 'dart:convert';
import 'dart:io';

main() {
  final nombre = 'Your name';
    print(nombre);
    var line = stdin.readLineSync(encoding: Encoding.getByName(nombre));
    print(line.trim() == '2' ? 'Yup!' : 'Nope :(');
}