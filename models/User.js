const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false
  },
  userType: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  razonSocial: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  fiscalCondition: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  dni: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  cellphone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  favoritos: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: true // createdAt, updatedAt
});

module.exports = User;
