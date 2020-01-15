// 02-crud.ts create read update delete
// const propmts = require('prompts');
import * as prompts from 'prompts';

function main(){
    obtenerDatosAnimalPerrito();
}

function obtenerDatosAnimalPerrito(){
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({ //PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    })
console.log(promesaEdad);
promesaEdad
    .then( //OK
        (datos)=>{
            console.log('datos',datos); // AQUI PUEDO SEGUIR

            ////////
            const promesaNombre = prompts({ //PROMESA
                type: 'text',
                name: 'nombre',
                message: 'Puedes darme tu nombre?'
            })
            promesaNombre
                .then( //OK
                    (datosNombre)=>{
                        console.log('datos',datosNombre); // AQUI PUEDO SEGUIR
                }
            )
            .catch( // =(
                (error)=>{
                    console.log('Error', error);
                }
            )
            ///////
        }
    )
    .catch( // =(
        (error)=>{
            console.log('Error', error);
        }
    )
    console.log('Fin');



}
main();