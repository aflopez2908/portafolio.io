const botonCopiar1 = document.getElementById('botonCopiar');
const textoACopiar1 = document.getElementById('textoACopiar');

botonCopiar1.addEventListener('click', () => {
  // Crea un elemento de texto temporal
  const temporalInput = document.createElement('input');
  temporalInput.value = textoACopiar1.textContent;
  document.body.appendChild(temporalInput);

  // Selecciona el texto
  temporalInput.select();
  temporalInput.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el texto al portapapeles
  document.execCommand('copy');

  // Elimina el elemento temporal
  document.body.removeChild(temporalInput);

  // Mensaje de confirmación
  alert('Texto copiado: ' + textoACopiar1.textContent);
});

const botonCopiar2 = document.getElementById('botonCopiar1');
const textoACopiar2 = document.getElementById('textoACopiar1');

botonCopiar2.addEventListener('click', () => {
  // Crea un elemento de texto temporal
  const temporalInput = document.createElement('input');
  temporalInput.value = textoACopiar2.textContent;
  document.body.appendChild(temporalInput);

  // Selecciona el texto
  temporalInput.select();
  temporalInput.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el texto al portapapeles
  document.execCommand('copy');

  // Elimina el elemento temporal
  document.body.removeChild(temporalInput);

  // Mensaje de confirmación
  alert('Texto copiado: ' + textoACopiar2.textContent);
});
