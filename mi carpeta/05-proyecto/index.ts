//NODE MODULES
// const sumaLibreria = require('libreria_cris/lib/suma');

//Importar todo el contenido con el nombre 'sumaLibreria' del paquete 'libreria_cris/lib/suma'
import * as sumaDeber from 'libreria_operations/basic-operations/suma2';
import * as restaDeber from 'libreria_operations/basic-operations/resta2';
import * as multiplicacionDeber from 'libreria_operations/basic-operations/multiplicacion2';
import * as divisionDeber from 'libreria_operations/basic-operations/division2';
import * as ivaDeber from 'libreria_operations/basic-operations/iva2';
import * as volumenDeber from 'libreria_operations/basic-operations/vol2';
import * as promedioDeber from 'libreria_operations/basic-operations/promed';

const respuestaSuma = sumaDeber(1,2);
console.log('La respuesta para la suma de 1 + 2 es', respuestaSuma);

const respuestaResta = restaDeber(20,10);
console.log('La respuesta para la resta de 20 - 10 es', respuestaResta);

const respuestaMultiplicacion = multiplicacionDeber(10,10);
console.log('La respuesta para la multiplicacion de 10 * 10 es', respuestaMultiplicacion); 

const respuestaDivision = divisionDeber(10,10);
console.log('La respuesta para la division de 10 / 10 es', respuestaDivision); 

const respuestaIva = ivaDeber(100);
console.log('Tiene que pagar', respuestaIva, 'Por su prestamo de 100 dolares'); 

const respuestaPromedio = promedioDeber(20,10);
console.log('El promedio entre 20 y 10 es', respuestaPromedio); 

const respuestaVolumen = volumenDeber(10);
console.log('el volumen de una esfera de radio 10 es', respuestaMultiplicacion); 
