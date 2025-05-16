const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Property = sequelize.define('Property', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  model: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  adress: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  city: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  m2tot: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  m2cov: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  ambiente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bathroom: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cars: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bedroom: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kitchen: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pool: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  balcony: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  grill: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  laundry: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  vigilance: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  principalImage: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  secondaryImages: {
    type: DataTypes.JSON,
    allowNull: true
  },
  video: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  contact: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  personalName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  phoneBusiness: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  phonePersonal: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(15, 0),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'properties',
  timestamps: true
});

module.exports = Property;