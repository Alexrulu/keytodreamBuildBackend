// Importamos las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Importamos las rutas
const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

// Crear una instancia de Express
const app = express();

// Cargar las variables de entorno del archivo .env
dotenv.config();

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Permite el acceso solo desde tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Usar las rutas
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Ruta de prueba para ver si el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor en marcha');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
