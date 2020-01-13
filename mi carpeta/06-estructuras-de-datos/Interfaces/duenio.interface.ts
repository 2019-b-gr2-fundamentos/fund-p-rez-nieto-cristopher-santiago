import { AnimalPerrito } from './animal-perrito.interface';

export interface Duenio { // interface -> definir una (Struct)
    nombres: string;
    apellidos: string;
    cedula?: string;
    fechaDeNacimiento: number; 
    mascotasPerros?: AnimalPerrito[];
}