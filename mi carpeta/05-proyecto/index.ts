//NODE MODULES
// const sumaLibreria = require('libreria_cris/lib/suma');

//Importar todo el contenido con el nombre 'sumaLibreria' del paquete 'libreria_cris/lib/suma'
import * as sumaLibreria from 'libreria_cris/lib/suma';

const respuesta = sumaLibreria(1,2);
console.log('la respuesta es:', respuesta);


