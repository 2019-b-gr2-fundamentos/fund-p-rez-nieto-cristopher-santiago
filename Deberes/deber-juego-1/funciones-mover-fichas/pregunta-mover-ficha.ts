//import * as prompts from 'C:/Users/USREPS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts'
//import * as prompts from 'C:/Users/USRLAM.LABFIS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/07-archivos/node_modules/prompts';
//import * as prompts from 'C:/Users/sampe_000/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts';
import * as prompts from 'C:/Users/USREPS/Documents/GitHub/fund-p-rez-nieto-cristopher-santiago/mi carpeta/06-estructuras-de-datos/node_modules/prompts'
export async function preguntarMoverFicha(){
    const pregunta = await prompts( {
        type: 'text',
        name: 'respuesta',
        message: '¿Que ficha desea mover?'
    });
    return pregunta.respuesta
};