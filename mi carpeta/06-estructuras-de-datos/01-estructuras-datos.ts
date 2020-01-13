
import { AnimalPerrito } from './Interfaces/animal-perrito.interface';
import { Duenio } from './Interfaces/duenio.interface';

// boolean
// string
// null -> object
// number
// PERSONA

// Casi en todos los lenguajes
// Struct -> Estructura de datos 
// Clase -> Estructura de datos -> metodos 

// ANIMAL -> nombre cientifico, color principal, 
// fecha de nacimiento, peso, genero, altura

const edad = 20;
const ejemploEstructura = {
    'nombreCientifico': 'canis lupos familiaris', // no es necesario las comillas dobles para las llaves 
    "llave": "valor",
    enojo: undefined,
    poliPerro: edad, // variables 
    noEsNecesario: true, //Se puede poner la ultima coma}
}
// Estructura de datos en lenguaje NO TIPADO
const poliPerro = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Grandote',
    clan: 'PoliPerro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela','Zoraida'],
    vacunado: true,
}

console.log(poliPerro.nombre);

// Estructura de datos en un lenguaje TIPADO
const poliPerroAmarillo: AnimalPerrito = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Amarillo',
    clan: null, // A cualquier propiedad de la Struc se puede poner "null"
    // edad: 4,
    // hijos: null,
    // perritas: [],
    // vacunado: false,
}
const duenioPoliPerroAmarillo: Duenio = {
    nombres: 'Cristopher',
    apellidos: '',
    fechaDeNacimiento: 2,
    mascotasPerros: [ poliPerroAmarillo ]
}

poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.edad = 4;
poliPerroAmarillo.vacunado = true;

// Acceder a las propuiedades de una estructura de datos
console.log(poliPerroAmarillo.duenio.nombres);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.nombre);
console.log(poliPerroAmarillo.edad);

