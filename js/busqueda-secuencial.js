const busquedaSecuencial = (arr, value) => {
   
    for (let i = 0; i < arr.length; i++) {

        if(value == arr[i]){

            return i;

        }

    }

    return;
    
}

self.onmessage = (event) => {

    const startTime = performance.now();

    busquedaSecuencial(event.data.arreglo, event.data.elemento);

    const endTime = performance.now();

    const tiempoTranscurrido = endTime - startTime;

    self.postMessage(tiempoTranscurrido);

}