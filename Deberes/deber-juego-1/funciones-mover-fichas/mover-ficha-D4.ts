import { generarJuego } from "../Deber-juego-1";
const matrizJuego = generarJuego();
export function moverFichaD4(){
    console.log('#  ', '1  ', '2  ', '3  ', '4  ');
    console.log('A', matrizJuego[0]);
    console.log('B', matrizJuego[1]);
    console.log('C', matrizJuego[2]);
    console.log('D', matrizJuego[3]);
}
function main(){
    moverFichaD4();
};

main();