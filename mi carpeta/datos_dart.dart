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
En dart, los arreglos (arrays) son el objeto List
 