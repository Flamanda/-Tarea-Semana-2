const busquedaBinaria = (arr, value) => {

  let first = 0;

  let last = arr.length - 1;

  let position = -1;

  let found = false;

  let middle;

  while (found === false && first <= last) {

    middle = Math.floor((first + last)/2);

    if (arr[middle] == value) {

      found = true;

      position = middle;

    } else if (arr[middle] > value) {

      last = middle - 1;

    } else {

      first = middle + 1;

    }

  }

  return position;
  
}

self.onmessage = (event) => {

  const startTime = performance.now();

  busquedaBinaria(event.data.arreglo, event.data.elemento);

  const endTime = performance.now();

  const tiempoTranscurrido = endTime - startTime;

  self.postMessage(tiempoTranscurrido);
  
}