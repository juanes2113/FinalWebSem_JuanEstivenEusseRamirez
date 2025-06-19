

// Función para mostrar mensajes de éxito
function mostrarMensajeExito(mensaje) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'mensaje-exito';
    mensajeDiv.textContent = mensaje;

    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(mensajeDiv, form);

    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'error-mensaje';
    mensajeDiv.textContent = mensaje;

    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(mensajeDiv, form);

    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        remitente: document.getElementById('remitente').value,
        email: document.getElementById('email').value,
        contenido: document.getElementById('contenido').value,
    };

    try {
        const response = await fetch(`api/contacto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            mostrarMensajeExito('Mensaje enviado exitosamente');
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarError(
            'Error al enviar el mensaje. Por favor, intente nuevamente.'
        );
    }
});
