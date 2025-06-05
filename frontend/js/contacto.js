// Configuración de la API
const API_URL = 'http://localhost:5000/api';

// Función para manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        remitente: document.getElementById('remitente').value,
        email: document.getElementById('email').value,
        contenido: document.getElementById('contenido').value
    };

    try {
        const response = await fetch(`${API_URL}/contacto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            mostrarMensaje('¡Mensaje enviado con éxito!', 'success');
            document.getElementById('contactForm').reset();
        } else {
            mostrarMensaje('Error al enviar el mensaje. Por favor, intente nuevamente.', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarMensaje('Error al enviar el mensaje. Por favor, intente nuevamente.', 'error');
    }
});

// Función para mostrar mensajes de éxito o error
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje ${tipo}`;
    mensajeDiv.textContent = mensaje;

    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(mensajeDiv, form);

    // Remover el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
} 