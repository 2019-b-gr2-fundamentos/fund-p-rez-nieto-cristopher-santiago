// STRINGS \"Adios Mundo\"
const mensaje = "\"Hola Mundo\"";
const saludo = '\'\Adio\s Mundo\'';
console.log(mensaje + "1\t\t\t 222\r\r\r 3\n" + saludo);
//tenplate stirngs
const edad = 30;
const saludoEdad = `Mi edad es: \n${edad}`;
const saludoCompleto = `${mensaje} \n ${saludo}`;
console.log(saludoEdad);
console.log(saludoCompleto);
// Contamos los elementos 
const nombreLongitud = "cristopher santiago";
console.log(nombreLongitud.length);
// Eliminar espacios al principio y al final (Dependiendo el lenguaje hay diferentes trims)
console.log(nombreLongitud.trim());
// Cambiar a mayúsculas y minusculas
console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());

//console.log(nombreLongitud.replace("e","o"));
//console.log(nombreLongitud.replace("i","o"));
//console.log(nombreLongitud.replace("\n",""));

/*
console.log(nombreLongitud.replace);
console.log(nombreLongitud.replace("x","o"));
console.log(nombreLongitud.replace);
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud.replace);
console.log(nombreLongitud.search("t")); // posicion en las que esta la letra
console.log(nombreLongitud.search("x")); // -1
console.log(nombreLongitud.search("santiago")); //el serch empieza en el 0
*/

console.log(nombreLongitud.slice(0,9)); // sirve para sacar un pedazo del string
console.log(nombreLongitud.indexOf("a")); 
console.log(nombreLongitud.indexOf("x")); 

//console.log(nombreLongitud.includes("x")); // includes devuelve un booleano 
console.log(nombreLongitud.indexOf(" ")); // includes devuelve un booleano 

console.log(nombreLongitud.endsWith("x")); //devuelve un booleano
console.log(nombreLongitud.startsWith("cris")); // devuelve un booleano

console.log(nombreLongitud.substring(0,10)); //una parte de la string
console.log(nombreLongitud.slice(0,10)); //devuelce una parte de la string