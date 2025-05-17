const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

//RUTAS
const userRoutes = require('./routes/userRoutes')
const propertyRoutes = require('./routes/propertyRoutes')

//SERVIDOR
const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

//API
app.use(cors({
  origin: 'https://keytodream.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

//CRUD
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/images', express.static(path.join(__dirname, 'public/images')));

//RUN
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
