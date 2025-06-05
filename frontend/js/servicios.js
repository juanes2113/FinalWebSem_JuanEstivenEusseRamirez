// Configuración de la API
const API_URL = 'http://localhost:5000/api';

// Función para cargar los servicios
async function cargarServicios() {
    try {
        const response = await fetch(`${API_URL}/servicios`);
        const servicios = await response.json();
        mostrarServicios(servicios);
    } catch (error) {
        console.error('Error al cargar los servicios:', error);
        mostrarError('No se pudieron cargar los servicios. Por favor, intente más tarde.');
    }
}

// Función para mostrar los servicios en la página
function mostrarServicios(servicios) {
    const serviciosGrid = document.getElementById('servicios-grid');
    serviciosGrid.innerHTML = '';

    servicios.forEach(servicio => {
        const servicioCard = document.createElement('div');
        servicioCard.className = 'servicio-card';
        servicioCard.innerHTML = `
            <h3>${servicio.titulo}</h3>
            <p>${servicio.descripcion}</p>
            <p class="precio">Costo: $${servicio.costo}</p>
        `;
        serviciosGrid.appendChild(servicioCard);
    });
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    const serviciosGrid = document.getElementById('servicios-grid');
    serviciosGrid.innerHTML = `
        <div class="error-mensaje">
            <p>${mensaje}</p>
        </div>
    `;
}

// Cargar los servicios cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarServicios); 