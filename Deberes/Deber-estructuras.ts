import * as prompts from 'C:/Users/USRLAM.LABFIS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts;
//import * as prompts from 'C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts';
 
async function obtenerDatosSuperHeroes(){
     const infoSuperHeros = [
        {
             type: 'text',
             name: 'Nombre',
             message: 'Inserte su nombre real'
        },
        {
            type: 'text',
            name: 'SuperHeroe',
            message: 'Cual es su nombre de Super Heroe'
        },
        {
            type: 'number',
            name: 'Universo',
            message: 'Universo al que pertenece'
        },
        {
            type: 'text',
            name: 'Grupo',
            message: 'Inserte los grupos a los que pertenece'
        },
        {
            type: 'text',
            name: 'SuperPoder',
            message: 'Cual es su superpoder?'
        }
    ];
    const infoDelPersonaje = await prompts(infoSuperHeros);
    console.log('informacion del personaje', infoDelPersonaje);


}


    //const pregunta3 = await prompts(preguntaLeer);
    //const pregunta4 = await prompts(preguntaActualizar);
    //const pregunta5 = await prompts(preguntaEliminar);
    //const exit = await prompts(salir);




function main(){
     obtenerDatosSuperHeroes().then().catch();
 }
 main();

