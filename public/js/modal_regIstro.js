
function abrirModal()  // Función para abrir el modal
{
  document.getElementById('form_logon').style.display = 'none';// Oculta el formulario de inicio de sesión
  document.getElementById('modal').style.display = 'block'; // Muestra el modal
}

function abrirModalDesdeEnlace() // Función para abrir el modal desde un enlace
{
  abrirModal(); // Muestra el modal al hacer clic en el enlace
}

function cerrarModal()  // Función para cerrar el modal
{ // Muestra el formulario de inicio de sesión al cerrar el modal
  document.getElementById('form_logon').style.display = 'inline-block';
  document.getElementById('modal').style.display = 'none'; // Oculta el modal
}

const enviarRegistro = async () => // Función asíncrona para enviar datos de registro al servidor
{// Obtiene los valores de los campos del formulario de registro
  const namer = document.getElementById('namer').value;
  const usernamer = document.getElementById('usernamer').value;
  const passwordr = document.getElementById('passwordr').value;
  const mensajeRegistro = document.getElementById('mensajeRegistro');

  try { // Envía una solicitud POST al servidor con los datos de registro
    const response = await axios.post('/api/registro', {
      namer,
      usernamer,
      passwordr
    });
    cerrarModal(); // Cierra el modal después de un registro exitoso
    if (response.status === 201) { // Si la respuesta del servidor (creado con éxito)
      // Muestra un mensaje de registro exitoso en el HTML
      mensajeRegistro.innerHTML = `<span style="color: green;">${response.data.mensaje}</span>`;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    // Maneja errores, incluyendo mensajes de error del servidor si están disponibles
    if (error.response) {
      mensajeRegistro.innerHTML = `<span style="color: red;">${error.response.data.error}</span>`;
    }
  }
};

/*
Este código contiene funciones para manejar la apertura y cierre de un modal, 
así como una función asíncrona (enviarRegistro) para enviar datos de registro 
al servidor utilizando Axios. También incluye manejo de errores y actualización 
del mensaje de registro en la interfaz de usuario en consecuencia.
*/







