const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const servicioRoutes = require('./routes/servicioRoutes');
const contactoRoutes = require('./routes/contactoRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
})
.then(() => {
    console.log('Conectado a MongoDB Atlas');
})
.catch(err => {
    console.error('Error de conexión a MongoDB:', err.message);
    process.exit(1);
});

// Manejo de eventos de conexión
mongoose.connection.on('connected', () => {
    console.log('Mongoose conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error en la conexión de Mongoose:', err.message);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose desconectado de MongoDB');
});

// Rutas
app.use('/api', servicioRoutes);
app.use('/api', contactoRoutes);

// Ruta para Acerca de
app.get('/api/acerca-de', (req, res) => {
    res.json({
        integrantes: [
            "Juan Pablo Zapata Alvarez",
            "Brian Stiven Torres Velasquez",
            "Diego Alejandro Zapata García",
            "Juan Estiven Eusse Ramirez"
        ]
    });
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
}); 