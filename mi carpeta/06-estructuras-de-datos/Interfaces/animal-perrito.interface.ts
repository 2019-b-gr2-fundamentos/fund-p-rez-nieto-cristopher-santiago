import { Duenio } from './duenio.interface';
// ./ -> relativo a donde esta el archivo

export interface AnimalPerrito{ // interface -> definir una (Struct)
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number; // opcional
    // hijos: null,
    perritas?: string[]; // asi se tipa el arreglo de strings // opcinal
    vacunado?: boolean; // opcional
    duenio?: Duenio;
}