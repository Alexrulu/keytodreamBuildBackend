const express = require('express')
const router = express.Router()
const Property = require('../models/Property')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const multer = require('multer')
const fs = require('fs');
const path = require('path');


//MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }  
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten imágenes'), false);
  }
}
const upload = multer({ storage, fileFilter })

//OBTENER PROPIEDADES
router.get('/', async (req, res) => {
  try {
    const properties = await Property.findAll()
    res.status(200).json(properties)
  } catch (error) {
    console.error('Error al obtener propiedades:', error)
    res.status(500).json({ error: 'Error al obtener las propiedades' })
  }
})

//OBTENER PROPIEDADES POR ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id)
    if (!property) return res.status(404).json({ error: 'Propiedad no encontrada' })
    res.status(200).json(property)
  } catch (error) {
    console.error('Error al obtener la propiedad:', error)
    res.status(500).json({ error: 'Error al obtener la propiedad' })
  }
})

//OBTENER PROPIEDADES POR OWNER ID
router.get('/owner/:ownerId', async (req, res) => {
  try {
    const properties = await Property.findAll({
      where: { ownerId: req.params.ownerId }
    });

    res.status(200).json(properties);
  } catch (error) {
    console.error('Error al obtener propiedades del usuario:', error);
    res.status(500).json({ error: 'Error al obtener propiedades del usuario' });
  }
});

//PUBLICAR PROPIEDAD
router.post('/posting', upload.fields([
  { name: 'principalImage' , maxCount: 1 },
  { name: 'secondaryImages', maxCount: 3 }
]), async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Usuario no autenticado' })
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findByPk(decoded.id)
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
    const {
      type, model, adress, city, m2tot, kitchen, pool, balcony, grill, laundry, vigilance, 
      ambiente, bathroom, cars, bedroom, price, description, personalName
    } = req.body;
    const principalImage = req.files['principalImage'] ? `/images/${req.files['principalImage'][0].filename}` : null
    const secondaryImages = req.files['secondaryImages']?.map(f => `/images/${f.filename}`) || []
    const newProperty = await Property.create({
      ownerId: user.id,
      type, model, adress, city, m2tot, m2cov: 0, ambiente, bathroom, cars, bedroom,
      kitchen, pool, balcony, grill, laundry, vigilance,
      principalImage, secondaryImages,
      video: null,
      contact: user.userType, email: user.email, personalName, phoneBusiness: '', phonePersonal: user.phone,
      price, description
    })
    res.status(201).json(newProperty)
  } catch (error) {
    console.error('Error al crear propiedad:', error)
    res.status(500).json({ message: 'Error al crear la propiedad' })
  }
})

//MODIFICAR PROPIEDAD
router.put('/edit/:id', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Usuario no autenticado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    const property = await Property.findByPk(req.params.id);
    if (!property) return res.status(404).json({ error: 'Propiedad no encontrada' });
    if (property.ownerId !== user.id && user.userType !== 10) {
      return res.status(403).json({ error: 'No tienes permiso para modificar esta propiedad' });
    }
    const {
      type, model, adress, city, m2tot, kitchen, pool, balcony, grill, laundry, vigilance, ambiente, bathroom, cars, bedroom,
      price, description, personalName
    } = req.body;
    await property.update({
      type, model, adress, city, m2tot, kitchen, pool, balcony, grill, laundry, vigilance,
      ambiente, bathroom, cars, bedroom,
      price, description, personalName
    });
    res.status(200).json({ message: 'Propiedad actualizada correctamente', property });
  } catch (error) {
    console.error('Error al actualizar propiedad:', error);
    res.status(500).json({ message: 'Error al actualizar la propiedad' });
  }
});

//ELIMINAR PROPIEDAD
router.delete('/delete/:id', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No autorizado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    const userId = decoded.id;

    const property = await Property.findByPk(req.params.id);
    if (!property) return res.status(404).json({ message: 'Propiedad no encontrada' });

    if (property.ownerId !== userId && !(user.userType === 10)) {
      return res.status(403).json({ message: 'No tienes permiso para eliminar esta propiedad' });
    }

    // Ruta base donde están las imágenes
    const imagePath = path.join(__dirname, '..', 'public');

    // Eliminar imagen principal
    if (property.principalImage) {
      const fullPath = path.join(imagePath, property.principalImage);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    }

    // Eliminar imágenes secundarias
    if (property.secondaryImages && Array.isArray(property.secondaryImages)) {
      for (const img of property.secondaryImages) {
        const fullPath = path.join(imagePath, img);
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      }
    }

    await property.destroy();
    res.status(200).json({ message: 'Propiedad e imágenes eliminadas correctamente' });
  } catch (err) {
    console.error('Error al eliminar propiedad:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
});




module.exports = router;
