const metodoInsercion = (arr) => {

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];

        let j;

        for(j=i-1; j >= 0 && arr[j] > current; j--) {

            arr[j + 1] = arr[j]

        }

        arr[j + 1] = current;

    }

    return arr;

}

self.onmessage = (event) => {

    const startTime = performance.now();

    metodoInsercion(event.data.arreglo, event.data.elemento);

    const endTime = performance.now();

    const tiempoTranscurrido = endTime - startTime;

    self.postMessage(tiempoTranscurrido);

}