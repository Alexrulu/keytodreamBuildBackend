const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');
const basename = path.basename(__filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file));  // Cargar el modelo
    db[model.name] = model(sequelize, Sequelize.DataTypes);  // Registrar el modelo en db
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
