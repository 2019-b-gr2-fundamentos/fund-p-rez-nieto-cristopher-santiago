//NODE MODULES
// const sumaLibreria = require('libreria_cris/lib/suma');
//Importar todo el contenido con el nombre 'sumaLibreria' del paquete 'libreria_cris/lib/suma'
var sumaDeber = require('libreria_operations/basic-operations/suma2');
var restaDeber = require('libreria_operations/basic-operations/resta2');
var multiplicacionDeber = require('libreria_operations/basic-operations/multiplicacion2');
var divisionDeber = require('libreria_operations/basic-operations/division2');
var ivaDeber = require('libreria_operations/basic-operations/iva2');
var volumenDeber = require('libreria_operations/basic-operations/vol2');
var promedioDeber = require('libreria_operations/basic-operations/promed');
var PI = require('libreria_operations/basic-operations/pi');
var respuestaSuma = sumaDeber(1, 2);
console.log('La respuesta para la suma de 1 + 2 es', respuestaSuma);
var respuestaResta = restaDeber(20, 10);
console.log('La respuesta para la resta de 20 - 10 es', respuestaResta);
var respuestaMultiplicacion = multiplicacionDeber(10, 10);
console.log('La respuesta para la multiplicacion de 10 * 10 es', respuestaMultiplicacion);
var respuestaDivision = divisionDeber(10, 10);
console.log('La respuesta para la division de 10 / 10 es', respuestaDivision);
var respuestaIva = ivaDeber(100);
console.log('Tiene que pagar', respuestaIva, 'Por su prestamo de 100 dolares');
var respuestaPromedio = promedioDeber(20, 10);
console.log('El promedio entre 20 y 10 es', respuestaPromedio);
var respuestaVolumen = volumenDeber(10);
console.log('el volumen de una esfera de radio 10 es', respuestaVolumen);
console.log('La constante pi es:', PI);
