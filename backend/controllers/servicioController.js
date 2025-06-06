const Servicio = require('../models/Servicio');

// AgenteServicio: Maneja la lógica relacionada con los servicios
const AgenteServicio = {
    // Obtener todos los servicios
    obtenerServicios: async (req, res) => {
        try {
            const servicios = await Servicio.find();
            res.json(servicios);
        } catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener los servicios', error: error.message });
        }
    },

    // Obtener un servicio específico por ID
    obtenerServicioPorId: async (req, res) => {
        try {
            const servicio = await Servicio.findById(req.params.id);
            if (!servicio) {
                return res.status(404).json({ mensaje: 'Servicio no encontrado' });
            }
            res.json(servicio);
        } catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener el servicio', error: error.message });
        }
    },

    // Crear un nuevo servicio
    crearServicio: async (req, res) => {
        try {
            const { titulo, descripcion, costo } = req.body;
            
            // Validar que todos los campos requeridos estén presentes
            if (!titulo || !descripcion || !costo) {
                return res.status(400).json({ 
                    mensaje: 'Todos los campos son requeridos (titulo, descripcion, costo)' 
                });
            }

            const nuevoServicio = new Servicio({
                titulo,
                descripcion,
                costo
            });

            const servicioGuardado = await nuevoServicio.save();
            res.status(201).json(servicioGuardado);
        } catch (error) {
            res.status(500).json({ 
                mensaje: 'Error al crear el servicio', 
                error: error.message 
            });
        }
    }
};

module.exports = AgenteServicio; 