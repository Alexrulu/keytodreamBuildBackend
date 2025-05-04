const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    console.log('Verificando la conexión con la base de datos...');
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error en la consulta de usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Registro de nuevos usuarios
router.post('/register', async (req, res) => {
  const {
    userType,
    email,
    password,
    name,
    fiscalCondition,
    dni,
    phone,
    cellphone,
    terms,
    privacyPolicy
  } = req.body;
  if (!userType || !email || !password || !name || !dni || !phone || !terms || !privacyPolicy) {
    return res.status(400).json({ error: 'Por favor, complete todos los campos requeridos.' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Este correo ya está registrado.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      id: uuidv4(),
      userType,
      email,
      password: hashedPassword,
      name,
      razonSocial: null, // no se usa
      fiscalCondition,
      dni,
      phone,
      cellphone,
      favoritos: []
    });
    console.log('Nuevo usuario registrado:', newUser.id);
    return res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Login de usuario
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Por favor, ingresa tu correo y contraseña.' });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Credenciales incorrectas.' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: 'Credenciales incorrectas.' });
    }
    const token = jwt.sign(
      { id: user.id, 
        email: user.email, 
        userType: user.userType
      }, // Payload
      process.env.JWT_SECRET, // La clave secreta que debes definir en tu archivo .env
      { expiresIn: '1h' } // El token expirará en 1 hora
    );
    return res.status(200).json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error('Error en el login:', error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Usuario en sesion
router.get('/me', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extrae el token del encabezado

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      dni: user.dni,
      userType: user.userType,
      favoritos: user.favoritos
    });
  } catch (error) {
    console.error('Error al verificar el token:', error);
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
});


module.exports = router;
