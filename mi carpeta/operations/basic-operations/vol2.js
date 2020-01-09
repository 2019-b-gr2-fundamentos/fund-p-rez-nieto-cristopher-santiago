module.exports = function (radioEsfera){
    const radioCuboEsfera = radioEsfera * radioEsfera * radioEsfera;
    return 4 / 3 * 3.1416 * radioCuboEsfera;
}