const MensajeContacto = require('../models/MensajeContacto');

// AgenteContacto: Maneja el guardado de mensajes de contacto
const AgenteContacto = {
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