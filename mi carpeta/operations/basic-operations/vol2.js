module.exports = function (radioEsfera){
    const pi = 3.1416;
    const constanteVolumen = 4 / 3;
    const radioCuboEsfera = radioEsfera * radioEsfera * radioEsfera;
    const volumen = constanteVolumen * pi * radioCuboEsfera;
    return volumen 
}