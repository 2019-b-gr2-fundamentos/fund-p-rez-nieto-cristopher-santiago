import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";

function main(){

    const textoLeido = leerArchivo('./ejemplo.txt');

    const  nuevoContenido = 'Tengo Hambre :( \n ';
    escribirArchivo('./ejemplo.txt','');
    console.log(textoLeido + nuevoContenido);
}

main();