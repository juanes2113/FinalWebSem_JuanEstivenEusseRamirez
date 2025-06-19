
async function cargarServicios() {
    try {
        const response = await fetch(`api/servicios`);
        const servicios = await response.json();
        mostrarServicios(servicios);
    } catch (error) {
        console.error('Error al cargar los servicios:', error);
        mostrarError(
            'No se pudieron cargar los servicios. Por favor, intente más tarde.'
        );
    }
}

// Función para mostrar los servicios en la página
function mostrarServicios(servicios) {
    const serviciosGrid = document.getElementById('servicios-grid');
    serviciosGrid.innerHTML = '';

    if (servicios.length === 0) {
        serviciosGrid.innerHTML =
            '<p class="no-servicios">No hay servicios disponibles.</p>';
        return;
    }

    servicios.forEach((servicio) => {
        const servicioCard = document.createElement('div');
        servicioCard.className = 'servicio-card';
        servicioCard.innerHTML = `
            <h3>${servicio.titulo}</h3>
            <p>${servicio.descripcion}</p>
            <p class="precio">Costo: $${servicio.costo}</p>
            <p class="id">ID: ${servicio._id}</p>
        `;
        serviciosGrid.appendChild(servicioCard);
    });
}

// Función para buscar un servicio por ID
async function buscarServicioPorId() {
    const servicioId = document.getElementById('servicioId').value;
    if (!servicioId) {
        mostrarErrorServicioIndividual('Por favor, ingrese un ID de servicio');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/servicios/${servicioId}`);
        if (!response.ok) {
            throw new Error('Servicio no encontrado');
        }
        const servicio = await response.json();
        mostrarServicioIndividual(servicio);
    } catch (error) {
        console.error('Error al buscar el servicio:', error);
        mostrarErrorServicioIndividual(
            'No se pudo encontrar el servicio especificado'
        );
    }
}

// Función para mostrar un servicio individual
function mostrarServicioIndividual(servicio) {
    const servicioDiv = document.getElementById('servicio-individual');
    servicioDiv.innerHTML = `
        <div class="servicio-detalle">
            <h3>${servicio.titulo}</h3>
            <p>${servicio.descripcion}</p>
            <p class="precio">Costo: $${servicio.costo}</p>
            <p class="id">ID: ${servicio._id}</p>
        </div>
    `;
}

// Función para mostrar error en servicio individual
function mostrarErrorServicioIndividual(mensaje) {
    const servicioDiv = document.getElementById('servicio-individual');
    servicioDiv.innerHTML = `
        <div class="error-mensaje">
            <p>${mensaje}</p>
        </div>
    `;
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'error-mensaje';
    mensajeDiv.textContent = mensaje;

    const header = document.querySelector('.servicios-header');
    header.insertAdjacentElement('afterend', mensajeDiv);

    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

// Cargar los servicios cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarServicios);
