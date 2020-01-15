function sumarFilas(){
    let matriz = [
      [1,2,3],
      [4,5,6]
    ];
    let matrizSuma = [];
    let elemento = 0;
    for(let i = 0; i < matriz[0].length; i++){ // i < 3
      let j = 0;
      for( j = 0; j < matriz.length; i++){  // j < 2
        let elementoActual = matriz[j][i];
        elemento = elemento + elementoActual;
        if(j != 1){
          matrizSuma = matrizSuma;
        }else{
          matrizSuma.push(elementoActual);
        }
      }
      console.log(matrizSuma);
    }
  }

  sumarFilas();