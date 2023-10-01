// ARRAY PARA LOS RESULTADOS //
const resultados = [];

// FUNCION PARA ACTUALIZAR LA TABLE SEGUN VAYAN TERMINANDO LOS PROCESOS //
const actualizarTabla = () => {

  // ORDENAR RESULTADOS POR TIEMPO EN ORDEN ASCENDENTE //
  resultados.sort((a, b) => a.tiempo - b.tiempo);

  // OBTENER LA TABLA //
  const tabla = document.querySelector('table');
  const tbody = tabla.querySelector('tbody');

  // LIMPIAR LA TABLA ACTUAL //
  tbody.innerHTML = '';

  // REINICIAR LA POSICIÓN //
  let posicion = 1;

  // AGREGAR FILAS ORDENADAS A LA TABLA //
  resultados.forEach((resultado) => {

    const fila = document.createElement('tr');
    const celdaPosicion = document.createElement('td');
    const celdaAlgoritmo = document.createElement('td');
    const celdaTiempo = document.createElement('td');

    celdaPosicion.textContent = posicion++;
    celdaAlgoritmo.textContent = resultado.algoritmo;
    celdaTiempo.textContent = resultado.tiempo.toFixed(4);

    fila.appendChild(celdaPosicion);
    fila.appendChild(celdaAlgoritmo);
    fila.appendChild(celdaTiempo);
    tbody.appendChild(fila);

  });

}

// GENERA UN ARREGLO DE PRUEBA //
const arreglo = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 50));

// CREAR WEB WORKERS PARA CADA ALGORITMO //
const workerBusquedaSecuencial = new Worker('js/busqueda-secuencial.js');
const workerBusquedaBinaria = new Worker('js/busqueda-binaria.js');
const workerOrdenamientoBurbuja = new Worker('js/ordenamiento-burbuja.js');
const workerQuickSort = new Worker('js/quick-sort.js');
const workerMetodoInsercion = new Worker('js/metodo-insercion.js');

// MANEJAR MENSAJES DE LOS WEB WORKERS //
workerBusquedaSecuencial.onmessage = (event) => {
  const tiempoEnMilisegundos = event.data;
  const tiempoEnSegundos = tiempoEnMilisegundos / 1000;
  resultados.push({ algoritmo: 'Búsqueda Secuencial', tiempo: tiempoEnSegundos });
  actualizarTabla();
};

// MANEJAR MENSAJES DE LOS WEB WORKERS //
workerBusquedaBinaria.onmessage = (event) => {
  const tiempoEnMilisegundos = event.data;
  const tiempoEnSegundos = tiempoEnMilisegundos / 1000;
  resultados.push({ algoritmo: 'Búsqueda Binaria', tiempo: tiempoEnSegundos });
  actualizarTabla();
};

// MANEJAR MENSAJES DE LOS WEB WORKERS //
workerOrdenamientoBurbuja.onmessage = (event) => {
  const tiempoEnMilisegundos = event.data;
  const tiempoEnSegundos = tiempoEnMilisegundos / 1000;
  resultados.push({ algoritmo: 'Ordenamiento de la Burbuja', tiempo: tiempoEnSegundos });
  actualizarTabla();
};

// MANEJAR MENSAJES DE LOS WEB WORKERS //
workerQuickSort.onmessage = (event) => {
  const tiempoEnMilisegundos = event.data;
  const tiempoEnSegundos = tiempoEnMilisegundos / 1000;
  resultados.push({ algoritmo: 'Quick Sort', tiempo: tiempoEnSegundos });
  actualizarTabla();
};

// MANEJAR MENSAJES DE LOS WEB WORKERS //
workerMetodoInsercion.onmessage = (event) => {
  const tiempoEnMilisegundos = event.data;
  const tiempoEnSegundos = tiempoEnMilisegundos / 1000;
  resultados.push({ algoritmo: 'Método de Inserción', tiempo: tiempoEnSegundos });
  actualizarTabla();
};

// ENVIAR DATOS A LOS WEB WORKERS //
workerBusquedaSecuencial.postMessage({ arreglo, elemento: arreglo[0] });
workerBusquedaBinaria.postMessage({ arreglo, elemento: arreglo[0] });
workerOrdenamientoBurbuja.postMessage({ arreglo: [...arreglo] });
workerQuickSort.postMessage({ arreglo: [...arreglo] });
workerMetodoInsercion.postMessage({ arreglo: [...arreglo] });