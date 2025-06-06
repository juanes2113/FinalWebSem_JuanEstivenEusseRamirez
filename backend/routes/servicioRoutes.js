const express = require('express');
const router = express.Router();
const AgenteServicio = require('../controllers/servicioController');

// Rutas para servicios
router.get('/servicios', AgenteServicio.obtenerServicios);
router.get('/servicios/:id', AgenteServicio.obtenerServicioPorId);
router.post('/servicios', AgenteServicio.crearServicio);

module.exports = router; 