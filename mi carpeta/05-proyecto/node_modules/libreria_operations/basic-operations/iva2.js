module.exports = function (numUno){
    const iva = 0.12;
    const valorASumar = numUno * iva;
    return numUno + valorASumar;
}