const quickSort = (arr) => {

  if (arr.length <= 1) {

    return arr;

  }

  let pivot = arr[0];

  let left = []; 

  let right = [];

  for (let i = 1; i < arr.length; i++) {

    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);

  }

  return quickSort(left).concat(pivot, quickSort(right));
  
}

self.onmessage = (event) => {

  const startTime = performance.now();

  quickSort(event.data.arreglo, event.data.elemento);

  const endTime = performance.now();

  const tiempoTranscurrido = endTime - startTime;

  self.postMessage(tiempoTranscurrido);

}