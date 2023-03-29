const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Orders = db.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    is_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_completed',
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: 'created_at',
  }
);

module.exports = Orders;