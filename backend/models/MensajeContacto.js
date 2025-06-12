const mongoose = require('mongoose');

const mensajeContactoSchema = new mongoose.Schema(
    {
        remitente: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        contenido: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('MensajeContacto', mensajeContactoSchema);
