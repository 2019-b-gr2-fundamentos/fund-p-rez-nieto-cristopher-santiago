
// Programa para saber si pierdo la meteria, la apruebo o tengo que dar supletorio
const calificacionString = prompt("Inserte su calificacion");
const calificacion = Number(calificacionString);
if (calificacion >= 0 && calificacion <= 9){
    console.log("Usted ha reprobado la materia");
}else {
if (calificacion > 9 && calificacion < 14){
    console.log("Puede presentarse al examen supletorio");
}else {
if (calificacion >= 14 && calificacion <= 20){
    console.log("FELICITACIONES, usted ha aprobado la materia");
}else {
if (calificacion < 0 && calificacion > 20){
    console.log("Calificacion invalida");
}else{
    console.log("Por favor, ingrese una calificacion");
}
}
}
}


// Programa para saber si le gustas a alguien
const amorPorMiString = prompt("Inserte numero de horas que tarda en responder");
const meAma = Number(amorPorMiString);
if (meAma >= 0 && meAma <= 1){
    console.log("Hay una gran posibilidad que le gustes");
}else{
if (meAma > 1 && meAma <= 3){
    console.log("Las posibilidades que les gustes son medianas");    
}else {
if (meAma > 3 && meAma < 12){
    console.log("Mejor ve buscando a alguien mas :/");
}else {
if (meAma > 12 && meAma <= 24){
    console.log("No le gustas");
}else {
if (meAma > 24){
    console.log("Definitivamente no le gustas");
}else {
if (meAma < 0){
    console.log("Ingrese un numero de horas valido");
}else console.log("Intente de nuevo");
}
}
}
}
}
    
//Programa para determinar si su salud es buena en funcion del agua que consume y el deporte que realiza.
const aguaString = prompt("Litros de agua que toma al dia");
const ejercicioString = prompt("Minutos de ejercicio diarios");
//VARIABLES PARA EL AGUA
const aguita = Number(aguaString);
const aguaSaludable = aguita >= 2 && aguita <= 3;
const aguaNoTanSaludable1 = aguita < 2 && aguita >= 1; 
const aguaNoTanSaludable2 = aguita > 3 && aguita <= 6;
const aguitaNoTanSaludable = aguaNoTanSaludable1 || aguaNoTanSaludable2;
const aguaNadaSaludable = aguita >= 0 && aguita < 1;
const demasiadaAgua = aguita > 6 && aguita <= 10;
//VARIABLES PARA EL DEPORTE
const deporte = Number(ejercicioString);
const deporteSaludable = deporte >= 30 && deporte <= 60;
const deporteNoTanSaludable1 = deporte < 30 && deporte >= 10;
const deporteNoTanSaludable2 = deporte >= 60 && deporte <= 120;
const deporteNoTanSaludable = deporteNoTanSaludable1 || deporteNoTanSaludable2;
const deporteNadaSaludable = deporte >= 0 && deporte <= 10;
const demasiadoDeporte = deporte > 120 && deporte <= 180;
//UNA U OTRA DE AGUA O DEPORTE 
const sport = deporteSaludable || deporteNoTanSaludable || deporteNadaSaludable || demasiadoDeporte;
const water = aguaSaludable || aguitaNoTanSaludable || aguaNadaSaludable || demasiadaAgua;

if (aguita < 0 || deporte < 0){
    console.log("Inserte valores validos");
}else {
if (aguita > 10 && sport){
    console.log("Usted consume demasiada agua");
}else {
if (water && deporte > 180){
    console.log("Usted realiza demasiado deporte");
}else {
if (aguita > 10 && deporte > 180){
    console.log("Usted realiza demasiado deporte y consume demasiada agua");
}else {
if (aguaSaludable && deporteSaludable){
    console.log("Usted es una persona muy saludable");
}else {
if (aguaNadaSaludable && deporteNadaSaludable){
    console.log("Debería cuidar mejor su salud");
}else {
if (demasiadoDeporte && demasiadaAgua){
    console.log("Usted es una persona sana, pero modere sus horas de ejercicio y su consumo de agua");
}else {
if (aguaSaludable && demasiadoDeporte){
    console.log("Usted es una persona saludable, pero modere sus horas de deporte");
}else {
if (demasiadaAgua && deporteSaludable){
    console.log("Usted es una persona saludable, pero modere su consumo de agua");
}else {
if (aguitaNoTanSaludable && deporteNoTanSaludable){
    console.log("Usted es una persona saludable");
}else {
if (aguaNadaSaludable && deporteNoTanSaludable){
    console.log("Consuma agua urgentemente!");
}else {
if (aguitaNoTanSaludable && deporteNadaSaludable){
    console.log("Realize deporte urgentemente!");
}else {
if (aguitaNoTanSaludable && deporteSaludable){
    console.log("Usted es una persona saludable");
}else {
if (aguaSaludable && deporteNoTanSaludable){
    console.log("Usted es una persona saludable");
}else {
if (aguaSaludable && deporteNadaSaludable){
    console.log("Realice más deporte");
}else {
if (aguaNadaSaludable && deporteSaludable){
    console.log("Consuma mas agua");
}else {
    console.log("Intente de nuevo");
}
}
}
}
}    
}
}
}
}
}
}
}
}
}
}
}


