/*
Nomrbe: Cristopher Pérez
Fecha de actualización: 21/10/2019
Descripción: Tipos de datos de Dart

NUMEROS:
int    -> Para un numero entero, que no contiene decimales
        Ejm: 1444
double -> Para un numero qyue contiene decimales
        Ejm: 3.1416154564542
num    -> Sirve para que la variable sea int o double, el interprete puede escoger el tipo de dato más optimo
        Ejm: 1444 o 3.141656454531
// num es algo parecido a var pero es solamente valida para numeros

BOOLEANOS 
bool   -> Puede tomar dos valores: true o false 

CADENAS DE TEXTO
String -> el valor de la variable debe estar entre comillas
      Concatenar cadenas -> puede ser o no con un +, epro se recomienda utilizar el +
                            Ejm: String concatenar = "Holas" + "Cristopher"
Podemos evadir caracteres especiales: anteponer una r antes de comenzar la cadena.
Ejm: r"hola mundo \u2665. pero con caracteres especiales evadidos.\n ";
Para tener varias líneas en la misma variable abrir y cerrar con tres comillas simples 

LISTA
En dart, los arreglos (arrays) son el objeto List, por lo que se llaman listas
List -> E es el tipo de dato que nuestra lista va a tener. se puede usar var para una lista con diferentes tipos de datos
        Ejm: List<int> numeros = [0,1,1,2,3,5]
        Ejm: List<int> numeros = new list(6);
        Ejm: var lista = [1234, "hola", true, 3.1416];

MAPAS
Un mapa es u objeto que asocia una llave con un valor
Map -> Donde K es el tipo de dato para la llave y V es el tipo de dato para el valor.
        Ejm: Map<String, int> mapa ={
          'uno': 1
        };
        Ejm: var mapa = {
                'uno': 1
        };

FINAL Y CONST -> sirve para declarar a una variable como Inmutable, como los es const en TypeScript
STATIC
/** */
*/