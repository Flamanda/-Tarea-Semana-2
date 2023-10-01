const ordenamientoBurbuja = (arr) => {

    let len, i, k, aux;

    len = arr.length;

    for (k = 1; k < len; k++) {

        for (i = 0; i < (len - k); i++) {

            if (arr[i] > arr[i + 1]) {

                aux = arr[i];

                arr[i] = arr[i + 1];

                arr[i + 1] = aux;

            }

        }
        
    }
    
    return arr;
    
}

self.onmessage = (event) => {

    const startTime = performance.now();

    ordenamientoBurbuja(event.data.arreglo, event.data.elemento);

    const endTime = performance.now();

    const tiempoTranscurrido = endTime - startTime;

    self.postMessage(tiempoTranscurrido);

}