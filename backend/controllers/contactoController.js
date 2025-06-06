const MensajeContacto = require('../models/MensajeContacto');

// AgenteContacto: Maneja el guardado de mensajes de contacto
const AgenteContacto = {
    // Obtener todos los mensajes de contacto
    obtenerMensajes: async (req, res) => {
        try {
            const mensajes = await MensajeContacto.find()
                .sort({ createdAt: -1 }); // Ordenar por fecha de creación, más recientes primero
            
            res.status(200).json({
                mensaje: 'Mensajes recuperados exitosamente',
                data: mensajes
            });
        } catch (error) {
            res.status(500).json({ 
                mensaje: 'Error al obtener los mensajes de contacto', 
                error: error.message 
            });
        }
    },

    // Guardar un nuevo mensaje de contacto
    guardarMensaje: async (req, res) => {
        try {
            const { remitente, email, contenido } = req.body;
            
            const nuevoMensaje = new MensajeContacto({
                remitente,
                email,
                contenido
            });

            const mensajeGuardado = await nuevoMensaje.save();
            res.status(201).json({
                mensaje: 'Mensaje de contacto guardado exitosamente',
                data: mensajeGuardado
            });
        } catch (error) {
            res.status(500).json({ 
                mensaje: 'Error al guardar el mensaje de contacto', 
                error: error.message 
            });
        }
    }
};

module.exports = AgenteContacto; 