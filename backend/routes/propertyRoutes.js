const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Ruta para obtener todas las propiedades
router.get('/', async (req, res) => {
  try {
    console.log('Verificando la conexión con la base de datos...');
    const properties = await Property.findAll();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error en la consulta de propiedades:', error);
    res.status(500).json({ error: 'Error al obtener las propiedades' });
  }
});

// Ruta para obtener una propiedad por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params; // Obtener el ID de la propiedad desde la URL

  try {
    // Buscar la propiedad por su ID
    const property = await Property.findByPk(id); // Asumiendo que 'findByPk' es el método correcto para tu ORM

    if (!property) {
      return res.status(404).json({ error: 'Propiedad no encontrada' });
    }

    res.status(200).json(property);
  } catch (error) {
    console.error('Error en la consulta de propiedad:', error);
    res.status(500).json({ error: 'Error al obtener la propiedad' });
  }
});

module.exports = router;
