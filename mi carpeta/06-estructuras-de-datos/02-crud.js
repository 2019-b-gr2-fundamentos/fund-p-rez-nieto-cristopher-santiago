// 02-crud.ts create read update delete
// const propmts = require('prompts');
var prompts = require('prompts');
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(function (datos) {
        console.log('datos', datos); // AQUI PUEDO SEGUIR
        ////////
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        promesaNombre
            .then(function (datosNombre) {
            console.log('datos', datosNombre); // AQUI PUEDO SEGUIR
        })
            .catch(function (error) {
            console.log('Error', error);
        });
        ///////
    })
        .catch(function (error) {
        console.log('Error', error);
    });
    console.log('Fin');
}
main();
