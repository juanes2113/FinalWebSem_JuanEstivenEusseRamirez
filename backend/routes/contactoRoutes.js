const express = require('express');
const router = express.Router();
const AgenteContacto = require('../controllers/contactoController');

// Ruta para contacto
router.post('/contacto', AgenteContacto.guardarMensaje);

module.exports = router; 