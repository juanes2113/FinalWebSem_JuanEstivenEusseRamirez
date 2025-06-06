const express = require('express');
const router = express.Router();
const AgenteContacto = require('../controllers/contactoController');

// Rutas para contacto
router.get('/contacto/mensajes', AgenteContacto.obtenerMensajes);
router.post('/contacto', AgenteContacto.guardarMensaje);

module.exports = router; 