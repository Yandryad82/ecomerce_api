const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Cars = db.define(
  'cars',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      unique: true,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
);

module.exports = Cars;