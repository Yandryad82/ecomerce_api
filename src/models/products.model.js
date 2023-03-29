const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Products = db.define(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    productImage: {
      type: DataTypes.TEXT,
      unique: true,
      field: 'product_image',
    },
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Products;