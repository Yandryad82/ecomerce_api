const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const ProductsInCar = db.define(
  'products_in_car',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'car_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'sub_total',
    },
  },
);

module.exports = ProductsInCar;